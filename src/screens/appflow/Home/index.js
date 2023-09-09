import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { View, Text, StatusBar, ScrollView, TextInput, TouchableOpacity, Modal, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react';
import { CustomDateView, LocationInput, TimeInputField, CustomGradientButton, Topview, DetailView, CustomTextWithMargin } from '../../../components';
import { gradientgreen, gradienttxt, inputyellow, locationplaceholder, white } from '../../../services/utilities/colors';
import { downarrow, loation, locationvector } from '../../../services/utilities/asset';
import { appstyle } from '../../../services/utilities/appstyle';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-simple-toast'
const Home = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [locations, setLocations] = useState('')
  const [oiltype, setOiltype] = useState('')
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTime1, setSelectedTime1] = useState(null);


  const toggleModal = () => {
    setModalVisible(!modalVisible);
    setLocations('');
  };

  const handleLocationSubmit = () => {
    setLocations(locations);
    console.log('Location input text:', locations);
    setModalVisible(false);
  };

  const toggleModal1 = () => {
    setModalVisible1(!modalVisible1);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };


  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const daysInMonth = [];
  let currentDatePointer = startDate;
  while (currentDatePointer <= lastDayOfMonth) {
    daysInMonth.push(new Date(currentDatePointer));
    currentDatePointer.setDate(currentDatePointer.getDate() + 1);
  }
  

  const saveDateInfoToFirestore = () => {
    if (!selectedDate) {
      Toast.show('Please select Date', Toast.SHORT)
      return;
    }
    else if (!selectedTime || !selectedTime1) {
      Toast.show('Please select Time', Toast.SHORT)

    }
    else if (!selectedTime) {
      Toast.show('Please select Hour', Toast.SHORT)
      return;
    }
    else if (!selectedTime1) {
      Toast.show('Please select mintues', Toast.SHORT)
      return;
    }
    else if (!selectedOption) {
      Toast.show('Please select AM or PM', Toast.SHORT)
      return;
    }
    else if (selectedTime >= 13) {
      setSelectedTime(12)
    }
    else if (selectedTime1 >= 60) {
      setSelectedTime(0)
    }
    else if(!locations)
    {
      Toast.show('Please enter location', Toast.SHORT)

    }
    else if(!oiltype)
    {
      Toast.show('Please select oiltype', Toast.SHORT)

    }
    else
    {
      navigation.navigate('AccountStack', { screen: 'Vehicle' })
    }
    const time = selectedTime + ' : ' + selectedTime1 + ' ' + selectedOption;
    const db = firestore();
    const selectedDateObject = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      selectedDate
    );
    const formattedDate = `${selectedDateObject.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })}`;
    const dateInfo = {
      Date: formattedDate,
      Time: time,
      Location: locations,
      OilType: oiltype,
      UserId: currentUser ? currentUser.uid : null,

    };
    db.collection('Schedule')
      .doc(currentUser.uid)
      .set(dateInfo)
  };

  return (
    <View style={appstyle.homemaincontainer}>
      <StatusBar hidden={true} />
      <Topview
        customText={'Schedule a Time'} />
      <DetailView
        customText={'Please Enter Details'} />
      <View style={appstyle.homedateview}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {daysInMonth.map((date) => (
            <CustomDateView
              key={date.getDate()}
              day={date.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 3)}
              date={date.getDate()}
              month={date.toLocaleDateString('en-US', { month: 'long' })}
              isSelected={selectedDate === date.getDate()}
              onPress={() => {
                setSelectedDate(date.getDate());
                setSelectedTime(null);
              }} />
          ))}
        </ScrollView>
      </View>
      <View style={appstyle.hometimeview}>
        <Text style={appstyle.hometimetxt}>Enter Time</Text>
      </View>
      <View style={appstyle.hometimeinputview}>
        <TimeInputField
          placeholder='05'
          keyboardType='Phone-pad'
          marginLeft={responsiveWidth(3.3)}
          maxLength={2}
          value={selectedTime}
          onchangetext={(text) => { setSelectedTime(text); }} />
        <View style={appstyle.homedotview}>
          <Text style={appstyle.homecolontxt}>:</Text>
        </View>
        <TimeInputField
          placeholder='00'
          keyboardType='Phone-pad'
          maxLength={2}
          marginLeft={responsiveWidth(7)}
          value={selectedTime1}
          onchangetext={(text) => { setSelectedTime1(text); }} />
        <View style={appstyle.homeampmview}>
          <TouchableOpacity
            style={[appstyle.homeoption, selectedOption === 'AM' && appstyle.homeselectedOption]}
            onPress={() => handleSelectOption('AM')} >
            <View style={appstyle.homeamview}>
              <Text style={[appstyle.homeamtxt, selectedOption === 'AM']}>AM</Text>
            </View>
          </TouchableOpacity>
          <View style={appstyle.homehorizontalLine}></View>
          <TouchableOpacity
            style={[appstyle.homeoption, selectedOption === 'PM' && appstyle.homeselectedOption]}
            onPress={() => handleSelectOption('PM')} >
            <View style={appstyle.homepmview}>
              <Text style={[appstyle.homepmtxt, selectedOption === 'PM']}>PM</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={appstyle.homeloactionview}>
        <LocationInput
          customMarginTop={responsiveHeight(1)}
          locationText="Enter Location"
          placeholder={locations || 'Please enter your address'}
          editable={false}
          imageSource={locationvector}
          placeholderpress={toggleModal}
          onPressImage={toggleModal} />
        <LocationInput
          customMarginTop={responsiveHeight(1.5)}
          locationText="Oil Type"
          placeholder={oiltype || 'Please select oil type from here \n (all oil quality high synthetic)'}
          editable={false}
          imageSource={downarrow}
          placeholderpress={toggleModal1}
          onPressImage={toggleModal1} />
      </View>
      <View style={appstyle.homelocktouch}>
        <CustomGradientButton
          text='Lock it in!'
          colors={[inputyellow, inputyellow]}
          color={gradienttxt}
          onPress={() => {
            saveDateInfoToFirestore()
          }} />
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}>
        <View style={appstyle.modalContainer}>
          <View style={appstyle.modalContent}>
            <View style={appstyle.imageview}>
              <Image
                style={appstyle.locationimage}
                source={loation} />
            </View>
            <View style={appstyle.modalview}>
              <Text style={appstyle.modaltxt}>Add Location</Text>
            </View>
            <View style={appstyle.modalinput}>
              <TextInput
                placeholder='Search here'
                color={gradienttxt}
                placeholderTextColor={locationplaceholder}
                value={locations}
                onChangeText={setLocations} />
            </View>
            <CustomGradientButton
              text="Submit"
              colors={[gradientgreen, gradienttxt]}
              customTextColor={white}
              color={white}
              customStyle={{
                paddingBottom: responsiveHeight(1),
                paddingTop: responsiveHeight(1),
                paddingLeft: responsiveWidth(10),
                paddingRight: responsiveWidth(10),
                marginTop: responsiveHeight(2)
              }}
              onPress={handleLocationSubmit} />
          </View>
        </View>
      </Modal>

      <Modal
        visible={modalVisible1}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible1(false)}
        onBackButtonPress={() => setModalVisible1(false)}
        onBackdropPress={() => setModalVisible1(false)}>
        <View style={appstyle.modal2Container}>
          <View style={appstyle.modal2Content}>
            <View style={appstyle.oiltopview}>
              <View style={appstyle.oilytype}>
                <Text style={appstyle.txt1location}>Oil Type</Text>
              </View>
              <View style={appstyle.selectoil}>
                <Text style={appstyle.txt1location1}>Please select oil type from here</Text>
              </View>
              <View style={appstyle.qualityoil}>
                <Text style={appstyle.txt1location2}>(all oil quality high synthetic)</Text>
              </View>
              <View style={appstyle.downarrowview}>
                <TouchableWithoutFeedback onPress={() => setModalVisible1(false)}>
                  <Image
                    source={downarrow}
                    style={appstyle.modaldownarrow} />
                </TouchableWithoutFeedback>
              </View>
            </View>
            <View style={appstyle.manufacutreview}>
              <CustomTextWithMargin
                text='Manufactures Recomendation'
                marginTop={responsiveHeight(2)}
                onPress={() => { setOiltype('Manufactures Recomendation'); setModalVisible1(false) }} />
              <CustomTextWithMargin
                text='-------- OR -------'
                textAlign={'center'}
                marginTop={responsiveHeight(2)} />
              <CustomTextWithMargin
                text='OW-20'
                marginTop={responsiveHeight(2)}
                onPress={() => { setOiltype('OW-20'); setModalVisible1(false) }} />
              <CustomTextWithMargin
                text='5W-20'
                marginTop={responsiveHeight(2)}
                onPress={() => { setOiltype('5W-20'); setModalVisible1(false) }} />
              <CustomTextWithMargin
                text='5W-30'
                marginTop={responsiveHeight(2)}
                onPress={() => { setOiltype('5W-30'); setModalVisible1(false) }} />
              <CustomTextWithMargin
                text='10W-30'
                marginTop={responsiveHeight(2)}
                onPress={() => { setOiltype('10W-30'); setModalVisible1(false) }} />
              <CustomTextWithMargin
                text='10W-40'
                marginTop={responsiveHeight(2)}
                showLine={false}
                onPress={() => { setOiltype('10W-40'); setModalVisible1(false) }} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
export default Home







