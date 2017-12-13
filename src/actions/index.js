import Axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=RUBYRULEZ123"

export const fetchPosts = () => {
  const request = Axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return ({
    type: FETCH_POSTS,
    payload: request
  });
}

export const createPost = (values) => {
  const request = Axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

  return {
    type: CREATE_POST,
    pauload: request
  }
}
