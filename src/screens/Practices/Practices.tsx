import React from 'react';
import {StyleSheet, View} from 'react-native';
import {navigate} from '../../NavigationServies';
import Header from '../../components/common/Header';
import navigationString from '../../navigation/navigationString';
import imagePath from '../../utills/imagePath';
import LetterComponents from '../../components/modules/LetterComponents';
import VirtualizedView from '../../components/common/VirtualizedView';

const dummyData1 = [
  {
    id: 1,
    alphabet: 'A practics',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEGJN8IxBxTsa_sHdw8tubDovI-SA-ukmAg&s',
    isPreviousPicSeen: false,
  },
  {
    id: 2,
    alphabet: 'B Letter',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGw6ot01VMc071JTg7CREu13Qd-iKzJzJ5Q&s',
    isPreviousPicSeen: true,
  },
  {
    id: 3,
    alphabet: 'C Letter',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6G8-qs7Dud658MYP0C7KzBo0MDrvWtFRJSQ&s',
    isPreviousPicSeen: true,
  },
  {
    id: 4,
    alphabet: 'D Letter',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyq_MJaLm0jNObwvBCzPkveCtpVU3FpTUC1w&s',
    isPreviousPicSeen: true,
  },
  {
    id: 5,
    alphabet: 'E Letter',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2923obXfmr4qrtXSY7nPIUZC7NOY5w4R9w&s',
    isPreviousPicSeen: true,
  },
];
const dummyData2 = [
  {
    id: 1,
    alphabet: 'a practics',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEGJN8IxBxTsa_sHdw8tubDovI-SA-ukmAg&s',
    isPreviousPicSeen: false,
  },
  {
    id: 2,
    alphabet: 'b Letter',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGw6ot01VMc071JTg7CREu13Qd-iKzJzJ5Q&s',
    isPreviousPicSeen: true,
  },
  {
    id: 3,
    alphabet: 'c Letter',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6G8-qs7Dud658MYP0C7KzBo0MDrvWtFRJSQ&s',
    isPreviousPicSeen: true,
  },
  {
    id: 4,
    alphabet: 'd Letter',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyq_MJaLm0jNObwvBCzPkveCtpVU3FpTUC1w&s',
    isPreviousPicSeen: true,
  },
  {
    id: 5,
    alphabet: 'e Letter',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2923obXfmr4qrtXSY7nPIUZC7NOY5w4R9w&s',
    isPreviousPicSeen: true,
  },
];

const Practices = () => {
  return (
    <VirtualizedView style={{flex: 1}}>
      <Header
        text="English Practice"
        onPressBack={() => navigate(navigationString.HOME_SCREEN)}
        CommonBackImagePath={imagePath.IC_BACK}
      />
      <LetterComponents
        heading="A to Z Capital"
        dummydata={dummyData1}
        isleftNavigation={true}
      />
      <LetterComponents
        heading="Small Letter"
        dummydata={dummyData2}
        isleftNavigation={false}
      />
    </VirtualizedView>
  );
};

export default Practices;

const styles = StyleSheet.create({});
