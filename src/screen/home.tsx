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
import { TextInput,Button, useTheme, IconButton, Divider } from 'react-native-paper';
import {HomeHeader} from '../components/home-header';

export const Home =({navigation}: {navigation: any}) => {
  const {colors} = useTheme();
  const [user, setUser] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  return (
    <ScrollView style={{backgroundColor:colors.surface}}>
       <HomeHeader leftIcon="menu" rightIcon="plus" />
      <View style={styles.body}>
        <View style={{backgroundColor: colors.placeholder}}>
            <Text style={[styles.dateTime,{ borderLeftColor: colors.backdrop}]} >TUESDAY, MARCH 9</Text>
        </View>
        <View style={[styles.meetingWithContain,{ borderLeftColor: colors.accent}]}>
            <View>
                <Text >Meeting wiht Jane</Text>
                <Text >8 : 10 am Starbucks</Text>
            </View>
            <View>
                <IconButton
                    icon="check"
                    color={colors.disabled}
                    size={20}
                    onPress={() => console.log('Pressed')}
                />
            </View>
        </View>
        <Divider />
        <View style={[styles.meetingWithContain,{ borderLeftColor: colors.accent}]}>
           <View>
                <Text >Catch Up with Brain</Text>
                <Text >8 : 10 am </Text>
            </View>
            <View>
            <IconButton
                icon="trash-can-outline"
                color={colors.disabled}
                size={20}
                onPress={() => console.log('Pressed')}
            />
            </View>
        </View>
        <Divider />
        <View style={[styles.meetingWithContain,{ borderLeftColor: colors.primary}]}>
           <View>
                <Text>Lunch with Diane</Text>
                <Text>8 : 10 am Starbucks </Text>
            </View>
            <View>
            <IconButton
                icon="check"
                color={colors.disabled}
                size={20}
                onPress={() => console.log('Pressed')}
            />
            </View>
        </View>
        <View style={{backgroundColor: colors.placeholder}}>
            <Text style={[styles.dateTime,{ borderLeftColor: colors.placeholder}]}>MONDAY, MARCH 9</Text>
        </View>
        <View style={[styles.meetingWithContain,{ borderLeftColor: colors.notification}]}>
            <View>
                <Text>Dinner wiht Maria</Text>
                <Text>8 : 10 am Starbucks</Text>
            </View>
            <View>
                <IconButton
                    icon="check"
                    color={colors.disabled}
                    size={20}
                    onPress={() => console.log('Pressed')}
                />
            </View>
        </View>
        <Divider />
        <View style={[styles.meetingWithContain,{ borderLeftColor: colors.accent}]}>
            <View>
                <Text>Meeting wiht Jane</Text>
                <Text>8 : 10 am Starbucks</Text>
            </View>
            <View>
                <IconButton
                    icon="check"
                    color={colors.disabled}
                    size={20}
                    onPress={() => console.log('Pressed')}
                />
            </View>
        </View>
      </View>
    </ScrollView>
  );
};
const {width, height} =  Dimensions.get('window');
const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    justifyContent: 'space-between'
  },
  dateTime:{
    paddingLeft: 20,
    paddingVertical: 20,
    borderLeftWidth: 5
  },
  meetingWithContain:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 20,
    borderLeftWidth: 5,
  },
});
