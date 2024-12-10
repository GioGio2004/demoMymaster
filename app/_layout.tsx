import '../global.css';
import AuthProviedr from '~/contexts/AuthProvider';

import { Stack } from 'expo-router';
import WelcomPage from '~/components/WolcomPage';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <>
      <AuthProviedr>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
      </AuthProviedr>
    </>
  );
}
