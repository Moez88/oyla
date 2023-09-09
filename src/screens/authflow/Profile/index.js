import { View, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { CustomImageBackground, CustomHeaderView, CustomGradientButton, CustomDateTimePicker } from '../../../components'
import { responsiveHeight, } from 'react-native-responsive-dimensions'
import CustomInput from '../../../components/Inputfields'
import { gradienttxt, gradientyellow, headerviewtxt, inputyellow, placeholdercolor, white } from '../../../services/utilities/colors'
import { backarrow, bg, calender } from '../../../services/utilities/asset'
import { appstyle } from '../../../services/utilities/appstyle'
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/app';
import Toast from 'react-native-simple-toast'
const Profile = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [VehicleMake, setVehicleMake] = useState('');
  const [VehicleModel, setVehicleModel] = useState('');
  const [VehicleYear, setVehicleYear] = useState('');
  const [VehicleColor, setVehicleColor] = useState('');
  const [VehicleMileage, setVehicleMileage] = useState('')

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };
  const handleDateSelect = (date) => {
    if (date) {
      setSelectedDate(date);
      setSelectedDay(date.getDate().toString())
      setSelectedMonth((date.getMonth() + 1).toString())
      setSelectedYear(date.getFullYear().toString())
    }
    hideDatePicker();
  }
  const data = async () => {
    if(VehicleMake==='' || VehicleMileage==='' || VehicleColor===''  || VehicleModel==='' || VehicleYear==='' || FirstName==='' || LastName==='' )
    {
      Toast.show('please enter detail',Toast.SHORT)
    }
    try {
      const user = firebase.auth().currentUser;
      if (user) {
        const profileData
          = {
          Vehicleinfo: {
            VehicleMake,
            VehicleModel,
            VehicleYear,
            VehicleColor,
            VehicleMileage,
          },
          FirstName,
          LastName,
          Birthday: `${selectedMonth}/${selectedDay}/${selectedYear}`,
        };
        const userRef = firestore().collection('Users').doc(user.uid);
        await userRef.set(profileData, { merge: true });
        navigation.navigate('app', { screen: 'Home' });
      } 
    } catch (error) {
      console.error();
    }
  };
  return (
    <CustomImageBackground
      source={bg}>
      <ScrollView style={appstyle.profilemainview}>
        <StatusBar
          backgroundColor={white}
          barStyle={'dark-content'} />
        <CustomHeaderView
          text="Set Up Profile"
          textColor={headerviewtxt}
          backgroundColor={white}
          imageSource={backarrow}
          imageonpress={() => navigation.navigate('Login')} />
        <View style={appstyle.profilev2}>
          <CustomInput
            placeholder='Mike'
            placeholderTextColor={placeholdercolor}
            customText='First Name'
            marginTop={responsiveHeight(2)}
            backgroundColor={inputyellow}
            onChangeText={(text) => setFirstName(text)}/>
          <CustomInput
            placeholder='Tason'
            placeholderTextColor={placeholdercolor}
            customText='Last Name'
            marginTop={responsiveHeight(1)}
            backgroundColor={inputyellow}
            onChangeText={(text) => setLastName(text)}/>
          <CustomInput
            placeholder='09 / 08 / 1998'
            placeholderTextColor={placeholdercolor}
            customText='Birthday'
            toggleImage={calender}
            imageonpress={showDatePicker}
            value={selectedDate ? `${selectedDay}/${selectedMonth}/${selectedYear}` : ''}
            marginTop={responsiveHeight(1)}
            editable={false}
            backgroundColor={inputyellow} />
          <CustomInput
            placeholder='Enter the maker of your Vehicle'
            placeholderTextColor={placeholdercolor}
            customText='Vehicle Make'
            marginTop={responsiveHeight(1)}
            backgroundColor={inputyellow}
            onChangeText={(text) => setVehicleMake(text)} />
          <CustomInput
            placeholder='Enter the model of your Vehicle'
            placeholderTextColor={placeholdercolor}
            customText='Vehicle Model'
            marginTop={responsiveHeight(1)}
            backgroundColor={inputyellow}
            onChangeText={(text) => setVehicleModel(text)} />
          <CustomInput
            placeholder='Enter year of your Vehicle'
            placeholderTextColor={placeholdercolor}
            customText='Vehicle Year'
            marginTop={responsiveHeight(1)}
            backgroundColor={inputyellow}
            onChangeText={(text) => setVehicleYear(text)} />
          <CustomInput
            placeholder='Enter color of your Vehicle'
            placeholderTextColor={placeholdercolor}
            customText='Vehicle Color'
            marginTop={responsiveHeight(1)}
            backgroundColor={inputyellow}
            onChangeText={(text) => setVehicleColor(text)} />
          <CustomInput
            placeholder='If unknown enter approximate'
            placeholderTextColor={placeholdercolor}
            customText='Vehicel Mileage'
            marginTop={responsiveHeight(1)}
            backgroundColor={inputyellow}
            onChangeText={(text) => setVehicleMileage(text)} />
        </View>
        <View style={appstyle.profilev3}>
          <CustomGradientButton
            text="Done"
            colors={[white, gradientyellow]}
            color={gradienttxt}
            onPress={data} />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <CustomDateTimePicker
            isVisible={isDatePickerVisible}
            onConfirm={handleDateSelect}
            date={selectedDate}
            onCancel={hideDatePicker}
            mode="date" />
        </View>
      </ScrollView>
    </CustomImageBackground>
  );
};
export default Profile