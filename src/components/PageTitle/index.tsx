import { FaQuestion } from "react-icons/fa";
import styles from "./PageTitle.module.scss";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => (
  <div className={styles["page-title-container"]}>
    <h2>{title}</h2>
    <FaQuestion className={styles["page-title-icon"]}/>
  </div>
);

export default PageTitle;
