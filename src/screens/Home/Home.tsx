import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {textScale} from '../../styles/responsiveStyles';
import {navigate} from '../../NavigationServies';
import navigationString from '../../navigation/navigationString';
import {spacing} from '../../styles/spacing';
import {fontNames} from '../../styles/typography';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{fontSize: textScale(20), color: '#000', fontWeight: 'black'}}>
        Home
      </Text>
      <TouchableOpacity
        onPress={() => navigate(navigationString.PRACTICES_SCREEN)}
        style={{
          width: spacing.FULL_WIDTH / 1.1,
          height: spacing.HEIGHT_40,
          backgroundColor: 'gray',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: textScale(20),
            fontFamily: fontNames.FONT_FAMILY_MEDIUM,
          }}>
          Go to practices screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
