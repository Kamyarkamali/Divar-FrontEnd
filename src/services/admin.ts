import { api } from "../configs/api";
import { Isate } from "../types/interface";

const addCategory = async (data: Isate) => {
  const res = await api.post("category", data);
  return res;
};

const getCategory = async () => {
  const res = await api.get("category");
  return res;
};

const deleteCategory = async (id) => {
  const res = await api.delete(`category/${id}`);
  return res.data;
};

export { addCategory, getCategory, deleteCategory };
