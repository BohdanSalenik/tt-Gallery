import { ActionType } from '../../utils/constants';

const initialState = {
  gallery: [],
  id: '',
};

export const galleryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_GALLERY_SUCCESS:
      return {
        ...state,
        gallery: payload.data,
      };
    case ActionType.GET_PHOTO_ID:
      return {
        ...state,
        id: payload.id,
      };
    default:
      return state;
  }
};
