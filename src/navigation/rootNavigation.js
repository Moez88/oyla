import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthNavigation from '../navigation/authNavigation'
import AppNavigation from '../navigation/appNavigation'
const Stack = createNativeStackNavigator();
const Rootnavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='auth' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth" component={AuthNavigation} />
        <Stack.Screen name="app" component={AppNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Rootnavigation;