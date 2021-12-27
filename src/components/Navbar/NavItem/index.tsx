interface NavItemProps {
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ title }) => {
  return (
    <span>
      <button>{title}</button>
    </span>
  );
};

export default NavItem;
