// configs
import api from "@/configs/api";
import { ResponseCodes, ResponseMessages } from "@/enums";

export const fetchSession = () => {
  return api.get(`/api/session`).then((res) => res.data);
};

export const fetchCurrentAdmin = () => {
  return api.get("/api/current-admin").then((res) => res.data);
};
