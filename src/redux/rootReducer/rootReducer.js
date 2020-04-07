import { combineReducers } from 'redux';
import { galleryReducer } from '../gallery/galleryReducer';

export const rootReducer = combineReducers({
  gallery: galleryReducer,
});
