import React, { useState, useEffect } from 'react';
import { View, Text, Image, Modal, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { CustomVehicleInput, DetailView, Topview, CustomGradientButton } from '../../../components';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { gradientbrown, gradienttxt, inputyellow, placeholdercolor, white } from '../../../services/utilities/colors';
import { correct, ticksquare } from '../../../services/utilities/asset';
import { appstyle } from '../../../services/utilities/appstyle';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Vehicle = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const toggleBox = () => {
    setIsChecked(!isChecked);
  };
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const [vehicleData, setVehicleData] = useState({
    VehicleYear: '',
    VehicleMake: '',
    VehicleModel: '',
    VehicleColor: '',
    VehicleMileage: '',
  });
  const updateFirestoreData = async () => {
    try {
      const currentUser = auth().currentUser;
      if (currentUser) {
        const userId = currentUser.uid;
        const userRef = firestore().collection('Users').doc(userId);
        await userRef.update({
          Vehicleinfo: vehicleData,
        });

        console.log('Firestore data updated successfully');
      } else {
        console.log('No authenticated user.');
      }
    } catch (error) {
      console.error('Error updating Firestore data:', error);
    }
  };

  const fetchUserProfileData = async () => {
    try {
      const currentUser = auth().currentUser;

      if (currentUser) {
        const userId = currentUser.uid;
        const userRef = firestore().collection('Users').doc(userId);
        const doc = await userRef.get();
        if (doc.exists) {
          const userData = doc.data();
          if (userData && userData.Vehicleinfo) {
            setVehicleData(userData.Vehicleinfo);
          } else {
            console.log('No vehicle data found in Firestore.');
          }
        } else {
          console.log('User data not found.');
        }
      } else {
        console.log('No authenticated user.');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    if (isChecked) {
      fetchUserProfileData();
    } else {
      setVehicleData({
        VehicleYear: '',
        VehicleMake: '',
        VehicleModel: '',
        VehicleColor: '',
        VehicleMileage: '',
      });
    }
  }, [isChecked]);
  return (
    <ScrollView style={appstyle.vehiclemainvieww}>
      <Topview customText={'Vehicle Info'} />
      <DetailView customText={'Please Enter Details'} />
      <View style={appstyle.vehicleinputview}>
        <CustomVehicleInput
          customText='Vehicle Year'
          placeholder='Enter the year of your Vehicle'
          placeholderTextColor={placeholdercolor}
          color={gradientbrown}
          value={vehicleData.VehicleYear}
          onChangeText={(text) => setVehicleData({ ...vehicleData, VehicleYear: text })} />
        <CustomVehicleInput
          customText='Vehicle Make'
          placeholder='Enter make of your Vehicle'
          placeholderTextColor={placeholdercolor}
          value={vehicleData.VehicleMake}
          onChangeText={(text) => setVehicleData({ ...vehicleData, VehicleMake: text })} />
        <CustomVehicleInput
          customText='Vehicle Model'
          placeholder='Enter model of your Vehicle'
          value={vehicleData.VehicleModel}
          placeholderTextColor={placeholdercolor}
          onChangeText={(text) => setVehicleData({ ...vehicleData, VehicleModel: text })} />
        <CustomVehicleInput
          customText='Enter Color'
          placeholder='Enter color of your Vehicle'
          value={vehicleData.VehicleColor}
          placeholderTextColor={placeholdercolor}
          onChangeText={(text) => setVehicleData({ ...vehicleData, VehicleColor: text })} />
        <CustomVehicleInput
          customText='Vehicle Mileage'
          placeholder='if unknown enter approximate'
          value={vehicleData.VehicleMileage}
          placeholderTextColor={placeholdercolor}
          onChangeText={(text) => setVehicleData({ ...vehicleData, VehicleMileage: text })} />
      </View>
      <View style={appstyle.vehiclecheckboxview}>
        <TouchableWithoutFeedback onPress={toggleBox}>
          <View style={[appstyle.box, isChecked && appstyle.checkedBox]}>
            {isChecked && <Image source={ticksquare} style={appstyle.tickIcon} />}
          </View>
        </TouchableWithoutFeedback>
        <Text style={appstyle.vehcilecheckboxtxt}>Pull info from profile here</Text>
      </View>
      <View style={appstyle.vehcilebuttonview}>
        <CustomGradientButton
          text="ADD"
          customTextColor={white}
          colors={[gradientbrown, gradienttxt]}
          color={white}
          onPress={() => {
            updateFirestoreData();
            toggleModal();
          }}
          fontSize={responsiveFontSize(2.5)} />
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(false)}
          onBackdropPress={() => setModalVisible(false)}>
          <View style={appstyle.blackmodalContainer}>
            <View style={appstyle.blackmodalContent}>
              <View style={appstyle.modalcorrectimageview}>
                <Image
                  source={correct}
                  style={appstyle.correctimage} />
              </View>
              <View style={appstyle.vehclemodaltxtview}>
                <Text style={appstyle.vehiclemodaltxt}>Vehicle has been added</Text>
                <Text style={appstyle.vehiclemodaltxt}>Successfully! One step</Text>
                <Text style={appstyle.vehiclemodaltxt}>left</Text>
              </View>
              <View style={appstyle.vehiclecontinueview}>
                <CustomGradientButton
                  text='CONTINUE'
                  colors={[white, inputyellow]}
                  color={gradienttxt}
                  onPress={() => { navigation.navigate('Paymentscreen') || setModalVisible(false) }} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};
export default Vehicle;
