import { ScrollView } from "react-native";
import PostItem from "../components/PostItem";
import { DUMMY_POST_ITEMS } from "../constants/CONST";

export default function PostsScreen() {
    return (
        <ScrollView>
            {DUMMY_POST_ITEMS.map((dItem) => {
                return (
                    <PostItem
                        title={dItem.title}
                        imageUri={dItem.imageUri}
                        itemReport={dItem.reports}
                    />
                )
            })}
        </ScrollView>
    )
}