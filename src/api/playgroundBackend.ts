import axios from "axios";

const API_URL = "http://localhost:3000"; // your NestJS backend

export const getProjects = async () => {
  const res = await axios.get(`${API_URL}/projects/list`); // calls http://localhost:3000/api/projects
  return res.data;
};

export const getUser = async () => {
  const res = await axios.get(`${API_URL}/users/list`); // calls http://localhost:3000/api/user/1
  return res.data;
};
