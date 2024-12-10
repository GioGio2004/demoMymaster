// import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View, Button } from 'react-native';

// import { ScreenContent } from '~/components/ScreenContent';

export default function Modal() {
  return (
    <>
      <View className="flex-1 gap-3 text-wrap bg-white pt-10">
        <Text className="text-black text-balance p-5">
          Kind Reminder We kindly request all our users to maintain a friendly and respectful
          attitude while using our services. This ensures a smooth and pleasant experience for
          everyone.
          📋 After completing your order, we encourage you to share your valuable feedback
          by leaving a review. Your input helps us improve and serve you better. Thank you for your
          cooperation! 🌟
        </Text>
      </View>
    </>
  );
}
