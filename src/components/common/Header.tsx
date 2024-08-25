import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {textScale} from '../../styles/responsiveStyles';
import {spacing} from '../../styles/spacing';
import {fontNames} from '../../styles/typography';
import imagePath from '../../utills/imagePath';
import TextComp from './TextComp';

interface HeaderContainerProps {
  text?: string;
  style?: any;
  onPressBack?: () => void;
  CommonBackImagePath?: any;
}

const Header = ({
  text = '',
  style,
  onPressBack,
  CommonBackImagePath = imagePath.IC_BACK,
}: HeaderContainerProps) => {
  return (
    <View style={{...styles.headerContainer, ...style}}>
      <TouchableOpacity onPress={onPressBack}>
        <Image source={CommonBackImagePath} style={styles.icBackStyle} />
      </TouchableOpacity>
      <TextComp text={text} style={styles.headerstyle} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: spacing.PADDING_16,
  },
  icBackStyle: {
    width: spacing.WIDTH_40,
    height: spacing.HEIGHT_40,
    resizeMode: 'contain',
  },
  headerstyle: {
    color: '#000',
    fontSize: textScale(30),
    fontFamily: fontNames.FONT_FAMILY_BOLD,
    marginLeft: spacing.MARGIN_12,
  },
});
