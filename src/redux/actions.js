export const ADD_FAVORITES = "ADD_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const FILTER_FAV = "FILTER_FAV";
export const ORDER_FAV = "ORDER_FAV";
export const RESET_FAV = "RESET_FAV";

export function addFav(ch) {
  return {
    type: ADD_FAVORITES,
    payload: ch,
  };
}

export function deleteFav(id) {
  return {
    type: DELETE_FAVORITES,
    payload: id,
  };
}

export function filterFav(status) {
  return {
    type: FILTER_FAV,
    payload: status,
  };
}

export function orderFav(id) {
  return {
    type: ORDER_FAV,
    payload: id,
  };
}

export function resetFav() {
  return {
    type: RESET_FAV,
  };
}
