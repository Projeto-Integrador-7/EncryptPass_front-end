import { AxiosResponse } from "axios";
import { api } from "./api";

export async function create(data: { title: string; description: string; }, id: String) {
    return await api({
      url: `/folder/${id}/create`,
      method: 'POST',
      data: data
    })
  }

export async function createCredential(id , data) {
  return await api({
    url: `/credentials/${id}/create`,
    method: 'POST',
    data: data
  })
}

export async function updateCredential(id, credentialsId, data) {
  return await api({
    url: `/credentials/${id}/update/${credentialsId}`,
    method: 'PUT',
    data: data
  })
}

export async function deleteCredential(id, credentialsId) {
  return await api({
    url: `/credentials/${id}/delete/${credentialsId}`,
    method: 'DELETE'
  })
}

export async function findAllCredential(userId, folderId) {
  return await api({
    url: `/credentials/${userId}/${folderId}`,
    method: 'GET'
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
      method: 'DELETE'
    })
  }