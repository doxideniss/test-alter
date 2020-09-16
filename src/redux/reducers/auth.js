const SET_IS_AUTH = 'SET_IS_AUTH';

const initialState = {
  isAuth: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload
      };
    default:
      return state
  }
}

export const setAuth = (bool) => ({
  type: SET_IS_AUTH,
  payload: bool
});
