import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, View, AppState, TextInput, Button, Text } from 'react-native';
import { supabase } from '~/utils/supabase';

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session) Alert.alert('Please check your inbox for email verification!');
    setLoading(false);
  }

  return (
    <View className="flex-1 bg-white p-5">
      <Stack.Screen options={{ title: 'sign in' }} />
      <View className="gap-6 pt-12">
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
          className="rounded-md border border-gray-200 p-4"
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
          className="rounded-md border border-gray-200 p-4"
        />
      </View>
      <View className="justify-center">
        <View className=" justify-center gap-5 pt-10">
          <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
          <Button title="Sign up" disabled={loading} onPress={() => signUpWithEmail()} />
        </View>
      </View>
      {/* Footer text at the bottom */}
      <View className="flex-1 justify-end pb-5 mb-5">
        {/* make this text linkes to  display content */}
        <Text className="text-md font-thin text-center">
          Privacy & Policy | Learn More
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
});
