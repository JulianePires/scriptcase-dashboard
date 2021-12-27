import { ToolItemType } from "types";
import { TiArrowSortedDown } from "react-icons/ti";

const ToolItem: React.FC<ToolItemType> = ({
  icon: Icon,
  isDropdown = false,
  title,
}) => (
  <span>
    <button>
      <Icon />
      {!!title && title}
      {isDropdown && <TiArrowSortedDown />}
    </button>
  </span>
);

export default ToolItem;
