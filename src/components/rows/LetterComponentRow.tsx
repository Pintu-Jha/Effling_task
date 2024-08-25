import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {textScale} from '../../styles/responsiveStyles';
import {spacing} from '../../styles/spacing';
import {fontNames} from '../../styles/typography';
import TextComp from '../common/TextComp';

type LetterComponentRowProps = {
  item: Record<string, any>;
  index: number;
  onPressItem: (id: number) => void;
  previousItemSeen: boolean;
};

const LetterComponentRow = ({
  item,
  onPressItem,
  previousItemSeen,
}: LetterComponentRowProps) => {
  const isClickable = previousItemSeen;
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={[styles.container]}
        onPress={() => onPressItem(item?.id)}
        disabled={!isClickable}>
        <Image
          source={{uri: item?.imageUrl}}
          style={[
            styles.imageStyle,
            {opacity: item?.isPreviousPicSeen ? 0.3 : 1},
          ]}
        />
      </TouchableOpacity>
      <TextComp text={item?.alphabet} style={styles.textStyle} />
    </View>
  );
};

export default LetterComponentRow;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  container: {
    marginHorizontal: spacing.MARGIN_12,
    marginVertical: spacing.PADDING_4,
    backgroundColor: '#3B0714',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: spacing.RADIUS_12,
    width: spacing.WIDTH_100,
    height: spacing.HEIGHT_80,
  },
  imageStyle: {
    width: spacing.WIDTH_95,
    height: spacing.HEIGHT_74,
    resizeMode: 'cover',
    borderRadius: spacing.RADIUS_12,
  },
  textStyle: {
    fontSize: textScale(24),
    color: '#000',
    fontFamily: fontNames.FONT_FAMILY_REGULAR,
    fontWeight: '900',
  },
});
