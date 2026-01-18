"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Try to play immediately on load
        audio.volume = 0.4;
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((error) => {
                    console.log("Autoplay prevented:", error);
                    setIsPlaying(false);
                });
        }

        // Also try to unlock audio on first click anywhere if not playing
        const unlockAudio = () => {
            if (!hasInteracted && audio.paused) {
                audio.play().then(() => {
                    setIsPlaying(true);
                    setHasInteracted(true);
                }).catch(() => { });
            }
        };

        window.addEventListener("click", unlockAudio, { once: true });

        return () => {
            window.removeEventListener("click", unlockAudio);
        };
    }, [hasInteracted]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 9999,
        }}>
            <audio ref={audioRef} autoPlay loop src="/audio/MVSTERIOUS, hxmr, yngastrobeatz - SLAVA FUNK! (Slowed) ｜ Game of Thrones.webm" />

            <button
                onClick={togglePlay}
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#0de785",
                    transition: "all 0.3s ease",
                    boxShadow: "0 0 15px rgba(13, 231, 133, 0.2)"
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                aria-label={isPlaying ? "Pause Music" : "Play Music"}
            >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
        </div>
    );
}
