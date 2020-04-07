import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { fetchGallery } from '../redux/gallery/galleryOperations';
import { useDispatch } from 'react-redux';
import { Gallery } from '../components/Gallery';

export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGallery());
  }, []);

  return (
    <View style={styles.center}>
      <Gallery navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});
