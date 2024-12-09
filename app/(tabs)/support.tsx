import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function Support() {
  return (
    <>
      <View>
        <Text>
          this is supports page
        </Text>
      </View>
      {/* <Stack.Screen options={{ title: 'Support' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/two.tsx" title="Tab Two" />
      </View> */}
    </>
  );
}

