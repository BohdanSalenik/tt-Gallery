import { ActionType } from '../../utils/constants';

export const fetchGallerySuccess = (data) => ({
  type: ActionType.FETCH_GALLERY_SUCCESS,
  payload: {
    data,
  },
});

export const getPhotoId = (id) => ({
  type: ActionType.GET_PHOTO_ID,
  payload: {
    id,
  },
});