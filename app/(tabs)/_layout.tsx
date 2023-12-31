import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';



export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Browse',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="Movise"
        options={{
          title: 'Movise',
          tabBarIcon: ({ color }) => <MaterialIcons name='video-library' size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="tv"
        options={{
          title: 'TV Shows',
          tabBarIcon: ({ color }) => <Entypo name='tv' size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="my-list"
        options={{
          title: 'MY List',
          tabBarIcon: ({ color }) => <Entypo name='list' size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
