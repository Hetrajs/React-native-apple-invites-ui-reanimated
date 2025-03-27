import { Image, Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur"
import { useState } from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const events = [
    {
        id: 1,
        image: require("../assets/events/1.png")
    },
    {
        id: 2,
        image: require("../assets/events/2.png")
    },
    {
        id: 3,
        image: require("../assets/events/3.png")
    },
    {
        id: 4,
        image: require("../assets/events/4.png")
    },
    {
        id: 5,
        image: require("../assets/events/5.png")
    },
    {
        id: 6,
        image: require("../assets/events/6.png")
    },
    {
        id: 7,
        image: require("../assets/events/7.png")
    },
    {
        id: 8,
        image: require("../assets/events/8.png")
    }
]

export default function welcomeScreen() {

    const [activeIndex, setActiveIndex] = useState(0);

    const onButtonPress = () => {
        setActiveIndex(activeIndex >= events.length - 1 ? 0 : activeIndex + 1);
    }

    return (
        <>

            <StatusBar barStyle="light-content" />
            <View className="flex-1 items-center bg-yellow-950">
                <Animated.Image
                    entering={FadeIn.duration(1000)}
                    exiting={FadeOut.duration(1000)}
                    key={events[activeIndex].image}
                    source={events[activeIndex].image}
                    className="absolute left-0 top-0 h-full w-full"
                    resizeMode="cover"
                />
                <View className="absolute left-0 top-0 h-full w-full bg-black/70" />

                <BlurView 
                    intensity={100} 
                    className="absolute inset-0 flex-1 w-full h-full"
                >
                    <SafeAreaView className="flex-1">
                    <View className="h-3/5 w-full"> 
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            >
                            {
                                events.map((event) => (
                                    <View key={event.id} className="h-full w-96 p-5 shadow-md">
                                        <Image
                                            source={event.image}
                                            className="h-full w-full rounded-3xl"
                                            resizeMode="cover"
                                            />
                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>
                    <View className="flex-1 justify-center gap-4 p-4">
                        <Text className="text-center text-2xl font-bold text-white/60">Welcome to</Text>
                        <Text className="text-center text-5xl font-bold text-white">RHTR Invites</Text>
                        <Text className="text-center text-lg text-white/60 ">Create beautiful invitations for your events. Anyone can receive invitations.</Text>

                        <Pressable onPress={onButtonPress} className="items-center self-center rounded-full bg-white px-10 py-4">
                            <Text className="text-lg">Create an Event</Text>
                        </Pressable>
                    </View>
                    </SafeAreaView>
                </BlurView>

            </View>
        </>
    )
}