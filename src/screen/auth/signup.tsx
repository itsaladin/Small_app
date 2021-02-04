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
import { DatePickerModal } from 'react-native-paper-dates'
import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need

export const SignUp =({navigation}: {navigation: any}) => {
  const {colors} = useTheme();
  const [fName, setFName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();


  const [visible, setVisible] = React.useState(false)
  const onDismiss = React.useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const onChange = React.useCallback(({ date }) => {
    setVisible(false)
    console.log({ date })
  }, [])

  const date = new Date()

  const createHandler =()=>{
    if(fName && email && password){
      navigation.navigate('Home');
    }
  }
  
  return (
    <ScrollView style={{backgroundColor:colors.surface}}>
      <View style={styles.body}>
        <Text style={styles.signUpHeader}>Sign Up</Text>
      <View>
      <Image
        style={styles.successImg}
        source={require('../../assets/images/select.png')}
      />
      </View>
      <View>
        <TextInput
          label="FULLNAME"
          style={styles.inputText}
          value={fName}
          onChangeText={text => setFName(text)}
        />
        <TextInput
          label="EMAIL"
          style={styles.inputText}
          value={email}
          onChangeText={text => setEmail(text)}
        />
         <TextInput
          label="PASSWORD"
          style={styles.inputText}
          value={password}
          onChangeText={text => setPassword(text)}
        />

      <DatePickerModal
        mode="single"
        visible={visible}
        onDismiss={onDismiss}
        date={date}
        onConfirm={onChange}
        saveLabel="Save" // optional
        label="Select date" // optional
        animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
        locale={'en'} // optional, default is automically detected by your system
      />
      <Button onPress={()=> setVisible(true)}>
        Pick date
      </Button>

        <Button style={styles.isSignIn} color={colors.placeholder} mode="contained" onPress={() => createHandler()}>
          Create
        </Button>
        <View style={styles.signUpContainer}>
          <Text style={styles.haveAccount}>ALREADY HAVE AN ACCOUNT ?</Text>
          <Button style={styles.signUPBtn} onPress={()=>{
            navigation.navigate('Sign Up');
          }}>SIGNUP</Button> 
        </View>
      </View>
      </View>
    </ScrollView>
  );
};
const {width, height, fontScale} =  Dimensions.get('window');
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
  },
  signUpHeader:{
    alignSelf: 'center',
    fontSize: width / 20,
    marginVertical: height / 35
  }
});
