import { useTheme } from "../context/ThemeContext";
import styles from "./Header.module.css";

export default function ThemeDropdown() {
    const { theme, setTheme } = useTheme();

    return (
        <select
            value={theme}
            onChange={(e) => {
                setTheme(e.target.value as any);
                localStorage.setItem("theme", e.target.value);
            }}
            className={styles.select}
        >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
        </select>
    );
}
