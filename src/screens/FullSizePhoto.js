import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export const FullSizePhoto = () => {
  const { gallery, id } = useSelector((state) => state.gallery);
  const image = gallery.find((item) => item.id === id);
  return (
    <View>
      <Image source={{ uri: `${image.bigImgLink}` }} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: '100%',
  },
});
