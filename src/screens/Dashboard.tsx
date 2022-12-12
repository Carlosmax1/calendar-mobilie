import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Calendar from "../components/Calendar";

const { Screen, Navigator } = createBottomTabNavigator();

export default function DashBoard() {
  return (
    <>
      <Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string;
            switch (route.name) {
              case 'Calendar':
                iconName = 'calendar';
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#292643',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false
        })}
      >
        <Screen options={{
          headerShown: false
        }} name="Calendar" component={Calendar} />
      </Navigator>
    </>
  )
}