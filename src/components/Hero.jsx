import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null); // Ref for text container
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef([]);
  const frameCount = 54; // 000 to 053

  // Helper to get image path
  const currentFrame = (index) =>
    `/images/sequence/final (2)_${index.toString().padStart(3, '0')}.jpg`;

  useEffect(() => {
    const loadImages = async () => {
      const promises = [];
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        promises.push(new Promise((resolve) => {
          img.onload = () => resolve(img);
          img.onerror = () => {
            console.error("Failed to load image", i);
            resolve(null); // Resolve anyway to avoid blocking
          }
        }));
        imagesRef.current.push(img);
      }

      await Promise.all(promises);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  useGSAP(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const textElements = textRef.current.children;

    // Set canvas dimensions to match window or image aspect ratio
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const render = (index) => {
      const img = imagesRef.current[index];
      if (img) {
        // "Cover" fit logic
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    // Initial render
    render(0);

    const frameConfig = {
      frame: 0
    };

    // Intro Animation Timeline
    const introTimeline = gsap.timeline({
      onComplete: () => {
        // Init ScrollTrigger after intro
        gsap.to(frameConfig, {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=150%", // Increased sensitivity (was 300%)
            pin: true,
            scrub: 0.5,
          },
          onUpdate: () => {
            render(Math.round(frameConfig.frame));
          }
        });
      }
    });

    // 1. Reveal Text (Staggered Fade In)
    introTimeline.fromTo(textElements,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power2.out" }
    );

    // 2. Reveal Canvas (Fade In)
    introTimeline.to(canvas, {
      opacity: 1,
      duration: 2.0,
      ease: "power2.inOut"
    }, "-=0.5");

    // 3. Play Frames 0-3
    introTimeline.to(frameConfig, {
      frame: 3,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => render(Math.round(frameConfig.frame))
    }, "-=1.5");

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(Math.round(frameConfig.frame));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [imagesLoaded]);

  // Styles
  const styles = {
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      pointerEvents: 'none', // Allow clicks to pass through if needed, but buttons need pointer-events: auto
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.6) 100%)', // Vignette effect
    },
    navBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2rem 4rem',
      width: '100%',
      pointerEvents: 'auto',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      fontFamily: "'Oswald', sans-serif",
      letterSpacing: '1px',
    },
    navLinks: {
      display: 'flex',
      gap: '2.5rem',
      listStyle: 'none',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      opacity: 0.9,
      transition: 'opacity 0.3s ease',
    },
    centerContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      textAlign: 'left',
      flexGrow: 1,
      pointerEvents: 'auto',
      paddingLeft: '6rem', // Added padding for left alignment
    },
    headline: {
      fontFamily: "'Oswald', sans-serif",
      fontSize: '4rem',
      fontWeight: '700',
      lineHeight: '1',
      letterSpacing: '2px',
      marginBottom: '1rem',
      textShadow: '0 0 20px rgba(255,255,255,0.1)',
      position: 'relative',
      zIndex: 2,
    },
    subheading: {
      fontSize: '1.5rem',
      fontWeight: '300',
      color: 'rgba(255,255,255,0.9)',
      marginBottom: '2.5rem',
      letterSpacing: '1px',
    },
    ctaButton: {
      backgroundColor: '#0080FF', // Vibrant Blue
      color: '#fff',
      border: 'none',
      padding: '1rem 2.5rem',
      fontSize: '1rem',
      fontWeight: '600',
      borderRadius: '50px',
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      boxShadow: '0 4px 15px rgba(0, 128, 255, 0.4)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    bottomBar: {
      padding: '2rem 4rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0.7,
      fontSize: '0.8rem',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      pointerEvents: 'auto',
    },
    bullIcon: {
      width: '40px',
      height: 'auto',
    }
  };

  return (
    <div ref={containerRef} style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ display: 'block', position: 'absolute', top: 0, left: 0, opacity: 0 }} />

      {/* Loading State */}
      {!imagesLoaded && (
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: '#050505', color: 'white', zIndex: 20
        }}>
          <div style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '2px' }}>LOADING EXPERIENCE...</div>
        </div>
      )}



      {/* UI Overlay */}
      <div style={styles.overlay}>
        {/* Top Navigation */}
        <div style={styles.navBar}>
          <div style={styles.logo}>
            <img src="/logo.svg" alt="Red Bull" style={{ height: '50px', width: 'auto' }} />
          </div>
          <ul style={styles.navLinks}>
            <li><a href="#" style={styles.navLink}>Products</a></li>
            <li><a href="#" style={styles.navLink}>Athletes</a></li>
            <li><a href="#" style={styles.navLink}>Events</a></li>
            <li><a href="#" style={styles.navLink}>Shop</a></li>
          </ul>
        </div>

        {/* Center Content */}
        <div style={styles.centerContent} ref={textRef}>
          <h1 style={styles.headline}>GIVES YOU WINGS</h1>
          <h2 style={styles.subheading}>Vitalizes Body and Mind</h2>
          <button
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 6px 20px rgba(0, 128, 255, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 15px rgba(0, 128, 255, 0.4)';
            }}
          >
            Discover More
          </button>
        </div>

        {/* Bottom Tagline */}
        <div style={styles.bottomBar}>
          <span>Caffeinated Beverage. Serve Chilled.</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
