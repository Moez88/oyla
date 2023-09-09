import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Account from '../../../screens/appflow/Account';
import Vehicle from '../../../screens/appflow/Vehicleinfo';
import Paymentscreen from '../../../screens/appflow/Payment';
import EditProfile from '../../../screens/appflow/Profile';
const Stack = createNativeStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Account" component={Account}  options={{ headerShown: false }} />
       <Stack.Screen name="Vehicle" component={Vehicle}  options={{ headerShown: false }} />
       <Stack.Screen name="Paymentscreen" component={Paymentscreen}  options={{ headerShown: false }} />
       <Stack.Screen name="EditProfile" component={EditProfile}  options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}
export default AccountStack;
