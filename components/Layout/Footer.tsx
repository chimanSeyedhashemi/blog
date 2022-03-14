import styles from "../../styles/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.textColor}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://mobile.twitter.com/dan_abramov"
        >
          twitter
        </a>{" "}
        •{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/gaearon">
          github
        </a>{" "}
        •{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://stackoverflow.com/users/458193/dan-abramov"
        >
          stack overflow
        </a>
      </div>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://overreacted.io/rss.xml"
        >
          rss
        </a>
      </div>
    </footer>
  );
};
