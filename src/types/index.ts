import { IconType } from "react-icons";

export type MenuItemProps = {
    icon?: IconType,
    name?: string
}

export type ToolItemType = {
    icon: IconType;
    title?: string;
    isDropdown: boolean;
}

export type ToolbarItemType = {
    image: string;
    title: string;
    haveDivider?: boolean;
}