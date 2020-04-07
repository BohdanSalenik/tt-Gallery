import axios from 'axios';
import {
  fetchGallerySuccess,
} from './galleryActions';
import { BASE_URL } from '../../utils/constants';

export const fetchGallery = () => (dispatch) => {
  axios
    .get(BASE_URL)
    .then(res => {
      const gallery = res.data.map(photo => ({
        id: photo.id,
        smallImgLink: photo.urls.small,
        bigImgLink: photo.urls.full,
        user: photo.user.name,
      }))
      dispatch(fetchGallerySuccess(gallery))
    })
    .catch(err => console.error(err))
};
