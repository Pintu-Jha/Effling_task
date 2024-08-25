import React from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View
} from 'react-native';
import { textScale } from '../../styles/responsiveStyles';
import { spacing } from '../../styles/spacing';

type TextInputContainerProps = {
  inputStyle?: any;
  textStyle?: any;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: String;
  secureText?: any;
  onPressSecure?: () => void;
  placeholderTextColor?: string;
  isTitleIcon?: boolean;
  titleIcon?: any;
};

const TextInputComp = ({
  inputStyle = {},
  textStyle = {},
  value = '',
  onChangeText,
  placeholder = '',
  secureText,
  onPressSecure = () => {},
  placeholderTextColor = '#484651',
  isTitleIcon = false,
  titleIcon,
  ...props
}: TextInputContainerProps & TextInputProps) => {
  return (
    <View style={{...styles.inputStyle, ...inputStyle}}>
      {!!isTitleIcon ? <View>{titleIcon}</View> : null}
      <TextInput
        style={{...styles.textStyle, ...textStyle}}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        {...props}
      />
      {!!secureText ? (
        <TouchableOpacity onPress={onPressSecure}>
          {secureText}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  inputStyle: {
    borderRadius: spacing.RADIUS_8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.PADDING_6,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: spacing.MARGIN_16,
    borderColor: '#9FA0A6',
    borderWidth: 1,
  },
  textStyle: {
    fontSize: textScale(16),
    // fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    flex: 1,
    color: '#000',
    textTransform:'none',
  },
});
