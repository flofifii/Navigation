import A from '../screens/A';
import B from '../screens/B';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function TabNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="A"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="A"
        component={A}
        initialParams={{ screen: 'A' }}
        options={{
          unmountOnBlur: true,
        }}
      />

      <Stack.Screen
        name="B"
        component={B}
        initialParams={{ screen: 'B' }}
        options={{
          unmountOnBlur: true,
        }}
      />
    </Stack.Navigator>
  );
}
