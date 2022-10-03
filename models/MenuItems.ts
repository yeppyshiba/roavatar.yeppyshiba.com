import Path from "@enums/Path";

interface MenuItem {
    label: string;
    link: string;
}

const MenuItems: Array<MenuItem> = [
    {
        label: "Add",
        link: Path.ADD,
    },
    {
        label: "Browse",
        link: Path.BROWSE,
    },
];

export default MenuItems;
