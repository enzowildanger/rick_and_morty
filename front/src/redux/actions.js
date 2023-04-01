export const GET_FAVS = "GET_FAVS";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const FILTER_FAV = "FILTER_FAV";
export const ORDER_FAV = "ORDER_FAV";
export const LOGIN = "LOGIN";

export function addFav(ch, idUser) {
  return async function (dispatch) {
    try {
      const data = await fetch(`http://localhost:3001/fav?idUser=${idUser}`, {
        method: "POST",
        body: JSON.stringify(ch),
        headers: { "Content-Type": "application/json; charset= UTF-8" },
      }).then((response) => response.json());
      if (data)
        dispatch({
          type: ADD_FAVORITES,
          payload: data,
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteFav(id, idUser) {
  return async function (dispatch) {
    try {
      const data = await fetch(
        `http://localhost:3001/fav/${id}?idUser=${idUser}`,
        {
          method: "DELETE",
        }
      ).then((response) => response.json());
      if (data.success)
        dispatch({
          type: DELETE_FAVORITES,
          payload: id,
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getFav(idUser) {
  return async function (dispatch) {
    try {
      const data = await fetch(
        `http://localhost:3001/fav?idUser=${idUser}`
      ).then((response) => response.json());
      if (data)
        dispatch({
          type: GET_FAVS,
          payload: data,
        });
    } catch (error) {
      console.log(error);
    }
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

export function login(email, password) {
  return async function (dispatch) {
    try {
      const obj = await fetch(
        `http://localhost:3001/login?email=${email}&password=${password}`
      ).then((response) => response.json());

      if (obj.access) dispatch({ type: LOGIN, payload: obj.id });
    } catch (error) {
      console.log(error);
    }
  };
}
