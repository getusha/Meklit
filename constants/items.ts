
import tshirt from "../assets/images/tshirt.jpeg";
import avatar from "../assets/images/avatar.png";
import shirt from "../assets/images/shirt.jpg";
import sweater from "../assets/images/sweater.jpg";
import jacket from "../assets/images/jacket.jpg";
import shoe from "../assets/images/shoe.jpg";
import { ImageURISource } from "react-native";

type itemType = {
    owner: string;
    labels: string[];
    title: string;
    image: ImageURISource;
}

const items : itemType[] = [
    {
        owner: "ከበደ",
        labels: ["የሚሸጥ", "ጫማ"],
        title: "ብዙም ያልተጠቀምኩበት ገራሚ አዲስ ጫማ",
        image: shoe
    },

    {
        owner: "ማንይሻ",
        labels: ["የንጽህና መጠበቂያ", "ሳኒታይዘር"],
        title: "ሀገር ውስጥ የተመረተ ሽታው ደስ የሚል ሳኒታይዘር",
        image: sweater
    },

    {
        owner: "ናቲ",
        labels: ["በነጻ የሚሰጥ", "ሳሙና"],
        title: "ሽታው የሚማርክ ነጻ ሳሙና ለ 10 ሰው",
        image: jacket
    },

    {
        owner: "ኮከብ",
        labels: ["የሚቀየር", "ብርድልብስ"],
        title: "ወፍራም የሆነ የሚመች ብርድልብስ ሞቃት የሆነ",
        image: shirt
    },

    {
        owner: "ስሜነሽ",
        labels: ["የሚቀየር", "ጫማ"],
        title: "ብዙም ያልተጠቀምኩበት ገራሚ አዲስ ጫማ",
        image: tshirt
    },

    {
        owner: "ማነሽ",
        labels: ["የሚቀየር", "ጫማ"],
        title: "ትንሽ የተጠቀምኩበት ምንም ያልሆነ ጫማ",
        image: shoe
    },

    {
        owner: "አየለች",
        labels: ["የሚሸጥ", "ቀሚስ"],
        title: "ብዙም ያልተጠቀምኩበት ገራሚ አዲስ ጫማ",
        image: avatar
    },

    
]

export default items;