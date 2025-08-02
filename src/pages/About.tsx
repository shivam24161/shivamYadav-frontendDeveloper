import styles from "./Page.module.css";

export default function About() {
    return (
        <div className={styles.container}>
            <h1>About Us</h1>
            <p>
                This is the About page. Our application is built to demonstrate a multi-theme switcher using React, TypeScript, and CSS Modules.
            </p>
            <div className={styles.card}>
                <h2>Our Mission</h2>
                <p>
                    To provide a seamless and dynamic theme-switching experience for users across different devices and layouts.
                </p>
            </div>
        </div>
    );
}
