import { Text, View, FlatList } from 'react-native';
import events from '~/assets/events.json';
import EventListItem from '~/components/EventListItem'
import { Stack } from 'expo-router';;

export default function Home() {
  return (
    <>
    

    
      <Stack.Screen options={{ title: 'services' }} />

      <FlatList
        data={events}
        renderItem={({ item }) => <EventListItem event={item} />}
        className="bg-white"
      />
    







      {/* <View className="justify-center bg-gray-100 p-3 pt-10">
        <View className="w-1/2 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
          <Text className="mb-4 text-lg font-bold text-gray-800">Services</Text>

          <View className="flex-row items-center justify-between">
            <Text className="text-base text-gray-700">Name of Service</Text>
            <MaterialIcons name="water-damage" size={24} color="black" />
          </View>
        </View>
      </View> */}
    </>
  );
}
