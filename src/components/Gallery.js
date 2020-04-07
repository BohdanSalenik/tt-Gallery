import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, View } from 'react-native';
import { GalleryItem } from './GalleryItem';

export const Gallery = ({ navigation }) => {
  const gallery = useSelector((state) => state.gallery.gallery);

  return (
    <View>
      <FlatList
        data={gallery}
        renderItem={({ item }) => (
          <GalleryItem
            id={item.id}
            imgLink={item.smallImgLink}
            userName={item.user}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
