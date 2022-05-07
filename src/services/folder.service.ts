import { AxiosResponse } from "axios";
import { api } from "./api";

export function create(data) {
    return api({
      url: '/folder/createFolder',
      method: 'POST',
      data: data
    })
  }