import { StyleSheet } from "react-native";
import { gradientyellow, headerviewtxt, inputyellow, placeholdercolor, touchabletxt, touchableborder, thumbviewborder, yellowshadow, redshadow, modalplaceholder, inputelivation, locationtxtcolor, modalbackground, white, inputtxt, gradienttxt, locationback, locationtxt } from '../../../services/utilities/colors';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from "react-native-responsive-dimensions";
import { fontFamily, sizes } from "../fonts";
export const appstyle = StyleSheet.create({

  imageBackground:
  {
    flex: 1,
  },
  loginmainview:
  {
    flex: 1,
  },
  loginimageview:
  {
    height: responsiveHeight(40),
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginimageview1:
  {
    height: responsiveHeight(80),
    alignItems: 'center',
    justifyContent: 'center'
  },

  loginimage:
  {
    height: responsiveHeight(15),
    width: responsiveWidth(60)
  },
  logintextInput:
  {
    marginLeft: responsiveWidth(1.9),
    color: headerviewtxt,
    fontFamily: fontFamily.RobotoMedium
  },
  loginview2: {
    height: responsiveHeight(10),
    alignItems: 'center',
  },
  logintext1: {
    color: inputyellow,
    fontSize: sizes.size1,
    marginTop: responsiveHeight(4),
    fontFamily: fontFamily.Poppins_Bold
  },
  logininputview: {
    height: responsiveHeight(30),
    alignItems: 'center',
  },
  logininput: {
    backgroundColor: inputyellow,
    height: responsiveHeight(10),
    width: responsiveWidth(80),
    borderRadius: responsiveWidth(4),
  },
  logintextinput: {
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(3),
    fontSize: sizes.size5,
    fontWeight: 'bold',
    color: inputtxt,
  },
  loginbutton:
  {
    height: responsiveHeight(5),
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(20),
    flexDirection: 'row'
  },
  logintxt1button:
  {
    color: white,
    fontFamily: fontFamily.Poppins_Light
  },
  logintxt2button:
  {
    color: inputyellow,
    fontFamily: fontFamily.Poppins_Bold

  },
  logintoucableview:
  {
    height: responsiveHeight(20),
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  statusbarcolor:
  {
    backgroundColor: white
  },
  headerviewsignupv1:
  {
    height: responsiveHeight(9),
    flexDirection: 'row',
    backgroundColor: white,
  },
  headerviewtouchableview:
  {
    marginLeft: responsiveWidth(10),
    justifyContent: 'center',
  },
  headertextview:
  {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsiveWidth(38),
  },
  headerviewsignupt1:
  {
    fontSize: sizes.size2,
    color: headerviewtxt,
    position: 'absolute',
    fontFamily: 'Roboto-Bold'
  },
  custominputemailinputview: {
    height: responsiveHeight(8.7),
    borderRadius: responsiveWidth(5),
    marginLeft: responsiveWidth(4.5),
    marginRight: responsiveWidth(4.5),
  },
  custominputvieww:
  {
    flexDirection: 'row',
    height: responsiveHeight(4.5)
  },
  custominputemailtxt: {
    marginLeft: responsiveWidth(5),
    marginTop: responsiveHeight(1),
    color: inputtxt,
    fontSize: sizes.size3,
    fontFamily: fontFamily.RobotoBold
  },
  custominputplaceholder: {
    width: '70%',
    marginLeft: responsiveWidth(3.2),
    fontWeight: 'bold',
    fontSize: sizes.size5,
    paddingVertical: responsiveHeight(1)
  },
  custominputeyetouchable:
  {
    marginLeft: responsiveWidth(10),
    height: responsiveHeight(3),
    width: responsiveWidth(6.5),
  },
  signupmainview:
  {
    flex: 1,
  },
  signupemailview:
  {
    height: responsiveHeight(40),
  },
  signuptermsview:
  {
    flexDirection: 'row',
    marginTop: responsiveHeight(3),
  },
  signuptermstxt:
  {
    color: gradientyellow,
    fontFamily: fontFamily.RobotoBold,
    marginLeft: responsiveWidth(1),
    fontSize: sizes.size3,
    marginTop: responsiveHeight(1)
  },
  signupticktouchable:
  {
    marginLeft: responsiveWidth(6),
  },
  signuptouchableview:
  {
    height: responsiveHeight(70),
    marginTop: responsiveHeight(3),
    alignItems: 'center',
  },
  signupandtxt:
  {
    color: white,
    fontSize: sizes.size3,
    marginLeft: responsiveWidth(1),
    marginTop: responsiveHeight(1),
    fontFamily: fontFamily.RobotoRegular,

  },
  signupaccepttxt:
  {
    marginLeft: responsiveWidth(2),
    fontFamily: fontFamily.RobotoRegular,
    color: white,
    fontSize: responsiveFontSize(1.7),
    marginTop: responsiveHeight(1)
  },
  profilemainview:
  {
    flex: 1
  },
  profilev2:
  {
    flex: 0.8,
  },
  profilev3:
  {
    height: responsiveHeight(9),
    alignItems: 'center',
    justifyContent: 'center',
  },
  topblackviewhome:
  {
    height: responsiveHeight(17),
    backgroundColor: gradienttxt,
    borderBottomLeftRadius: responsiveWidth(15),
    borderBottomRightRadius: responsiveWidth(15),
    alignItems: 'center',
    justifyContent: 'center'
  },
  hometopblackviewtxt:
  {
    color: white,
    fontSize: sizes.size4,
    fontFamily: fontFamily.RobotoMedium,

  },
  timeinputfield: {
    height: responsiveHeight(12),
    width: responsiveWidth(25),
    marginTop: responsiveHeight(1),
    borderRadius: responsiveWidth(3),
    backgroundColor: white,
    borderRadius: responsiveWidth(3),
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeinput:
  {
    fontSize: sizes.size15,
    placeholdercolor: placeholdercolor,
    color: gradienttxt
  },

  datesmallview: {
    height: responsiveHeight(12),
    width: responsiveWidth(25),
    marginLeft: responsiveWidth(3.3),
    marginTop: responsiveHeight(1),
    borderRadius: responsiveWidth(3),
    backgroundColor: white,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  datetxt1: {
    color: inputtxt,
    fontFamily: fontFamily.RobotoBold,
    fontSize: sizes.size5
  },
  datetxt2: {
    color: inputtxt,
    fontFamily: fontFamily.RobotoBold,
    fontSize: sizes.size5,
    marginTop: responsiveHeight(2),
  },
  datetxt3: {
    color: inputtxt,
    fontFamily: fontFamily.RobotoBold,
    fontSize: sizes.size5
  },
  detailview:
  {
    height: responsiveHeight(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailtxt:
  {
    color: headerviewtxt,
    fontFamily: fontFamily.RobotoBold,
    fontSize: sizes.size8
  },
  locationinput: {
    backgroundColor: locationback,
    height: responsiveHeight(9),
    width: responsiveWidth(90),
    borderRadius: responsiveWidth(3),
    elevation: 5,
  },
  locationtxt: {
    color: inputtxt,
    fontSize: sizes.size6,
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(1),
    fontWeight: 'bold',
  },
  enteraddresstxt: {

    fontSize: sizes.size5,
    marginLeft: responsiveWidth(3),
    fontWeight: 'bold',
    paddingVertical: responsiveHeight(1),
    color: gradienttxt,

    height: responsiveHeight(6.5)
  },
  locationvector: {
    height: responsiveHeight(3.2),
    width: responsiveWidth(6.9),
    marginLeft: responsiveWidth(78),
    marginTop: responsiveHeight(-6.5),
  },

  touchable: {
    borderRadius: responsiveWidth(8),
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
    paddingLeft: responsiveWidth(27),
    paddingRight: responsiveWidth(27),
    elevation: 5,
    backgroundColor: locationback,
  },
  txttouch: {
    fontFamily: 'Roboto-Bold'
  },
  vehicleinput:
  {
    height: responsiveHeight(9),
    width: responsiveWidth(90),
    marginTop: responsiveHeight(1),
    borderRadius: responsiveWidth(4),
    backgroundColor: locationback,
    elevation: 3,
  },
  vehicletxt:
  {
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(1),
    color: inputtxt,
    fontFamily: fontFamily.RobotoBold,
  },
  vehicleinputfield:
  {
    color: gradienttxt,
    marginLeft: responsiveWidth(3),
  },
  homemaincontainer:
  {
    flex: 1, backgroundColor: white
  },
  homedateview: {
    height: responsiveHeight(15),
    flexDirection: 'row',
  },
  hometimeview:
  {
    height: responsiveHeight(4),
  },
  hometimetxt:
  {
    color: inputtxt,
    fontWeight: 'bold',
    fontSize: sizes.size6,
    marginLeft: responsiveWidth(3)
  },
  hometimeinputview:
  {
    height: responsiveHeight(20),
    flexDirection: 'row',
  },
  homeinput:
  {
    fontSize: sizes.size15,
    width: '90%'
  },
  homedotview:
  {
    marginTop: responsiveHeight(-0.5)
  },
  homecolontxt:
  {
    fontSize: sizes.size7,
    marginLeft: responsiveWidth(8),
    color: headerviewtxt,
    fontWeight: 'bold'
  },
  homeampmview:
  {
    backgroundColor: white,
    width: responsiveWidth(12),
    height: responsiveHeight(12),
    borderRadius: responsiveWidth(2),
    marginLeft: responsiveWidth(8),
    borderWidth: 1,
    borderColor: gradienttxt,
    alignItems: 'center',
    marginTop: responsiveHeight(1),
    elevation: 5,
  },
  homeamtxt:
  {
    color: gradienttxt,
    fontFamily: fontFamily.RobotoRegular,
    fontSize: sizes.size8,
  },
  homepmtxt:
  {
    color: gradienttxt,
    fontFamily: fontFamily.RobotoRegular,
    fontSize: sizes.size8,
  },
  homehorizontalLine: {
    backgroundColor: gradienttxt,
    width: '100%',
    height: responsiveHeight(0.2),
    position: 'absolute',
    bottom: '50%',
  },
  homeamview:
  {
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(5.89),
    width: responsiveWidth(11.39),
    borderTopLeftRadius: responsiveWidth(3.5),
    borderTopRightRadius: responsiveWidth(3.5),
  },
  homepmview:
  {
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(5),
    width: responsiveWidth(11.39),
    borderBottomLeftRadius: responsiveWidth(5),
    borderBottomRightRadius: responsiveWidth(5),
  },
  homeselectedOption: {
    height: responsiveHeight(5.79),
    borderTopLeftRadius: responsiveWidth(2.5),
    borderTopRightRadius: responsiveWidth(2.5),
    borderBottomLeftRadius: responsiveWidth(2.5),
    borderBottomRightRadius: responsiveWidth(2.5),
    backgroundColor: inputyellow,
  },
  homeloactionview:
  {
    height: responsiveHeight(13),
    alignItems: 'center',
    justifyContent: 'center'
  },
  homelocktouch:
  {
    height: responsiveHeight(19),
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: modalbackground,
  },
  modalContent: {
    backgroundColor: white,
    height: responsiveHeight(25),
    width: responsiveWidth(90),
    borderRadius: responsiveWidth(3),
    alignItems: 'center'
  },
  locationimage:
  {
    height: responsiveHeight(5),
    width: responsiveWidth(7.5),
  },
  imageview:
  {
    height: responsiveHeight(10),
    width: responsiveWidth(20),
    borderRadius: responsiveWidth(30),
    marginTop: -responsiveHeight(5),
    backgroundColor: gradienttxt,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  modaltxt:
  {
    color: gradienttxt,
    fontSize: sizes.size2,
    fontFamily: fontFamily.Poppins_Medium
  },
  modalinput:
  {
    marginTop: responsiveHeight(2),
    height: responsiveHeight(6),
    width: responsiveWidth(80),
    borderRadius: responsiveWidth(3),
    backgroundColor: modalplaceholder
  },
  modal2Container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: modalbackground,
  },
  modal2Content:
  {
    backgroundColor: white,
    height: responsiveHeight(60),
    width: responsiveWidth(90),
    borderRadius: responsiveWidth(3),
    alignItems: 'center'
  },
  oiltopview:
  {
    height: responsiveHeight(11),
    width: responsiveWidth(83),
    marginTop: responsiveHeight(2),
    borderRadius: responsiveWidth(2),
    elevation: 1,
    shadowColor: inputelivation,
    justifyContent: 'center'
  },
  txt1location:
  {
    marginTop: responsiveHeight(0.5),
    marginLeft: responsiveWidth(2),
    color: inputtxt,
    fontWeight: 'bold'
  },
  txt1location1:
  {
    marginTop: responsiveHeight(0.5),
    marginLeft: responsiveWidth(2),
    color: locationtxtcolor,
    fontWeight: 'bold'
  },
  txt1location2:
  {
    marginLeft: responsiveWidth(2),
    color: locationtxtcolor,
  },
  modaldownarrow:
  {
    height: responsiveHeight(2),
    width: responsiveWidth(5),
    marginBottom: responsiveHeight(7)
  },
  oilytype:
  {
    width: responsiveWidth(20),
  },
  selectoil:
  {
    width: responsiveWidth(60),

  },
  qualityoil:
  {
    width: responsiveWidth(60),
  },
  downarrowview:
  {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: responsiveWidth(70),
    height: responsiveHeight(1),
    width: responsiveWidth(7),
  },
  manufacutreview:
  {
    height: responsiveHeight(43),
    width: responsiveWidth(85),
    borderRadius: responsiveWidth(3),
    marginTop: responsiveHeight(2),
    elevation: 2,
    shadowColor: inputelivation,
  },
  firsttxt:
  {
    fontSize: sizes.size8,
    marginLeft: responsiveWidth(5),
    fontFamily: fontFamily.RobotoRegular
  },
  fview:
  {
    height: responsiveHeight(4),
  },
  vehiclemainvieww:
  {
    flex: 1, backgroundColor: white
  },
  vehicleinputview:
  {
    height: responsiveHeight(51),
    alignItems: "center",
  },
  vehcilebuttonview:
  {
    height: responsiveHeight(13),
    alignItems: 'center',
    justifyContent: 'center'
  },
  vehiclecheckboxview:
  {
    flexDirection: 'row',
    height: responsiveHeight(4),
    alignItems: 'center',
    marginTop: responsiveHeight(1)
  },
  vehcilecheckboxtxt:
  {
    marginLeft: responsiveWidth(5),
    fontFamily: fontFamily.RobotoMedium,
    fontSize: sizes.size1,
    color: gradienttxt
  },
  imagetouch:
  {
    marginLeft: responsiveWidth(9)
  },
  tickimage:
  {
    height: responsiveHeight(2),
    width: responsiveWidth(4),
  },
  squareimage:
  {
    height: responsiveHeight(5),
    width: responsiveWidth(7),
  },
  checkbox:
  {
    marginLeft: responsiveWidth(7),
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  blackmodalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  blackmodalContent: {
    backgroundColor: gradienttxt,
    height: responsiveHeight(49),
    width: responsiveWidth(100),
    borderTopLeftRadius: responsiveWidth(10),
    borderTopRightRadius: responsiveWidth(10),
    alignItems: 'center'
  },
  modalcorrectimageview:
  {
    marginTop: responsiveHeight(4)
  },
  correctimage:
  {
    height: responsiveHeight(11),
    width: responsiveWidth(22.5),
  },
  vehclemodaltxtview:
  {
    marginTop: responsiveHeight(5),
    height: responsiveHeight(15),
    width: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center'
  },
  vehiclemodaltxt:
  {
    fontSize: sizes.size9,
    color: white,
    fontFamily: fontFamily.RobotoBold
  },
  vehiclecontinueview:
  {
    height: responsiveHeight(15),
    width: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center'
  },
  paymentmainview:
  {
    flex: 1,
  },
  cardview:
  {
    height: responsiveHeight(44),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardv1:
  {
    height: responsiveHeight(40),
    width: responsiveWidth(75),
    borderRadius: responsiveWidth(4),
  },
  yellowview1:
  {
    height: responsiveHeight(5),
    backgroundColor: inputyellow,
    borderTopLeftRadius: responsiveWidth(4),
    borderTopRightRadius: responsiveWidth(4),
    borderWidth: 0
  },
  yellowview2:
  {
    height: responsiveHeight(5),
    backgroundColor: inputyellow,
    borderBottomLeftRadius: responsiveWidth(4),
    borderBottomRightRadius: responsiveWidth(4)
  },
  cardviewt1:
  {
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(5),
    backgroundColor: white,
  },
  cardtext1:
  {
    fontSize: sizes.size5,
    fontFamily: fontFamily.RobotoRegular,
    color: gradienttxt
  },
  dollarview:
  {
    backgroundColor: white,
    height: responsiveHeight(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fontFamily.RobotoBold,

  },
  dollartext:
  {

    fontSize: sizes.size11,
    marginBottom: responsiveHeight(7),
    fontFamily: fontFamily.RobotoBold,

    color: placeholdercolor
  },
  numbertext:
  {
    fontSize: sizes.size10,
    fontWeight: 'bold',
    color: placeholdercolor
  },
  linesview:
  {
    backgroundColor: white,
    alignItems: 'center',
    height: responsiveHeight(9),
  },
  threelinetxt:
  {
    fontSize: sizes.size5,
    fontFamily: fontFamily.RobotoRegular,
    color: gradienttxt
  },
  smallcardview:
  {
    height: responsiveHeight(40),
  },
  smallview1:
  {
    height: responsiveHeight(16),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  smallview2:
  {
    height: responsiveHeight(17),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  paymentimage:
  {
    height: responsiveHeight(6),
    width: responsiveWidth(22)
  },
  paymentmodalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: modalbackground,
  },
  paymentmodalContent: {
    backgroundColor: white,
    height: responsiveHeight(57),
    width: responsiveWidth(90),
    borderRadius: responsiveWidth(3),
    alignItems: 'center'
  },
  paymentmessageimage:
  {
    height: responsiveHeight(5),
    width: responsiveWidth(14),
  },
  paymentimageview:
  {
    height: responsiveHeight(12),
    width: responsiveWidth(25),
    borderRadius: responsiveWidth(30),
    marginTop: -responsiveHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    shadowColor: yellowshadow,
  },
  milesview:
  {
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(8),
    width: responsiveWidth(65),
  },
  paymentmodaltxt:
  {
    color: gradienttxt,
    fontFamily: fontFamily.Poppins_Bold,

    fontSize: sizes.size2,
    marginTop: responsiveHeight(2)
  },
  paymentmodalinput:
  {
    marginTop: responsiveHeight(4),
    height: responsiveHeight(5),
    width: responsiveWidth(70),
    backgroundColor: modalplaceholder
  },
  paymentmodalinput2:
  {
    marginTop: responsiveHeight(1),
    height: responsiveHeight(5),
    width: responsiveWidth(70),
    backgroundColor: modalplaceholder
  },
  paymentmodalinput3:
  {
    marginTop: responsiveHeight(1),
    height: responsiveHeight(5),
    width: responsiveWidth(17.2),
    backgroundColor: modalplaceholder,
    marginLeft: responsiveWidth(4.5),
  },
  paymentmodalview:
  {
    alignItems: 'center'
  },
  cardpaymentview:
  {
    height: responsiveHeight(30),
    alignItems: 'center',
    width: responsiveWidth(85),
    marginTop: responsiveHeight(1),
    elevation: 5,
    // backgroundColor:'red',
  },
  modaltxt3view:
  {
    marginTop: responsiveHeight(1),
    width: responsiveWidth(80),
    justifyContent: 'center'
  },
  modaltxt3:
  {
    marginLeft: responsiveWidth(5.5),
    fontSize: sizes.size13
  },
  threeinputview:
  {
    marginTop: responsiveHeight(1),
    height: responsiveHeight(7),
    width: responsiveWidth(80),
    flexDirection: 'row',
  },
  slashview:
  {
    marginTop: responsiveHeight(1),
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center'
  },
  slashtxt:
  {
    fontSize: sizes.size16,
    marginLeft: responsiveWidth(3)
  },
  paymentmethodview:
  {
    height: responsiveHeight(5),
    alignItems: 'center',
  },
  paymentmethodtxt:
  {
    color: inputyellow,
    fontFamily: fontFamily.RobotoMedium,
    fontSize:sizes.size12
  },
  thankyoumainview: {
    flex: 1,
  },
  thumbmainview: {
    borderBottomColor: thumbviewborder,
    borderBottomWidth: 1,
    height: responsiveHeight(40),
    backgroundColor: inputyellow,
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbview:
  {
    backgroundColor: '#FFFFFF',
    borderRadius: responsiveWidth(20),
    width: responsiveWidth(40),
    height: responsiveHeight(20),
    alignItems: 'center',
    elevation: 5
  },
  thumbimage:
  {
    marginTop: responsiveHeight(1),
    height: responsiveHeight(15),
    width: responsiveWidth(25)
  },
  thankuview:
  {
    height: responsiveHeight(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  thankutxt:
  {
    fontSize: sizes.size17,
    color: white,
    fontFamily: fontFamily.RobotoBold
  },
  appview:
  {
    alignItems: 'center'
  },
  apptxt:
  {
    color: white,
    fontSize: sizes.size8,
    fontFamily: fontFamily.RobotoRegular

  },
  facebookinstaview:
  {
    flexDirection: 'row',
    height: responsiveHeight(17),
    alignItems: 'center',
    justifyContent: 'center'
  },
  facebookimage:
  {
    height: responsiveHeight(10),
    width: responsiveWidth(18)
  },
  instaimage:
  {
    height: responsiveHeight(8),
    width: responsiveWidth(15),
    marginLeft: responsiveWidth(4)
  },
  gohomebuttonview:
  {
    height: responsiveHeight(14),
    alignItems: 'center',
    justifyContent: 'center'
  },
  termsmainview:
  {
    flex: 1
  },
  termstopview:
  {
    height: responsiveHeight(9.5)
  },
  termstxtview:
  {
    height: responsiveHeight(100),
  },
  termtxt:
  {
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(2.2),
    color: inputyellow
  },
  box1:
  {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
    marginLeft: responsiveWidth(5),
    marginTop: responsiveHeight(0.5),
    borderRadius: responsiveWidth(5),
    borderWidth: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:
  {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
    marginLeft: responsiveWidth(5),
    borderWidth: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickIcon: {
    width: responsiveWidth(4),
    height: responsiveHeight(1.5),
  },
  tickIcon1: {
    width: responsiveWidth(2.5),
    height: responsiveHeight(1.3),
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Accountcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AccountmodalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  AccountmodalContent: {
    backgroundColor: white,
    alignItems: 'center',
    height: responsiveHeight(45),
    width: responsiveWidth(100),
    borderTopLeftRadius: responsiveWidth(10),
    borderTopRightRadius: responsiveWidth(10)
  },
  Accounttouchablesview:
  {
    marginTop: responsiveHeight(5),
    height: responsiveHeight(37),
    width: responsiveWidth(92),
    borderRadius: responsiveWidth(3),
    borderWidth: 1,
    borderColor: touchableborder,
    elevation: 1
  },
  showmodaltxt:
  {
    color: gradienttxt,
  },
  firsttxt: {
    fontSize: sizes.size8,
    marginLeft: responsiveWidth(5),
    color: touchabletxt,
    fontFamily: fontFamily.RobotoRegular,

  },
  fview: {
    height: responsiveHeight(4),
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderColor: inputelivation,
    marginTop: responsiveHeight(0.5),
  },
})