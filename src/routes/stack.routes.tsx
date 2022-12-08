import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import SingUp from '../screens/SignUp';
import DashBoard from '../screens/Dashboard';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen options={{
        headerShown: false
      }}
        name="SignIn"
        component={SignIn}
      />
      <Screen name="SignUp" component={SingUp} />
      <Screen options={{
        headerShown: false
      }} name="DashBoard" component={DashBoard} />
    </Navigator>
  )
}