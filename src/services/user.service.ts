import { AxiosResponse } from "axios";
import { api } from "./api";

export function create(data) {
    return api({
      url: '/user/create',
      method: 'POST',
      data: data
    })
  }