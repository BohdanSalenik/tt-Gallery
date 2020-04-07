import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { getPhotoId } from '../redux/gallery/galleryActions';
export const GalleryItem = ({ id, imgLink, userName, navigation }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(getPhotoId(id));
    navigation.navigate('Image');
  };

  return (
    <View style={styles.imgWrapper}>
      <TouchableOpacity onPress={() => clickHandler()}>
        <Image source={{ uri: `${imgLink}` }} style={styles.img} />
      </TouchableOpacity>
      <Text>{userName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrapper: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  img: {
    height: 250,
    resizeMode: 'cover',
  },
});
