import { AxiosResponse } from "axios";
import { api } from "./api";

export async function create(data: { title: string; description: string; }, id: String) {
    return await api({
      url: `/folder/${id}/create`,
      method: 'POST',
      data: data
    })
  }

export async function findAll(id: String) {
    return await api({
      url: `/folder/${id}/findAll`,
      method: 'GET'
    })
  }

export async function deleteFolder(id: String, folderId: String) {
    return await api({
      url: `/folder/${id}/delete/${folderId}`,
      method: 'GET'
    })
  }