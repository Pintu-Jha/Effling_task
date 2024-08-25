import React from 'react';
import {textScale} from '../../styles/responsiveStyles';
import {spacing} from '../../styles/spacing';
import {fontNames} from '../../styles/typography';
import TextComp from './TextComp';
import {StyleSheet} from 'react-native';

type CommonHeading = {
  heading?: string;
  style?: any;
};

const CommonHeading = ({heading, style}: CommonHeading) => {
  return (
    <TextComp
      style={{
        ...styles.textStyle,
        style,
      }}>
      {heading}
    </TextComp>
  );
};

export default CommonHeading;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: textScale(25),
    fontFamily: fontNames.FONT_FAMILY_BOLD,
    marginBottom: spacing.MARGIN_10,
    color: '#000',
    fontWeight:"bold"
  },
});
