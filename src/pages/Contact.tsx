import styles from "./Page.module.css";

export default function Contact() {
    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <p>
                Have questions? We'd love to hear from you.
            </p>
            <div className={styles.card}>
                <h2>Email</h2>
                <p>contact@themeswitcherapp.dev</p>
                <h2>Phone</h2>
                <p>+91-9876543210</p>
            </div>
        </div>
    );
}
