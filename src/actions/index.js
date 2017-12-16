import Axios from "axios";

import { FETCH_POST, FETCH_POSTS, CREATE_POST, DELETE_POST } from "./types";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=RUBYRULEZ123"

export const fetchPosts = () => {
  const request = Axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return ({
    type: FETCH_POSTS,
    payload: request
  });
}

export const createPost = (values, callback) => {
  const request = Axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    pauload: request
  }
}

export const fetchPost = (id) => {
  const request = Axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

  return ({
    type: FETCH_POST,
    payload: request
  });
}

export const deletePost = (id, callback) => {
  const request = Axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return ({
    type: DELETE_POST,
    payload: id
  });
}
