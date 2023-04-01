import {
  GET_FAVS,
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FILTER_FAV,
  ORDER_FAV,
  LOGIN,
} from "./actions";

const initialState = {
  idUser: 0,
  myFavorites: [],
  myFavoritesOrigin: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_FAVS:
      return {
        ...state,
        myFavorites: [...state.myFavoritesOrigin],
      };
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavoritesOrigin, payload],
        myFavoritesOrigin: [...state.myFavoritesOrigin, payload],
      };
    case DELETE_FAVORITES:
      const deleted = state.myFavorites.filter((ch) => {
        return ch.id !== payload;
      });
      return {
        ...state,
        myFavorites: deleted,
        myFavoritesOrigin: deleted,
      };
    case FILTER_FAV:
      const filterCopy = [...state.myFavoritesOrigin];
      const filtered = filterCopy.filter((ch) => ch.gender === payload);
      return {
        ...state,
        myFavorites: filtered,
      };
    case ORDER_FAV:
      const orderCopy = [...state.myFavoritesOrigin];
      const order = orderCopy.sort((a, b) => {
        if (a.id < b.id) {
          return "Ascendente" === payload ? 1 : -1;
        }
        if (a.id > b.id) {
          return "Descendente" === payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: order,
      };
    case LOGIN:
      return {
        ...state,
        idUser: payload,
      };
    default:
      return state;
  }
}
