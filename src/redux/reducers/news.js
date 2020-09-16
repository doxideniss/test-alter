import { newsApi } from "../../api";

const SET_NEWS = 'SET_NEWS';
const SET_IS_LOADING = 'SET_IS_LOADING';

const initialState = {
  items: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state
  }
}

export const setNews = (data) => ({
  type: SET_NEWS,
  payload: data
});

export const setIsLoading = (bool) => ({
  type: SET_IS_LOADING,
  payload: bool
});

export const fetchNews = () => async dispatch => {
  dispatch(setIsLoading(true));
  const news = await newsApi.getNews();
  dispatch(setNews(news));
};
