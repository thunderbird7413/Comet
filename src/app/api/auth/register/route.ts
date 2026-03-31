import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { connectDB } from '@/lib/mongodb';
import User from '@/lib/models/User';

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const { name, email, phone, password, referralCode } = await req.json();


        // Validate required fields
        if (!name || !email || !phone || !password) {
            return NextResponse.json(
                { error: 'Name, email, phone, and password are required.' },
                { status: 400 }
            );
        }
        // Basic phone validation (10-15 digits)
        if (!/^\d{10,15}$/.test(phone)) {
            return NextResponse.json(
                { error: 'Please enter a valid phone number (10-15 digits).' },
                { status: 400 }
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { error: 'Password must be at least 6 characters.' },
                { status: 400 }
            );
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return NextResponse.json(
                { error: 'This email is already registered. Please sign in.' },
                { status: 409 }
            );
        }

        // Hash the password
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create user
        const user = await User.create({
            name,
            email: email.toLowerCase(),
            phone,
            password: hashedPassword,
            referralCode: referralCode || '',
        });

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id.toString(), email: user.email },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        return NextResponse.json({
            success: true,
            token,
            user: {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
                phone: user.phone,
                referralCode: user.referralCode,
            },
        });
    } catch (error: unknown) {
        console.error('Register error:', error);
        return NextResponse.json(
            { error: 'Internal server error. Please try again.' },
            { status: 500 }
        );
    }
}
