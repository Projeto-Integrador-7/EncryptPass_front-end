import { AxiosResponse } from "axios";
import {api} from "./api";

export async function signInRequest(data) {
  return await api({
      url: '/user/login',
      method: 'POST',
      data: data
    })
  }