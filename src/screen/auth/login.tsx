import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar, 
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';
import { TextInput,Button, useTheme } from 'react-native-paper';

export const Login =({navigation}: {navigation: any}) => {
  const {colors} = useTheme();
  const [user, setUser] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  return (
    <ScrollView style={{backgroundColor:colors.surface}}>
      <View style={styles.body}>
      <View>
      <Image
        style={styles.successImg}
        source={require('../../assets/images/select.png')}
      />
      </View>
      <View>
        <TextInput
          label="USERNAME"
          style={styles.inputText}
          value={user}
          onChangeText={text => setUser(text)}
        />
        <TextInput
          label="PASSWORD"
          style={styles.inputText}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Button style={styles.isSignIn} color={colors.placeholder} mode="contained" onPress={() => console.log('Pressed')}>
          Sign In
        </Button>
        <View style={styles.signUpContainer}>
          <Text style={styles.haveAccount}>DONT HAVE AN ACCOUNT ?</Text>
          <Button style={styles.signUPBtn} onPress={()=>{
            navigation.navigate('Sign Up');
          }}>SIGNUP</Button> 
        </View>
      </View>
      </View>
    </ScrollView>
  );
};
const {width, height} =  Dimensions.get('window');
const styles = StyleSheet.create({
  body: {
    marginHorizontal: width/ 15,
    flexDirection: "column",
    justifyContent: 'space-between'
  },
  isSignIn:{
    marginVertical: width/ 15
  },
  haveAccount:{
    alignSelf: 'center',
  },
  successImg:{
    alignSelf: 'center',
    height: height/ 3,
    justifyContent: 'center',
  },
  signUpContainer:{
    flexDirection: 'row',
    alignSelf: 'center'
  },
  signUPBtn:{
    // marginTop: height
  },
  inputText:{
    marginVertical: 10
  }
});
