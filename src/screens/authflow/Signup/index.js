import { View, Text, Image, StatusBar, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { CustomGradientButton, CustomHeaderView, CustomImageBackground, CustomInput } from '../../../components';
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { gradienttxt, gradientyellow, headerviewtxt, inputyellow, placeholdercolor, white } from '../../../services/utilities/colors';
import { backarrow, bg, eye, ticksquare } from '../../../services/utilities/asset';
import { appstyle } from '../../../services/utilities/appstyle';
import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-simple-toast';
const Signup = ({ navigation }) => {

    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false)

    const toggleBox = () => {
        setIsChecked(!isChecked);
    };
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    };
    const doSignUp = async () => {
        if (email === '' || password === '') {
            Toast.show('Email & password Required', Toast.SHORT);
            return;
        }
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(email)) {
            Toast.show('Please Enter valid Email Address.', Toast.SHORT);
            return;
        } else if (password.length < 6) {
            Toast.show('Password must be at least 6 characters.', Toast.SHORT);
            return;
        }
        else if (!isChecked) {
            Toast.show('Please accept the Terms of Service and Privacy Policy.', Toast.SHORT);
            return;
        }
        try {
            const emailExists = await auth().fetchSignInMethodsForEmail(email);
            setIsLoading(true);
            if (emailExists && emailExists.length > 0) {
                Toast.show('Email Already Exists: This email is already registered.', Toast.SHORT);
                return;
            }
            let response = await auth().createUserWithEmailAndPassword(email, password);
            if (response && response.user) {
                const user = response.user;
                firestore()
                    .collection('Users')
                    .doc(user.uid)
                    .set({
                        email: email,
                        uid: user.uid,
                    })
                    .then(() => {
                        console.log('User data added to Firestore');

                        setIsLoading(false);
                        Toast.show('user created', Toast.SHORT)
                        navigation.navigate('auth', { screen: 'Profile' });
                    })
                    .catch(error => {
                        console.error('Error adding user data to Firestore:', error);
                    });
            }
        } catch (e) {
            console.error(e.message);
        }
    };

    return (
        <CustomImageBackground
            source={bg} >
            <View style={appstyle.signupmainview}>
                <StatusBar backgroundColor={white}
                    barStyle={'dark-content'} />
                <CustomHeaderView
                    text="Create Account"
                    textColor={headerviewtxt}
                    backgroundColor={white}
                    imageSource={backarrow}
                    imageonpress={() => { navigation.navigate('Login') }} />
                <View style={appstyle.signupemailview}>
                    <CustomInput
                        placeholder='micktason@email.com'
                        placeholderTextColor={placeholdercolor}
                        customText='Email'
                        marginTop={responsiveHeight(4)}
                        backgroundColor={inputyellow}
                        value={email}
                        onChangeText={setEmail} />
                    <CustomInput
                        placeholder='Enter Password'
                        placeholderTextColor={placeholdercolor}
                        toggleImage={eye}
                        secureTextEntry={!showPassword}
                        customText='Password'
                        backgroundColor={inputyellow}
                        imageonpress={toggleShowPassword}
                        marginTop={responsiveHeight(4)}
                        value={password}
                        onChangeText={setPassword} />
                    <View style={appstyle.signuptermsview}>
                        <TouchableWithoutFeedback onPress={toggleBox}>
                            <View style={[appstyle.box1, isChecked && appstyle.checkedBox]}>
                                {isChecked && <Image source={ticksquare} style={appstyle.tickIcon1} />}
                            </View>
                        </TouchableWithoutFeedback>
                        <Text style={appstyle.signupaccepttxt}>i accept the</Text>
                        <Text style={appstyle.signuptermstxt}>Terms of Service</Text>
                        <Text style={appstyle.signupandtxt}>and</Text>
                        <Text style={appstyle.signuptermstxt}>Privacy Policy</Text>
                    </View>
                </View>
                <View style={appstyle.signuptouchableview}>
                    <CustomGradientButton
                        text="Lets go!"
                        colors={[white, gradientyellow]}
                        color={gradienttxt}
                        onPress={doSignUp} />
                </View>
            </View>
            {isLoading && (
                <View style={appstyle.loadingOverlay}>
                    <ActivityIndicator size="large" color={white} />
                </View>
            )}
        </CustomImageBackground>
    )
}
export default Signup