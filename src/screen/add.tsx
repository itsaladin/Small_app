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
import { HomeHeader } from '../components/home-header';

export const Add =({navigation}: {navigation: any}) => {
  const {colors} = useTheme();
  const [title, setTitle] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [location, setLocation] = useState<string | undefined>();
  const [label, setLabel] = useState<string | undefined>();
  const [notify, setNotify] = useState<string | undefined>();
  const [from, setFrom] = useState<string | undefined>();
  const [to, setTo] = useState<string | undefined>();
 
  const date = new Date()

  const [visible, setVisible] = React.useState(false)
  const onDismiss = React.useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const onChange = React.useCallback(({ date }) => {
    setVisible(false)
    console.log({ date })
  }, [])

  const createHandler =()=>{
    if(title && description && location && notify && label){
      navigation.navigate('Home');
    }
  }
  
  return (
    <ScrollView style={{backgroundColor:colors.surface}}>
      <HomeHeader leftIcon="close" rightIcon="check" />
      <View style={styles.body}>
      <View>
        <TextInput
          label="TITLE"
          style={styles.inputText}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          label="DESCRIPTION"
          style={styles.inputText}
          value={description}
          onChangeText={text => setDescription(text)}
        />

        <View style={styles.timeContain}>
            <View style={styles.timeFrom}>
            <TextInput
                label="FROM"
                style={styles.inputFrom}
                value={from}
                onChangeText={text => setFrom(text)}
                />
            </View>
            <View style={styles.timeFrom}>
            <TextInput
                label="TO"
                style={styles.inputFrom}
                value={to}
                onChangeText={text => setTo(text)}
                />
            </View>
        </View>

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
        <TextInput
          label="LOCATION"
          style={styles.inputText}
          value={location}
          onChangeText={text => setLocation(text)}
        />
        <TextInput
          label="NOTIFY"
          style={styles.inputText}
          value={notify}
          onChangeText={text => setNotify(text)}
        />

         <TextInput
          label="LABEL"
          style={styles.inputText}
          value={label}
          onChangeText={text => setLabel(text)}
        />

      <DatePickerModal
        mode="single"
        visible={visible}
        onDismiss={onDismiss}
        date={date}
        onConfirm={onChange}
        saveLabel="Save" 
        label="Select date"
        animationType="slide"
        locale={'en'}
      />
      <Button onPress={()=> setVisible(true)}>
        Pick date
      </Button>
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
  inputText:{
    marginVertical: 10,
    color: "orange", 
    backgroundColor: "transparent",
  },
  inputFrom:{
    marginVertical: 10,
    color: "orange", 
    backgroundColor: "transparent" 
  },
  timeContain:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeFrom:{
    flex: 0.49,
  }
});
