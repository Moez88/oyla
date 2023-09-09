import { View, Text, StatusBar, Image, Modal, TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useState } from 'react'
import { CustomHeaderView, CustomImageBackground, CustomPayment, CustomGradientButton } from '../../../components'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { gradientgreen, gradienttxt, headerviewtxt, inputyellow, locationplaceholder, msgcolor1, msgcolor2, white, } from '../../../services/utilities/colors'
import { affirm, androidpay, applepay, backarrow, bg, bitpay, klarna, message, stripe, correct } from '../../../services/utilities/asset'
import { appstyle } from '../../../services/utilities/appstyle'
const Paymentscreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    const [modalVisible2, setModalVisible2] = useState(false);
    const toggleModal2 = () => {
        setModalVisible2(!modalVisible2);
    };
    return (
        <CustomImageBackground
            source={bg}>
            <View style={appstyle.paymentmainview}>
                <StatusBar
                    backgroundColor={white}
                    barStyle={'dark-content'} />
                <CustomHeaderView
                    text="Select price & payment method"
                    textColor={headerviewtxt}
                    backgroundColor={white}
                    imageSource={backarrow}
                    imageonpress={() => navigation.navigate('Vehicle')} />
                <View style={appstyle.cardview}>
                    <View style={appstyle.cardv1}>
                        <View style={appstyle.yellowview1}>
                        </View>
                        <View style={appstyle.cardviewt1}>
                            <Text style={appstyle.cardtext1}>YOUR OYL AND FYLTER CHNAGE WILL BE</Text>
                        </View>
                        <View style={appstyle.dollarview}>
                            <Text style={appstyle.dollartext}>$</Text>
                            <Text style={appstyle.numbertext}>87</Text>
                        </View>
                        <View style={appstyle.linesview}>
                            <View style={appstyle.milesview}>
                                <Text style={appstyle.threelinetxt} >THIS WILL HAVE YOU ROLLIN FOR 10,000 MILES-SHOOT WE WILL EVEN TOP OFF YOUR WASHERED FLUID AND AIR UP YOUR TIRES</Text>
                            </View>
                            <Text style={appstyle.threelinetxt} > </Text>
                            <Text style={appstyle.threelinetxt} ></Text>
                        </View>
                        <View style={appstyle.yellowview2}>
                        </View>
                    </View>
                </View>
                <View style={appstyle.paymentmethodview}>
                    <Text style={appstyle.paymentmethodtxt}>Payment Mehtods</Text>
                </View>
                <View style={appstyle.smallcardview}>
                    <View style={appstyle.smallview1}>
                        <CustomPayment
                            imageSource={stripe}
                            onPress={toggleModal} />
                        <CustomPayment
                            imageSource={androidpay}
                            onPress={toggleModal} />
                        <CustomPayment
                            imageSource={applepay}
                            onPress={toggleModal} />
                    </View>
                    <View style={appstyle.smallview2}>
                        <CustomPayment
                            imageSource={bitpay}
                            onPress={toggleModal} />
                        <CustomPayment
                            imageSource={affirm}
                            onPress={toggleModal} />
                        <CustomPayment
                            imageSource={klarna}
                            onPress={toggleModal} />
                    </View>
                </View>
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}
                    onBackButtonPress={() => setModalVisible(false)}
                    onBackdropPress={() => setModalVisible(false)}>
                    <View style={appstyle.paymentmodalContainer}>
                        <View style={appstyle.paymentmodalContent}>
                            <LinearGradient
                                colors={[msgcolor1, msgcolor2, gradienttxt]}
                                style={appstyle.paymentimageview}>
                                <Image
                                    style={appstyle.paymentmessageimage}
                                    source={message} />
                            </LinearGradient>
                            <View style={appstyle.paymentmodalview}>
                                <Text style={appstyle.paymentmodaltxt}>Add New Details</Text>
                                <Text style={appstyle.paymentmodaltxt}>Please Enter Your Payment Detail</Text>
                            </View>
                            <View style={appstyle.cardpaymentview} >
                                <View style={appstyle.paymentmodalinput}>
                                    <TextInput
                                        placeholder='Card hold name'
                                        placeholderTextColor={locationplaceholder} />
                                </View>
                                <View style={appstyle.paymentmodalinput2}>
                                    <TextInput
                                        placeholder='Number of card'
                                        placeholderTextColor={locationplaceholder} />
                                </View>
                                <View style={appstyle.modaltxt3view}>
                                    <Text style={appstyle.modaltxt3}>VALID THRU</Text>
                                </View>

                                <View style={appstyle.threeinputview}>
                                    <View style={appstyle.paymentmodalinput3}>
                                        <TextInput
                                            placeholder='MM'
                                            placeholderTextColor={locationplaceholder} />
                                    </View>
                                    <View style={appstyle.slashview}>
                                        <Text style={appstyle.slashtxt}>\</Text>
                                    </View>
                                    <View style={appstyle.paymentmodalinput3}>
                                        <TextInput
                                            placeholder='YY'
                                            placeholderTextColor={locationplaceholder} />
                                    </View>
                                    <View style={appstyle.paymentmodalinput3}>
                                        <TextInput
                                            placeholder='CVV'
                                            placeholderTextColor={locationplaceholder} />
                                    </View>
                                </View>
                            </View>
                            <CustomGradientButton
                                text="Save"
                                colors={[gradientgreen, headerviewtxt]}
                                customTextColor={white}
                                color={white}
                                customStyle={{
                                    paddingBottom: responsiveHeight(1),
                                    paddingTop: responsiveHeight(1),
                                    paddingLeft: responsiveWidth(10),
                                    paddingRight: responsiveWidth(10),
                                    marginTop: responsiveHeight(2)
                                }}
                                onPress={toggleModal2 || setModalVisible(false)} />
                        </View>
                    </View>
                </Modal>
                <Modal
                    visible={modalVisible2}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setModalVisible2(false)}
                    onBackButtonPress={() => setModalVisible2(false)}
                    onBackdropPress={() => setModalVisible2(false)}>
                    <View style={appstyle.blackmodalContainer}>
                        <View style={appstyle.blackmodalContent}>
                            <View style={appstyle.modalcorrectimageview}>
                                <Image
                                    source={correct}
                                    style={appstyle.correctimage} />
                            </View>
                            <View style={appstyle.vehclemodaltxtview}>
                                <Text style={appstyle.vehiclemodaltxt}>Congratulation</Text>
                                <Text style={appstyle.vehiclemodaltxt}>Sucessfully! One step</Text>
                                <Text style={appstyle.vehiclemodaltxt}>left</Text>
                            </View>
                            <View style={appstyle.vehiclecontinueview}>
                                <CustomGradientButton
                                    text='CONTINUE'
                                    colors={[white, inputyellow]}
                                    color={gradienttxt}
                                    onPress={() => { navigation.navigate('Thankyou') || setModalVisible(false) }} />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </CustomImageBackground>
    )
}
export default Paymentscreen
