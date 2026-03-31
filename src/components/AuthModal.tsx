"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, EyeOff, Loader2, User, Mail, Lock, Gift } from "lucide-react";
import { useAuth } from "./AuthContext";
import "./AuthModal.css";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultTab?: "register" | "login";
}

export default function AuthModal({ isOpen, onClose, defaultTab = "register" }: AuthModalProps) {
    const { login } = useAuth();
    const [tab, setTab] = useState<"register" | "login">(defaultTab);

    // Register form state
    const [regName, setRegName] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPhone, setRegPhone] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [regReferral, setRegReferral] = useState("");
    const [regShowPw, setRegShowPw] = useState(false);

    // Login form state
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginShowPw, setLoginShowPw] = useState(false);

    // Shared state
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Reset on open/tab change
    useEffect(() => {
        setError("");
        setSuccess("");
    }, [tab, isOpen]);

    useEffect(() => {
        if (isOpen) setTab(defaultTab);
    }, [isOpen, defaultTab]);

    // Prevent scroll
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(""); setSuccess("");


        if (!regName.trim() || !regEmail.trim() || !regPhone.trim() || !regPassword.trim()) {
            return setError("Name, email, phone, and password are required.");
        }
        // Basic phone validation (10-15 digits)
        if (!/^\d{10,15}$/.test(regPhone.trim())) {
            return setError("Please enter a valid phone number (10-15 digits).");
        }
        if (regPassword.length < 6) {
            return setError("Password must be at least 6 characters.");
        }

        setLoading(true);
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: regName.trim(),
                    email: regEmail.trim(),
                    phone: regPhone.trim(),
                    password: regPassword,
                    referralCode: regReferral.trim(),
                }),
            });
            const data = await res.json();
            if (!res.ok) return setError(data.error || "Registration failed.");

            login(data.token, data.user);
            setSuccess(`Welcome, ${data.user.name}! You're now registered 🚀`);
            setTimeout(onClose, 1500);
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(""); setSuccess("");

        if (!loginEmail.trim() || !loginPassword.trim()) {
            return setError("Email and password are required.");
        }

        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: loginEmail.trim(), password: loginPassword }),
            });
            const data = await res.json();
            if (!res.ok) return setError(data.error || "Login failed.");

            login(data.token, data.user);
            setSuccess(`Welcome back, ${data.user.name}! ✨`);
            setTimeout(onClose, 1500);
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="auth-overlay" onClick={onClose}>
                    <motion.div
                        className="auth-modal"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.85, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 40 }}
                        transition={{ type: "spring", damping: 26, stiffness: 320 }}
                    >
                        {/* Glow blobs */}
                        <div className="auth-glow auth-glow-top" />
                        <div className="auth-glow auth-glow-bottom" />

                        {/* Close button */}
                        <button className="auth-close" onClick={onClose} aria-label="Close">
                            <X size={20} />
                        </button>

                        {/* Header */}
                        <div className="auth-header">
                            <div className="auth-logo-mark">
                                <img src="/icon.png" alt="Comet Logo" className="auth-logo-img" />
                            </div>
                            <p className="auth-site-name">COMET — IIT ROORKEE</p>
                        </div>

                        {/* Tab Switcher */}
                        <div className="auth-tabs">
                            <button
                                className={`auth-tab ${tab === "register" ? "active" : ""}`}
                                onClick={() => setTab("register")}
                            >
                                Register
                            </button>
                            <button
                                className={`auth-tab ${tab === "login" ? "active" : ""}`}
                                onClick={() => setTab("login")}
                            >
                                Sign In
                            </button>
                            <div className={`auth-tab-indicator ${tab === "login" ? "right" : "left"}`} />
                        </div>

                        {/* Error / Success banners */}
                        <AnimatePresence mode="wait">
                            {error && (
                                <motion.div
                                    className="auth-banner auth-banner-error"
                                    key="err"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    {error}
                                </motion.div>
                            )}
                            {success && (
                                <motion.div
                                    className="auth-banner auth-banner-success"
                                    key="suc"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    {success}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Forms */}
                        <AnimatePresence mode="wait">
                            {tab === "register" ? (
                                <motion.form
                                    key="register"
                                    className="auth-form"
                                    onSubmit={handleRegister}
                                    initial={{ opacity: 0, x: -24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 24 }}
                                    transition={{ duration: 0.22 }}
                                >
                                    {/* Name */}
                                    <div className="auth-field">
                                        <label className="auth-label">Full Name</label>
                                        <div className="auth-input-wrap">
                                            <User size={16} className="auth-input-icon" />
                                            <input
                                                className="auth-input"
                                                type="text"
                                                placeholder="John Doe"
                                                value={regName}
                                                onChange={(e) => setRegName(e.target.value)}
                                                autoComplete="name"
                                                disabled={loading}
                                            />
                                        </div>
                                    </div>


                                    {/* Phone */}
                                    <div className="auth-field">
                                        <label className="auth-label">Phone Number</label>
                                        <div className="auth-input-wrap">
                                            <input
                                                className="auth-input"
                                                type="tel"
                                                placeholder="e.g. 9876543210"
                                                value={regPhone}
                                                onChange={(e) => setRegPhone(e.target.value.replace(/[^\d]/g, ""))}
                                                autoComplete="tel"
                                                maxLength={15}
                                                disabled={loading}
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="auth-field">
                                        <label className="auth-label">Email Address</label>
                                        <div className="auth-input-wrap">
                                            <Mail size={16} className="auth-input-icon" />
                                            <input
                                                className="auth-input"
                                                type="email"
                                                placeholder="you@example.com"
                                                value={regEmail}
                                                onChange={(e) => setRegEmail(e.target.value)}
                                                autoComplete="email"
                                                disabled={loading}
                                            />
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className="auth-field">
                                        <label className="auth-label">Password</label>
                                        <div className="auth-input-wrap">
                                            <Lock size={16} className="auth-input-icon" />
                                            <input
                                                className="auth-input"
                                                type={regShowPw ? "text" : "password"}
                                                placeholder="Min. 6 characters"
                                                value={regPassword}
                                                onChange={(e) => setRegPassword(e.target.value)}
                                                autoComplete="new-password"
                                                disabled={loading}
                                            />
                                            <button
                                                type="button"
                                                className="auth-pw-toggle"
                                                onClick={() => setRegShowPw((v) => !v)}
                                                tabIndex={-1}
                                            >
                                                {regShowPw ? <EyeOff size={15} /> : <Eye size={15} />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Referral code */}
                                    <div className="auth-field">
                                        <label className="auth-label">
                                            Referral Code <span className="auth-optional">(optional)</span>
                                        </label>
                                        <div className="auth-input-wrap">
                                            <Gift size={16} className="auth-input-icon" />
                                            <input
                                                className="auth-input"
                                                type="text"
                                                placeholder="e.g. COMET2025"
                                                value={regReferral}
                                                onChange={(e) => setRegReferral(e.target.value)}
                                                disabled={loading}
                                            />
                                        </div>
                                    </div>

                                    <button className="auth-submit" type="submit" disabled={loading}>
                                        {loading ? (
                                            <><Loader2 size={16} className="auth-spinner" /> Registering…</>
                                        ) : (
                                            "CREATE ACCOUNT"
                                        )}
                                    </button>

                                    <p className="auth-switch-hint">
                                        Already registered?{" "}
                                        <button type="button" className="auth-switch-link" onClick={() => setTab("login")}>
                                            Sign In
                                        </button>
                                    </p>
                                </motion.form>
                            ) : (
                                <motion.form
                                    key="login"
                                    className="auth-form"
                                    onSubmit={handleLogin}
                                    initial={{ opacity: 0, x: 24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -24 }}
                                    transition={{ duration: 0.22 }}
                                >
                                    {/* Email */}
                                    <div className="auth-field">
                                        <label className="auth-label">Email Address</label>
                                        <div className="auth-input-wrap">
                                            <Mail size={16} className="auth-input-icon" />
                                            <input
                                                className="auth-input"
                                                type="email"
                                                placeholder="you@example.com"
                                                value={loginEmail}
                                                onChange={(e) => setLoginEmail(e.target.value)}
                                                autoComplete="email"
                                                disabled={loading}
                                            />
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className="auth-field">
                                        <label className="auth-label">Password</label>
                                        <div className="auth-input-wrap">
                                            <Lock size={16} className="auth-input-icon" />
                                            <input
                                                className="auth-input"
                                                type={loginShowPw ? "text" : "password"}
                                                placeholder="Your password"
                                                value={loginPassword}
                                                onChange={(e) => setLoginPassword(e.target.value)}
                                                autoComplete="current-password"
                                                disabled={loading}
                                            />
                                            <button
                                                type="button"
                                                className="auth-pw-toggle"
                                                onClick={() => setLoginShowPw((v) => !v)}
                                                tabIndex={-1}
                                            >
                                                {loginShowPw ? <EyeOff size={15} /> : <Eye size={15} />}
                                            </button>
                                        </div>
                                    </div>

                                    <button className="auth-submit" type="submit" disabled={loading}>
                                        {loading ? (
                                            <><Loader2 size={16} className="auth-spinner" /> Signing in…</>
                                        ) : (
                                            "SIGN IN"
                                        )}
                                    </button>

                                    <p className="auth-switch-hint">
                                        New here?{" "}
                                        <button type="button" className="auth-switch-link" onClick={() => setTab("register")}>
                                            Create an account
                                        </button>
                                    </p>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
