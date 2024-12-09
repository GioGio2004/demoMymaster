import { Link, Redirect, Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

import { HeaderButton } from '../../components/HeaderButton';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useAuth } from '~/contexts/AuthProvider';


export default function TabLayout() {
  //@ts-ignore
  const { isAuth } = useAuth();
  // console.warn(isAuth);

  if (!isAuth) {
    //@ts-ignore
    return <Redirect href={'/login'} />;
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'red',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Services',
          tabBarIcon: ({ color }) => <MaterialIcons name="home-repair-service" size={24} color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: 'Support',
          tabBarIcon: ({ color }) => <MaterialIcons name="contact-support" size={24} color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'orders',
          tabBarIcon: ({ color }) => <AntDesign name="shoppingcart" size={24} color={color}/>,
        }}
      />

    </Tabs>
  );
}
