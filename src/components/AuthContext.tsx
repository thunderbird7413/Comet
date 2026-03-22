"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface AuthUser {
    id: string;
    name: string;
    email: string;
    referralCode?: string;
}

interface AuthContextType {
    user: AuthUser | null;
    loading: boolean;
    login: (token: string, user: AuthUser) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);

    // On mount: restore session from localStorage token
    useEffect(() => {
        const restoreSession = async () => {
            const token = localStorage.getItem("comet_token");
            if (!token) {
                setLoading(false);
                return;
            }
            try {
                const res = await fetch("/api/auth/me", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (res.ok) {
                    const data = await res.json();
                    setUser(data.user);
                } else {
                    // Token invalid/expired — clear it
                    localStorage.removeItem("comet_token");
                }
            } catch {
                localStorage.removeItem("comet_token");
            } finally {
                setLoading(false);
            }
        };
        restoreSession();
    }, []);

    const login = useCallback((token: string, userData: AuthUser) => {
        localStorage.setItem("comet_token", token);
        setUser(userData);
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem("comet_token");
        setUser(null);
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
    return ctx;
}
