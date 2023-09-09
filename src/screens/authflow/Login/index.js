import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'react-native';
import { CustomGradientButton, CustomImageBackground, CustomInput } from '../../../components';
import { gradienttxt, gradientyellow, inputyellow, placeholdercolor, white } from '../../../services/utilities/colors';
import { bg, logo, eye } from '../../../services/utilities/asset';
import { appstyle } from '../../../services/utilities/appstyle';
import auth from "@react-native-firebase/auth";
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({ navigation }) => {
  const [email, getmail] = useState('');
  const [password, getPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword,setShowPassword]=useState(false)

  const toggleShowPassword=()=>{
    setShowPassword(!showPassword)
};
  const doLogin = () => {
    if (email === '' || password === '') {
      Toast.show('Email and password required', Toast.SHORT);
      return;
    } else if (!password || password.trim().length < 6) {
      Toast.show('Password should be at least 6 characters', Toast.SHORT);
      return;
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      Toast.show('Please Enter valid Email Address', Toast.SHORT);
      return;
    }
    else {
      setIsLoading(true);
      doSignIn(email, password);
    }
  };

  const doSignIn = async (email, password) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response && response.user) {
        console.log((response.user.uid));
        setIsLoading(false);
        await AsyncStorage.setItem("User", JSON.stringify(auth().currentUser))
        navigation.navigate('app', { screen: 'Home' });
      }
    } catch (e) {
      setIsLoading(false);
      console.error(e.message);
    }
  };
  return (
    <CustomImageBackground
      source={bg}>
      <ScrollView
        style={appstyle.loginmainview}>
        <StatusBar backgroundColor={gradienttxt} />
        <View style={appstyle.loginimageview}>
          <Image
            source={logo}
            style={appstyle.loginimage} />
        </View>
        <View style={appstyle.loginview2}>
          <Text style={appstyle.logintext1}>Enter your phone number to log in!</Text>
        </View>
        <View style={appstyle.logininputview}>

          <CustomInput
            customText='Email'
            placeholder='Enter email'
            placeholderTextColor={placeholdercolor}
            backgroundColor={inputyellow}
            onChangeText={getmail} />
          <CustomInput
            customText='Password'
            placeholder='Enter password'
            placeholderTextColor={placeholdercolor}
            backgroundColor={inputyellow}
            marginTop={responsiveHeight(1.5)}
            onChangeText={getPassword}
            secureTextEntry={!showPassword}
            toggleImage={eye}
            imageonpress={toggleShowPassword}/>
          <View style={appstyle.loginbutton}>
            <Text style={appstyle.logintxt1button}>Do not have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={appstyle.logintxt2button}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={appstyle.logintoucableview}>
          <CustomGradientButton
            text="LUB ME UP!!"
            colors={[white, gradientyellow]}
            color={gradienttxt}
            onPress={doLogin} />
        </View>
      </ScrollView>
      {isLoading && (
        <View style={appstyle.loadingOverlay}>
          <ActivityIndicator size="large" color={white} />
        </View>
      )}
    </CustomImageBackground>
  );
};
export default Login;
