import { View, StatusBar, ScrollView } from 'react-native'
import React from 'react';
import { useState, useEffect } from 'react'
import { CustomImageBackground, CustomHeaderView, CustomGradientButton, CustomDateTimePicker } from '../../../components';
import { responsiveHeight, } from 'react-native-responsive-dimensions'
import CustomInput from '../../../components/Inputfields';
import { gradienttxt, gradientyellow, inputyellow, placeholdercolor, white } from '../../../services/utilities/colors';
import { bg, calender, yellowicon } from '../../../services/utilities/asset';
import { appstyle } from '../../../services/utilities/appstyle';
import firestore from '@react-native-firebase/firestore';
import { firebase, auth } from '@react-native-firebase/app';
import Toast from 'react-native-simple-toast'
const EditProfile = ({ navigation }) => {
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
  const [VehicleMileage, setVehicleMileage] = useState('');
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

  };
  const updateUserData = async () => {
    try {
      const user = firebase.auth().currentUser;
      if (user) {
        const userRef = firestore().collection('Users').doc(user.uid);
        await userRef.update({
          FirstName,
          LastName,
          Vehicleinfo: {
            VehicleMake,
            VehicleModel,
            VehicleYear,
            VehicleColor,
            VehicleMileage,
          },
          Birthday: `${selectedMonth}/${selectedDay}/${selectedYear}`,
        });

        Toast.show('Profile data updated successfully', Toast.SHORT);
        navigation.navigate('Home');
      } else {
        console.log('User not authenticated');
      }
    } catch (error) {
      console.error('Error updating user data: ', error);
    }
  };

  const fetchUserData = async () => {
    try {
      const user = firebase.auth().currentUser;
      if (user) {
        const userRef = firestore().collection('Users').doc(user.uid);
        const doc = await userRef.get();

        if (doc.exists) {
          const userData = doc.data();
          setFirstName(userData.FirstName || '');
          setLastName(userData.LastName || '');
          setVehicleMake(userData.Vehicleinfo?.VehicleMake || '');
          setVehicleModel(userData.Vehicleinfo?.VehicleModel || '');
          setVehicleYear(userData.Vehicleinfo?.VehicleYear || '');
          setVehicleColor(userData.Vehicleinfo?.VehicleColor || '');
          setVehicleMileage(userData.Vehicleinfo?.VehicleMileage || '');
          if (userData.Birthday) {
            const [month, day, year] = userData.Birthday.split('/');
            setSelectedDay(day);
            setSelectedMonth(month);
            setSelectedYear(year);
            setSelectedDate(new Date(year, month - 1, day));
          }
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <CustomImageBackground
      source={bg}>
      <ScrollView style={appstyle.profilemainview}>
        <StatusBar
          backgroundColor={white}
          barStyle={'dark-content'} />
        <CustomHeaderView
          text="Edit Profile"
          textColor={inputyellow}
          backgroundColor={gradienttxt}
          imageSource={yellowicon}
          imageonpress={() => navigation.navigate('Account')} />
        <View style={appstyle.profilev2}>
          <CustomInput
            placeholder='Mike'
            placeholderTextColor={placeholdercolor}
            customText='First Name'
            backgroundColor={inputyellow}
            onChangeText={(text) => setFirstName(text)}
            marginTop={responsiveHeight(1.5)}
            value={FirstName}/>
          <CustomInput
            placeholder='Tason'
            placeholderTextColor={placeholdercolor}
            customText='Last Name'
            marginTop={responsiveHeight(0.5)}
            backgroundColor={inputyellow}
            onChangeText={(text) => setLastName(text)}
            value={LastName}/>
          <CustomInput
            placeholder='select your birthday'
            placeholderTextColor={placeholdercolor}
            customText='Birthday'
            toggleImage={calender}
            imageonpress={showDatePicker}
            value={selectedDate ? `${selectedDay}/${selectedMonth}/${selectedYear}` : ''}
            editable={false}
            marginTop={responsiveHeight(0.5)}
            backgroundColor={inputyellow}/>
          <CustomInput
            placeholder='Enter the maker of your Vehicle'
            placeholderTextColor={placeholdercolor}
            customText='Vehicle Make'
            marginTop={responsiveHeight(0.5)}
            backgroundColor={inputyellow}
            onChangeText={(text) => setVehicleMake(text)}
            value={VehicleMake}/>
          <CustomInput
            placeholder='Enter the model of your Vehicle'
            placeholderTextColor={placeholdercolor}
            customText='Vehicle Model'
            marginTop={responsiveHeight(0.5)}
            backgroundColor={inputyellow}
            onChangeText={(text) => setVehicleModel(text)}
            value={VehicleModel}/>
          <CustomInput
            placeholder='Enter year of your Vehicle'
            placeholderTextColor={placeholdercolor}
            customText='Vehicle Year'
            marginTop={responsiveHeight(0.5)}
            backgroundColor={inputyellow}
            onChangeText={(text) => setVehicleYear(text)}
            value={VehicleYear}/>
          <CustomInput
            placeholder='Enter color of your Vehicle'
            placeholderTextColor={placeholdercolor}
            customText='Vehicle Color'
            marginTop={responsiveHeight(0.5)}
            backgroundColor={inputyellow}
            onChangeText={(text) => setVehicleColor(text)}
            value={VehicleColor}/>
          <CustomInput
            placeholder='If unknown enter approximate'
            placeholderTextColor={placeholdercolor}
            customText='Vehicel Mileage'
            marginTop={responsiveHeight(0.5)}
            backgroundColor={inputyellow}
            onChangeText={(text) => setVehicleMileage(text)}
            value={VehicleMileage}/>
        </View>
        <View style={appstyle.profilev3}>
          <CustomGradientButton
            text="SAVE CHANGES"
            colors={[white, gradientyellow]}
            color={'#000000'}
            onPress={updateUserData} />
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
export default EditProfile

