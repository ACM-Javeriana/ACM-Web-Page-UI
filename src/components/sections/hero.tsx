"use client";
import React from "react";
import ThreeBlobs from "../ThreeBlobs";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden" style={{backgroundColor: '#dde5f8'}}>
            {/* Three.js Background */}
            <ThreeBlobs/>

            {/* Content Overlay with slightly increased z-index to ensure visibility over blurred blobs */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Logo */}
                    <img
                        src="/Logo_Oscuro.svg"
                        alt="Logo"
                        className="filter drop-shadow-md"
                    />

                    {/* Subtitle */}
                    <p className="font-montserrat font-400 text-lg md:text-xl lg:text-2xl text-javeriana-dark/80 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
                        ¡Hola! somos ACM Javeriana, un grupo de estudiantes apasionados por la tecnología y la innovación.
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-javeriana-medium/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-javeriana-medium rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>

            {/* Enhanced gradient overlay for depth */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/15 pointer-events-none z-10"></div>
        </section>
    );
}
