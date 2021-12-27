import styles from "./Locales.module.scss";

const Locales: React.FC = () => (
  <section className={styles["locales-container"]}>
    <h3>Project Languages</h3>
    <h4>
      Choose the languages that you will use for your applications. It is
      possible to choose regional settings and define a charset for each
      selected language.{" "}
    </h4>
  </section>
);

export default Locales;
