import { useLocalSearchParams, Stack } from 'expo-router';
import { Text, View, Image, Pressable } from 'react-native';
import events from '~/assets/events.json';
// import dayjs from 'dayjs'; // Uncomment if you need to use dayjs for date formatting

export default function EventPage() {
  const { id } = useLocalSearchParams();
  // @ts-ignore
  const event = events.find((e) => e.id == id);

  if (!event) {
    return <Text>Event not found</Text>; // Corrected the typo here
  }

  return (
    <View className="flex-1 gap-3 bg-white p-3">
      <Stack.Screen
        options={{ title: 'Event', headerBackVisible: false, headerTintColor: 'black' }}
      />
      <Image source={{ uri: event.image_url }} className="aspect-video w-full rounded-xl" />
      <Text className="text-3xl font-bold" numberOfLines={2}>
        {event.title}
      </Text>
      {/* Uncomment if you want to display the date using dayjs */}
      {/* <Text className="text-lg font-semibold uppercase text-amber-700">
        {dayjs(event.datetime).format('ddd, D MMM')} {dayjs(event.datetime).format('hh:mm A')}
      </Text> */}
      <Text className="text-lg" numberOfLines={2}>
        {event.description}
      </Text>
      {/* Footer */}
      <View className='absolute bottom-0 left-0 right-0 p-5 items-center pb-10 border-t-2 border-gray-300 flex-row justify-between'>
        <Text className='text-xl font-semibold'>check out</Text>

        <Pressable className='bg-zinc-600 p-5 px-8 rounded-md'>
          <Text className='text-white font-bold text-lg'>Place an order</Text>
        </Pressable>
      </View>
    </View>
  );
}
