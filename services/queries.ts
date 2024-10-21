// configs
import api from "@/configs/api";

export const fetchSession = () => {
  return api.get(`/api/session`).then((res) => res.data);
};

export const fetchCurrentAdmin = () => {
  return api.get("/api/current-admin").then((res) => res.data);
};

export const fetchAdmins = () => {
  return api.get("/api/admins").then((res) => res.data);
};
