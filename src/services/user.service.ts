import { AxiosResponse } from "axios";
import { api } from "./api";

export function create(data) {
    return api({
      url: '/user/create',
      method: 'POST',
      data: data
    })
  }

  export function update(id, data) {
    return api({
      url: `/user/update/${id}`,
      method: 'PUT',
      data: data
    })
  }