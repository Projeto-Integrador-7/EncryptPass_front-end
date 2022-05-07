import { AxiosResponse } from "axios";
import {api} from "./api";

export function signIn(data) {
    return api({
      url: '/user/login',
      method: 'POST',
      data: data
    })
  }