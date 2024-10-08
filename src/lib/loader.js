import { defer } from "react-router-dom";
import { apiRequest } from "./apiRequest";

export const singlePageLoader = async ({ params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};

export const listLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];

  const resPromise = apiRequest("/posts?" + query);
  return defer({
    postResponse: resPromise,
  });
};

export const profilePageLoader = async ({ params }) => {
  const postPromise = await apiRequest("/users/profilePosts");
  const chatPromise = await apiRequest("/chats");
  return defer({
    postResponse: postPromise,
    chatResponse: chatPromise,
  });
};
