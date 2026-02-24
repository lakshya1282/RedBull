import React from 'react';

const ModernFooter = () => {
    const styles = {
        footer: {
            backgroundColor: '#050505',
            color: '#fff',
            padding: '4rem 8%',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem'
        },
        topSection: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2rem'
        },
        logoSection: {
            flex: '1 1 300px'
        },
        logo: {
            fontFamily: "'Oswald', sans-serif",
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem',
            letterSpacing: '1px'
        },
        description: {
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: 1.6,
            maxWidth: '300px'
        },
        linksSection: {
            display: 'flex',
            gap: '4rem',
            flexWrap: 'wrap'
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
        },
        columnTitle: {
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '0.5rem',
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        },
        link: {
            color: 'rgba(255, 255, 255, 0.6)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'color 0.2s ease',
            cursor: 'pointer'
        },
        bottomSection: {
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.4)'
        }
    };

    const LinkItem = ({ text }) => (
        <a
            style={styles.link}
            onMouseEnter={(e) => e.target.style.color = '#fff'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
        >
            {text}
        </a>
    );

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.topSection}>
                    <div style={styles.logoSection}>
                        <div style={styles.logo}>RED BULL</div>
                        <p style={styles.description}>
                            Giving wings to people and ideas. Experience the world of Red Bull without limits.
                        </p>
                    </div>
                    <div style={styles.linksSection}>
                        <div style={styles.column}>
                            <div style={styles.columnTitle}>Products</div>
                            <LinkItem text="Energy Drink" />
                            <LinkItem text="Sugarfree" />
                            <LinkItem text="Zero" />
                            <LinkItem text="Editions" />
                        </div>
                        <div style={styles.column}>
                            <div style={styles.columnTitle}>World</div>
                            <LinkItem text="Athletes" />
                            <LinkItem text="Events" />
                            <LinkItem text="TV" />
                            <LinkItem text="Merch" />
                        </div>
                        <div style={styles.column}>
                            <div style={styles.columnTitle}>Company</div>
                            <LinkItem text="Press" />
                            <LinkItem text="Jobs" />
                            <LinkItem text="Media" />
                            <LinkItem text="Contact" />
                        </div>
                    </div>
                </div>
                <div style={styles.bottomSection}>
                    <div>© 2024 Red Bull. All rights reserved.</div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <LinkItem text="Privacy Policy" />
                        <LinkItem text="Terms & Conditions" />
                        <LinkItem text="Imprint" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ModernFooter;
