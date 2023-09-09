import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../screens/appflow/Home';
import { StyleSheet, Image } from 'react-native';
import AccountStack from '../AccountStack';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { accounticon, homeicon } from '../../../services/utilities/asset';
const Tab = createBottomTabNavigator();
const HomeStack = () => {
  return (
    <Tab.Navigator
    initialRouteName="HomeStack"
    screenOptions={{
      tabBarActiveTintColor: '#000000',
      headerShown: false,
      tabBarStyle: { height: responsiveHeight(7), position: 'absolute', }
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={
        {
        tabBarLabel: 'Home',
        headerShown: false,
        tabBarLabelStyle: styles.barstyle,
        tabBarIcon: () => (
          <Image
            source={homeicon}
            style={styles.iconstyle} />
        ),
      }} />
    <Tab.Screen
      name="AccountStack"
      component={AccountStack}
      options={{
        tabBarLabel: 'Account',
        tabBarLabelStyle: styles.barstyle,
        tabBarIcon: () => (
          <Image
            source={accounticon}
            style={styles.iconstyle} />
        ),
      }} />
  </Tab.Navigator>

  )
}
export default HomeStack;

const styles = StyleSheet.create({
  barstyle:
  {
    fontSize: responsiveFontSize(1.2),
    color: "#222222"
  },
  iconstyle:
  {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
    tintColor: "#000000"
  },
  topviewhome:
  {
    flex: 0.21,
    backgroundColor: 'black',
    borderBottomLeftRadius: responsiveWidth(15),
    borderBottomRightRadius: responsiveWidth(15),
    alignItems: 'center',
    justifyContent: 'center'
  },
  hometopviewtxt:
  {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(3)
  },
  detailview:
  {
    flex: 0.07, backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailtxt:
  {
    color: '#222222',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3)
  },
})
