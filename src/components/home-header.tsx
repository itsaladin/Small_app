import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { Button, IconButton, useTheme, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

interface Props {
  leftIcon: string;
  rightIcon: string;
}

export const HomeHeader = (props: Props) => {
  const { colors } = useTheme();
  const navigation = useNavigation<any>();
  const [user, setUser] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  return (
    <ScrollView style={{ backgroundColor: colors.surface }}>
      <View style={styles.body}>
        <View>
          <IconButton
            icon={props.leftIcon}
            color={colors.disabled}
            size={20}
            onPress={() => navigation.openDrawer()}
          />
        </View>
        <View>
          <Text>Home</Text>
        </View>
        <IconButton
          icon={props.rightIcon}
          color={colors.disabled}
          size={20}
          onPress={() => { navigation.navigate("Create") }}
        />
      </View>
    </ScrollView>
  );
};
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  body: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});
