import { useNavigation } from '@react-navigation/core';
import { Divider, List, ListItem } from '@ui-kitten/components';
import React from 'react';

import { allSounds } from '../api/data';
import { Routes } from '../navigation/Routes';

interface Props {}

const SoundList = (props: Props) => {
  const navigation = useNavigation();
  const handlePress = (id: string) => {
    navigation.navigate(Routes.MUSIC_DETAILS_SCREEN, { musicId: id });
  };

  const renderItem = ({ item }) => (
    <ListItem
      title={`${item.music.title}`}
      description={`${item.artist}`}
      onPress={() => handlePress(item.id)}
    />
  );

  return (
    <List
      data={allSounds}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
};

export default SoundList;
