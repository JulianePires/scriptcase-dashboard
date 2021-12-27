import { useState } from "react";
import EditProject from "screens/EditProject";
import Locales from "screens/Locales";
import Themes from "screens/Themes";
import TabController from "./TabController";

const tabScreens = [
  {
    title: "Edit Project",
    component: <EditProject />,
  },
  {
    title: "Locales",
    component: <Locales />,
  },
  {
    title: "Themes",
    component: <Themes />,
  },
];

const TabPanel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <TabController activeTab={activeIndex} onChangeTab={handleActiveIndex} />
      {tabScreens[activeIndex].component}
    </>
  );
};

export default TabPanel;
