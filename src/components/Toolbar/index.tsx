import { toolbarItens } from "./itens";
import styles from "./Toolbar.module.scss";
import ToolbarItem from "./ToolbarItem";

const Toolbar: React.FC = () => (
  <div className={styles["toolbar-container"]}>
    {toolbarItens.map((item, index) => (
      <ToolbarItem
        key={index}
        image={item.image}
        title={item.title}
        haveDivider={item.haveDivider}
      />
    ))}
  </div>
);

export default Toolbar;
