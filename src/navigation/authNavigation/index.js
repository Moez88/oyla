import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../../screens/authflow/Login';
import Signup from '../../screens/authflow/Signup';
import Profile from '../../screens/authflow/Profile';
import Splash from '../../screens/authflow/Splash';
const Stack = createNativeStackNavigator();
const Authnavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
export default Authnavigation;
