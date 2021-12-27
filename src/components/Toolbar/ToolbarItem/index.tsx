import { ToolbarItemType } from "types";
import styles from "../Toolbar.module.scss";

const ToolbarItem: React.FC<ToolbarItemType> = ({
  image,
  title,
  haveDivider = false,
}) => (
  <>
    <button>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </button>
    {haveDivider && <div className={styles["toolbar-divider"]} />}
  </>
);

export default ToolbarItem;
