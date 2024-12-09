import { View, Text, Image, Pressable } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import dayjs from 'dayjs';

// @ts-ignore
export default function EventListItem({ event }) {
  return (
    <View className="flex-row items-start gap-4 p-4">
      <View className='flex-row gap-4 rounded-lg bg-slate-200'>
        {/* Event Card */}
        <Link href={`/${event.id}`} asChild>
          <Pressable className="w-1/2">
            <View className="rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
              {/* Card Header */}
              <Text className="mb-2 text-lg font-bold text-gray-800">{event.title}</Text>
              {/* Card Content */}
              <View className="flex-row items-center justify-between">
                <Text className="text-sm text-gray-600">Service</Text>
                <MaterialIcons name="water-damage" size={24} color="black" />
                <Image
                  source={{ uri: event.image_url }}
                  className="h-20 w-20 rounded"
                  accessibilityLabel={`${event.title} image`}
                />
              </View>
            </View>
          </Pressable>
        </Link>

        {/* Description Section */}
        <View className="flex-1 pt-2">
          <Text className="text-gray-700">{event.description}</Text>

          {/* Footer Actions */}
          <View className="mt-2 flex-row gap-4">
            <Feather name="share" size={20} color="black" accessibilityLabel="Share event" />
            <Feather name="bookmark" size={20} color="black" accessibilityLabel="Bookmark event" />
          </View>
        </View>
      </View>
    </View>
  );
}
