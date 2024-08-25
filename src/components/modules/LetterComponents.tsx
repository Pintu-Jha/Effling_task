import React, { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { spacing } from '../../styles/spacing';
import imagePath from '../../utills/imagePath';
import CommonHeading from '../common/CommonHeading';
import LetterComponentRow from '../rows/LetterComponentRow';

type LetterComponentsProps = {
  heading?: string;
  dummydata: any;
  isleftNavigation?: boolean;
};

const LetterComponents = ({
  heading,
  dummydata,
  isleftNavigation,
}: LetterComponentsProps) => {
  const flatListRef = useRef<FlatList<any>>(null);
  const [data, setData] = useState(dummydata);
  const [currentIndex, setCurrentIndex] = useState(0);
  const updateItemSeen = (id: number) => {
    setData((prevData: any[]) =>
      prevData.map(item =>
        item.id === id ? {...item, isPreviousPicSeen: false} : item,
      ),
    );
  };

  const onPressItem = (id: number) => {
    updateItemSeen(id);
  };

  const scrollToIndex = (index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ animated: true, index });
      setCurrentIndex(index);
    }
  };

  const onRightPress = () => {
    if (currentIndex < data.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const onLeftPress = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.commonHeaderContainer}>
        <CommonHeading heading={heading} />
        {isleftNavigation && (
          <View style={styles.itemNavigationBtnContainer}>
            <TouchableOpacity onPress={onLeftPress}>
              <Image
                source={imagePath.IC_Left}
                style={styles.rightNavigationBtn}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onRightPress}>
              <Image
                source={imagePath.IC_Left}
                style={styles.leftNavigationBtn}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={item => item?.id?.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}: any) => {
          const previousItemSeen =
            index === 0 || !data[index - 1].isPreviousPicSeen;
          return (
            <LetterComponentRow
              item={item}
              index={index}
              onPressItem={onPressItem}
              previousItemSeen={previousItemSeen}
              key={'LetterComponentRow' + index}
            />
          );
        }}
      />
    </View>
  );
};

export default LetterComponents;

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.MARGIN_16,
    flex:1
  },
  itemNavigationBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightNavigationBtn: {
    transform: [{rotateY: '180deg'}],
    width: spacing.WIDTH_24,
    height: spacing.HEIGHT_24,
    resizeMode: 'contain',
    marginRight:spacing.MARGIN_8
  },
  leftNavigationBtn: {
    width: spacing.WIDTH_24,
    height: spacing.HEIGHT_24,
    resizeMode: 'contain',
  },
  commonHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: spacing.MARGIN_16,
  },
});
