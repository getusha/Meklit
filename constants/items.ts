type ItemPostPropTypes = {
    item: {
        title: string;
        image: string;
        labels: string[];
    },

    user: {
        name: string;
        avatar: string;
    }
}

const items: ItemPostPropTypes[] = [
    {
        user: { name: "ከበደ", avatar: "https://randomuser.me/api/portraits/men/53.jpg" },
        item: {
            labels: ["የሚሸጥ", "ጫማ"],
            title: "ብዙም ያልተጠቀምኩበት ገራሚ አዲስ ጫማ",
            image: "https://m.media-amazon.com/images/I/41l2imvuWJL._AC_UL640_FMwebp_QL65_.jpg"
        }
    },

    {
        user: { name: "ማንይሻ", avatar: "https://randomuser.me/api/portraits/men/54.jpg" },
        item: {
            labels: ["የንጽህና", "ሳኒታይዘር"],
            title: "ሀገር ውስጥ የተመረተ ሽታው ደስ የሚል ሳኒታይዘር",
            image: "https://m.media-amazon.com/images/I/81vrIYHRxHL._AC_UL640_FMwebp_QL65_.jpg"
        }
    },

    {
        user: { name: "ናቲ", avatar: "https://randomuser.me/api/portraits/men/55.jpg" },
        item: {
            labels: ["በነጻ የሚሰጥ", "ሳሙና"],
            title: "ሽታው የሚማርክ ነጻ ሳሙና ለ 10 ሰው",
            image: "https://m.media-amazon.com/images/I/71NFkdWeJOL._AC_UL640_FMwebp_QL65_.jpg"
        }
    },

    {
        user: { name: "ኮከብ", avatar: "https://randomuser.me/api/portraits/men/56.jpg" },
        item: {
            labels: ["የሚቀየር", "ብርድልብስ"],
            title: "ወፍራም የሆነ የሚመች ብርድልብስ ሞቃት የሆነ",
            image: "https://m.media-amazon.com/images/I/A16CV1gEDGL._AC_UL640_FMwebp_QL65_.jpg"
        }
    },

    {
        user: { name: "ስሜነሽ", avatar: "https://randomuser.me/api/portraits/men/57.jpg" },
        item: {
            labels: ["የሚቀየር", "ጫማ"],
            title: "ብዙም ያልተጠቀምኩበት ገራሚ አዲስ ጫማ",
            image: "https://m.media-amazon.com/images/I/81P2YEg-I+L._AC_UL640_FMwebp_QL65_.jpg"
        }
    },

    {
        user: { name: "ማነሽ", avatar: "https://randomuser.me/api/portraits/men/58.jpg" },
        item: {
            labels: ["የሚቀየር", "ጫማ"],
            title: "ትንሽ የተጠቀምኩበት ምንም ያልሆነ ጫማ",
            image: "https://m.media-amazon.com/images/I/81+SwSx8DSL._AC_UL640_FMwebp_QL65_.jpg"
        }
    },

    {
        user: { name: "አየለች", avatar: "https://randomuser.me/api/portraits/men/59.jpg" },
        item: {
            labels: ["የሚሸጥ", "ቀሚስ"],
            title: "ብዙም ያልተጠቀምኩበት ገራሚ አዲስ ጫማ",
            image: "https://m.media-amazon.com/images/I/31qvSAizdDL._AC_.jpg"
        }
    },


]

export default items;