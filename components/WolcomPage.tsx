import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";


export default function WelcomPage(){
    return(
        <View>
            <Text>welcome</Text>
            <Link href={'/'} asChild>
            <Pressable>

            </Pressable>
            </Link>
        </View>
    )
}