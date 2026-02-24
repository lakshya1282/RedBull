import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoSectionTwo = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        if (!textRef.current) return;

        // Simple entrance for text
        gsap.fromTo(textRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, { scope: containerRef });

    const styles = {
        section: {
            height: '100vh',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end', // Text on RIGHT
            padding: '0 8%',
            backgroundColor: '#000'
        },
        video: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)', // Gradient on right for text
            zIndex: 1
        },
        textContainer: {
            zIndex: 2,
            position: 'relative',
            maxWidth: '600px',
            textAlign: 'right'
        },
        heading: {
            fontFamily: "'Oswald', sans-serif",
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            color: '#ff0000',
            fontWeight: 700,
            margin: '0 0 1rem 0',
            textTransform: 'uppercase',
            lineHeight: 1,
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
        },
        paragraph: {
            fontSize: '1.25rem',
            color: '#fff',
            lineHeight: 1.5,
            fontWeight: 500,
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
        },
        buttonContainer: {
            marginTop: '2rem'
        },
        button: {
            backgroundColor: '#ff0000',
            color: '#fff',
            border: 'none',
            padding: '1rem 3rem',
            fontSize: '1rem',
            fontWeight: '700',
            fontFamily: "'Oswald', sans-serif",
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 4px 15px rgba(255,0,0,0.3)'
        }
    };

    return (
        <section ref={containerRef} style={styles.section}>
            <video
                src="/v2.mp4"
                autoPlay
                muted
                loop={true}
                playsInline
                style={styles.video}
            />
            <div style={styles.overlay} />
            <div ref={textRef} style={styles.textContainer}>
                <h2 style={styles.heading}>
                    Unleash Your Potential.
                </h2>
                <p style={styles.paragraph}>
                    From high-altitude adventures to intense gaming marathons, Red Bull gives you the edge you need to stay ahead of the game.
                </p>
                <div style={styles.buttonContainer}>
                    <button style={styles.button}>
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideoSectionTwo;
