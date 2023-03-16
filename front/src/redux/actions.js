export const ADD_FAVORITES = "ADD_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const FILTER_FAV = "FILTER_FAV";
export const ORDER_FAV = "ORDER_FAV";
export const RESET_FAV = "RESET_FAV";

export function addFav(ch) {
  return async function (dispatch) {
    try {
      await fetch("http://localhost:3001/fav", {
        method: "POST",
        body: JSON.stringify(ch),
        headers: { "Content-Type": "application/json; charset= UTF-8" },
      })
        .then((response) => response.json())
        .then((data) =>
          dispatch({
            type: ADD_FAVORITES,
            payload: data,
          })
        );
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteFav(id) {
  return async function (dispatch) {
    try {
      await fetch(`http://localhost:3001/fav/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success)
            dispatch({
              type: DELETE_FAVORITES,
              payload: id,
            });
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

export function resetFav() {
  return {
    type: RESET_FAV,
  };
}
