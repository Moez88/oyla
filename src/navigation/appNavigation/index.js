
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeStack from './Homestack';
import Thankyou from '../../screens/appflow/Thankyouscreen';
import Privacy from '../../screens/appflow/Privacypolicy';
import TermsandServices from '../../screens/appflow/Termsandservices';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  
  return (
    <Stack.Navigator>
    <Stack.Screen name="TabScreens" component={HomeStack} options={{ headerShown: false }} />
      <Stack.Screen name="TermsandServices" component={TermsandServices}  options={{ headerShown: false }} />
      <Stack.Screen name="Privacy" component={Privacy}  options={{ headerShown: false }} />
      <Stack.Screen name="Thankyou" component={Thankyou}  options={{ headerShown: false }} />
  </Stack.Navigator>
  );
}
export default AppNavigation