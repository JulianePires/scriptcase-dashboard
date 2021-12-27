import NavItem from "./NavItem";
import styles from "./Navbar.module.scss";
import { FaBell, FaExpandAlt, FaFolder, FaUser, FaVideo } from "react-icons/fa";
import ToolItem from "./ToolItem";

const navOptions = [
  "Project",
  "Database",
  "Application",
  "Tools",
  "Layout",
  "Locales",
  "Modules",
  "Options",
  "Help",
];

const toolItens = [
  {
    icon: FaFolder,
    title: "samples 1.0",
    isDropdown: true,
  },
  {
    icon: FaUser,
    title: "samples 1.0",
    isDropdown: true,
  },
  {
    icon: FaVideo,
  },
  {
    icon: FaBell,
  },
  {
    icon: FaExpandAlt,
  },
];

const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <div>
        <span className={styles["navbar-logo"]}>
          <img src="logo192.png" alt="logo Scriptcase" />
        </span>
        {navOptions.map((option, index) => (
          <NavItem key={index} title={option} />
        ))}
      </div>
      <div>
        {toolItens.map((tool, index) => {
          if (tool.isDropdown) {
            return (
              <ToolItem
                key={index}
                icon={tool.icon}
                title={tool.title}
                isDropdown={tool.isDropdown}
              />
            );
          }
          return <ToolItem key={index} icon={tool.icon} isDropdown={false} />;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
