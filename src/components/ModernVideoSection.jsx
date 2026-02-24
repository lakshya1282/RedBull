import React, { useRef } from 'react';

const ModernVideoSection = ({ videoSrc, alignment = 'left', title, subtitle, ctaText = 'Learn More', features = [] }) => {
    // Handling arrays locally for now (taking first item) to test basic render
    const displayTitle = Array.isArray(title) ? title[0] : title;
    const displaySubtitle = Array.isArray(subtitle) ? subtitle[0] : subtitle;

    const isRight = alignment === 'right';

    const styles = {
        section: {
            height: '100vh',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: isRight ? 'flex-end' : 'flex-start',
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
            background: isRight
                ? 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)'
                : 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)',
            zIndex: 1
        },
        textContainer: {
            zIndex: 2,
            position: 'relative',
            maxWidth: '600px',
            textAlign: isRight ? 'right' : 'left',
            color: '#fff'
        },
        heading: {
            fontFamily: "'Oswald', sans-serif",
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 700,
            margin: '0 0 1rem 0',
            textTransform: 'uppercase',
            lineHeight: 1,
            color: '#fff',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
        },
        subtitle: {
            fontSize: '1.25rem',
            lineHeight: 1.6,
            fontWeight: 400,
            opacity: 0.9,
            marginBottom: '2rem',
            fontFamily: "'Inter', sans-serif"
        },
        button: {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '1rem 3rem',
            fontSize: '1rem',
            fontWeight: '600',
            fontFamily: "'Oswald', sans-serif",
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            borderRadius: '4px'
        },
        featuresContainer: {
            display: 'flex',
            gap: '2rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
            justifyContent: isRight ? 'flex-end' : 'flex-start'
        },
        featureItem: {
            display: 'flex',
            flexDirection: 'column',
            borderLeft: isRight ? 'none' : '2px solid #ff0000',
            borderRight: isRight ? '2px solid #ff0000' : 'none',
            paddingLeft: isRight ? 0 : '1rem',
            paddingRight: isRight ? '1rem' : 0,
            alignItems: isRight ? 'flex-end' : 'flex-start'
        },
        featureValue: {
            fontFamily: "'Oswald', sans-serif",
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1
        },
        featureLabel: {
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.85rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginTop: '0.25rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        }
    };

    return (
        <section style={styles.section}>
            <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                style={styles.video}
            />
            <div style={styles.overlay} />
            <div style={styles.textContainer}>
                <h2 style={styles.heading}>{displayTitle}</h2>
                <p style={styles.subtitle}>{displaySubtitle}</p>

                {/* Features Grid */}
                {features && features.length > 0 && (
                    <div style={styles.featuresContainer}>
                        {features.map((feature, index) => (
                            <div key={index} style={styles.featureItem}>
                                <div style={styles.featureValue}>{feature.value}</div>
                                <div style={styles.featureLabel}>{feature.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                <button style={styles.button}>
                    {ctaText}
                </button>
            </div>
        </section>
    );
};

export default ModernVideoSection;
