import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ThemeDropdown from "./ThemeDropdown";
import styles from "./Header.module.css";

export default function Header() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    // Lock scroll and close on outside click or escape
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }

        function handleEscape(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setOpen(false);
            }
        }

        if (open) {
            document.body.style.overflow = "hidden";
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscape);
        } else {
            document.body.style.overflow = "";
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header className={styles.header}>
            <div className={styles.brand}>🎨 Theme Switcher</div>

            <nav className={styles.navLinks}>
                <Link className={styles.navLink} to="/">Home</Link>
                <Link className={styles.navLink} to="/about">About</Link>
                <Link className={styles.navLink} to="/contact">Contact</Link>
                <ThemeDropdown />
            </nav>

            <div
                className={`${styles.hamburger} ${open ? styles.open : ""}`}
                onClick={() => setOpen(!open)}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Overlay */}
            {open && <div className={styles.overlay}></div>}

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className={`${styles.mobileMenu} ${open ? styles.show : ""}`}
            >
                <Link className={styles.navLink} to="/" onClick={() => setOpen(false)}>Home</Link>
                <Link className={styles.navLink} to="/about" onClick={() => setOpen(false)}>About</Link>
                <Link className={styles.navLink} to="/contact" onClick={() => setOpen(false)}>Contact</Link>
                <ThemeDropdown />
            </div>
        </header>
    );
}
