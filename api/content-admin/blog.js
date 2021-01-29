const { default: http } = require("~/utils/http");

export async function postBlog($http, form) {
  return (await ($http || http).post(`/auth/create/blog`, form)).data
}

export async function updateBlog($http, blog, form) {
  return (await ($http || http).post(`/auth/update/blog/${blog}`, form)).data
}

export async function getAllBlogs($http) {
  return (await ($http || http).get(`/auth/list/blogs`)).data
}

export async function getBlog($http, blog) {
  return (await ($http || http).get(`/auth/get/blog/${blog}`)).data
}

export async function getDeletedBlog($http) {
  return (await ($http || http).get(`/auth/deleted/blogs`)).data
}

export async function publishBlog($http, blog, status) {
  return (await ($http || http).post(`/auth/publish/blog/${blog}/${status}`)).data
}

export async function restoreBlog($http, blog) {
  return (await ($http || http).post(`/auth/restore/blog/${blog}`)).data
}

export async function deleteBlog($http, blog) {
  return (await ($http || http).post(`/auth/delete/blog/${blog}`)).data
}