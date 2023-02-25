import colors from "./colors"

type listType = {
    id: number;
    title: string;
    icon: string;
    color: string;
    materialIcon?: boolean;
}

const filterList: listType[] = [
    {
        id: 0,
        title: "ሁሉንም",
        icon: "air-filter",
        color: "gray",
        materialIcon: true
    },
    {
        id: 0,
        title: "የሚበላ",
        icon: "ios-fast-food",
        color: colors.primaryYellow
    },

    {
        id: 1,
        title: "ልብስ",
        icon: "shirt-sharp",
        color: colors.primaryRed
    },

    {
        id: 2,
        title: "ጫማ",
        icon: "shoe-sneaker",
        color: colors.secondaryPurple,
        materialIcon: true
    },

    {
        id: 3,
        title: "ንጽህና",
        icon: "hand-wash",
        color: colors.secondaryGreen,
        materialIcon: true
    },

    {
        id: 4,
        title: "ጌጣጌጥ",
        icon: "md-gift",
        color: colors.primaryYellow
    },
]

export default filterList;