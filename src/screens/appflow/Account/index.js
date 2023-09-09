import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { CustomTextWithMargin } from '../../../components';
import { icontouch } from '../../../services/utilities/asset';
import { appstyle } from '../../../services/utilities/appstyle';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleLogout = async () => {
    try {
      await auth().signOut();
      Toast.show('Logout', Toast.SHORT)
      await AsyncStorage.removeItem("User");
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <View style={appstyle.Accountcontainer}>
      <TouchableOpacity onPress={toggleModal}>
        <Text style={appstyle.showmodaltxt}>Show Modal</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={appstyle.AccountmodalContainer}>
          <View style={appstyle.AccountmodalContent}>
            <View style={appstyle.Accounttouchablesview}>
              <CustomTextWithMargin
                text='Edit Profile'
                marginTop={responsiveHeight(2)}
                imageSource={icontouch}
                onPress={() => navigation.navigate('EditProfile') || setModalVisible(false)} />
              <CustomTextWithMargin
                text='Share Your Feedback'
                marginTop={responsiveHeight(2)}
                imageSource={icontouch}
                onPress={() => navigation.navigate('Thankyou') || setModalVisible(false)} />
              <CustomTextWithMargin
                text='Terms and Services'
                marginTop={responsiveHeight(2)}
                imageSource={icontouch}
                onPress={() => navigation.navigate('TermsandServices') || setModalVisible(false)} />
              <CustomTextWithMargin
                text='Privacy Policy'
                marginTop={responsiveHeight(2)}
                imageSource={icontouch}
                onPress={() => navigation.navigate('Privacy') || setModalVisible(false)} />
              <CustomTextWithMargin
                text='About Us'
                marginTop={responsiveHeight(2)}
                imageSource={icontouch}
                onPress={() => navigation.navigate('Thankyou') || setModalVisible(false)} />
              <CustomTextWithMargin
                text='Logout'
                marginTop={responsiveHeight(2)}
                imageSource={icontouch}
                fontWeight={'bold'}
                showLine={false}
                onPress={() => handleLogout()} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Account

