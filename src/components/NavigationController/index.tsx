import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import styles from "./NavigationController.module.scss";

interface NavigationControllerProps {
  activePage: string;
}

const NavigationController: React.FC<NavigationControllerProps> = ({
  activePage,
}) => (
  <div className={styles["navigation-controller"]}>
    <button className={styles["navigation-controller-button"]}>
      <FaCaretLeft />
    </button>
    <span className={styles["navigation-controller-tab"]}>{activePage}</span>
    <button className={styles["navigation-controller-button"]}>
      <FaCaretRight />
    </button>
  </div>
);

export default NavigationController;
