import styles from "./TabController.module.scss";

interface TabControllerProps {
  activeTab: number;
  onChangeTab: (index: number) => void;
}

const tabs = ["Edit Project", "Locales", "Themes"];

const TabController: React.FC<TabControllerProps> = ({
  activeTab,
  onChangeTab,
}) => (
  <div className={styles["tab-controller-container"]}>
    {tabs.map((tab, index) => (
      <button
        key={index}
        onClick={() => onChangeTab(index)}
        className={activeTab === index ? styles["active-tab"] : ""}
      >
        {tab}
      </button>
    ))}
    <span className={styles["tab-controller-save-buttons"]}>
        <button>Cancel</button>
        <button>Save</button>
    </span>
  </div>
);

export default TabController;
