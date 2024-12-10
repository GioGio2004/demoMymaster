import { Text, View,Button } from 'react-native';
import { supabase } from '~/utils/supabase';

export default function Orders() {
  return (
    <View>
      <Text>hello this is my third page</Text>
      <Button title='sign out' onPress={() => supabase.auth.signOut()}></Button>
    </View>
  );
}
