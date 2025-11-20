import axios from "axios";

export const createProject = async (data) => {
  const res = await axios.post("http://localhost:3000/projects", data);
  return res.data;
};
