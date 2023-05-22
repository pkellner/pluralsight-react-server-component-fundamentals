"use client";
import styles from "./page.module.css";

export default function FavoriteCookieButton({cookie}: { cookie: string }) {
  const handleClick = () => {
    if (cookie.toLowerCase().includes("chocolate")) {
      alert("I love chocolate!");
    }
  };
  return (
    <button onClick={handleClick} className={styles['btn-gradient']} >
      Favorite
    </button>
  );
}
