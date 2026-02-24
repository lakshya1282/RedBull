import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        // Entrance animation for text over video
        gsap.fromTo(textRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    return (
        <section ref={containerRef} style={{
            height: '100vh', width: '100%', position: 'relative',
            overflow: 'hidden', display: 'flex', alignItems: 'center',
            justifyContent: 'flex-start', padding: '0 8%', backgroundColor: '#000'
        }}>
            {/* Full Width Background Video (No Loop) */}
            <video
                ref={videoRef}
                src="/v1.mp4"
                autoPlay
                muted
                loop={false}
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                }}
            />

            {/* Subtle Overlay to ensure text readability - Shifted to left */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)',
                zIndex: 1
            }} />

            {/* Left Side - Brands Text over Video */}
            <div ref={textRef} style={{
                zIndex: 2,
                position: 'relative',
                maxWidth: '600px',
                textAlign: 'left' // Aligned left over the background
            }}>
                <h2 style={{
                    fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    color: '#ff0000', fontWeight: 700, margin: '0 0 1.5rem 0',
                    textTransform: 'uppercase', lineHeight: 1.1,
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>
                    Vitalizes Body and Mind.
                </h2>
                <p style={{
                    fontSize: '1.25rem', color: '#fff', lineHeight: 1.6, fontWeight: 500,
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>
                    Red Bull Energy Drink is appreciated worldwide by top athletes, busy professionals, university students and travelers on long journeys. Its unique formula contains high-quality ingredients including caffeine, taurine, b-group vitamins, and sugars.
                </p>
                <div style={{ marginTop: '2.5rem' }}>
                    <button style={{
                        backgroundColor: '#ff0000', color: '#fff', border: 'none',
                        padding: '1rem 3rem', fontSize: '1rem', fontWeight: '700',
                        fontFamily: "'Oswald', sans-serif", cursor: 'pointer',
                        textTransform: 'uppercase', letterSpacing: '1px',
                        boxShadow: '0 4px 15px rgba(255,0,0,0.3)'
                    }}>
                        Explore the Formula
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
