import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { CustomHeaderView, CustomImageBackground } from '../../../components'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { headerviewtxt, white } from '../../../services/utilities/colors'
import { backarrow, bg } from '../../../services/utilities/asset'
import { appstyle } from '../../../services/utilities/appstyle'

const Privacy = ({ navigation }) => {
  return (

    <CustomImageBackground source={bg} >
      <View style={appstyle.termsmainview}>
        <View style={appstyle.termstopview}>
          <CustomHeaderView
            text='Privacy Policy'
            imageSource={backarrow}
            textColor={headerviewtxt}
            backgroundColor={white}
            imageonpress={() => { navigation.navigate('AccountStack', { screen: 'Account' }) }} />
        </View>
        <View style={appstyle.termstxtview}>
          <Text style={appstyle.termtxt}>Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris.{'\n'}{'\n'}
            Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.{'\n'}{'\n'}
            Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo.{'\n'}{'\n'}
            Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.{'\n'}{'\n'}
            Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo.{'\n'}{'\n'}
            Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit.
            Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.</Text>
        </View>
      </View>
    </CustomImageBackground>
  )
}
export default Privacy
