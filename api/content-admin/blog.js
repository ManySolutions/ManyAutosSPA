const { default: http } = require("~/utils/http");

export async function postBlog($http, form) {
  return (await ($http || http).post(`/create/blog`, form)).data
}

export async function updateBlog($http, blog, form) {
  return (await ($http || http).post(`/update/blog/${blog}`, form)).data
}

export async function getAllBlogs($http) {
  return (await ($http || http).get(`/list/blogs`)).data
}

export async function getBlog($http, blog) {
  return (await ($http || http).get(`/get/blog/${blog}`)).data
}

export async function getDeletedBlog($http) {
  return (await ($http || http).get(`/deleted/blogs`)).data
}

export async function publishBlog($http, blog, status) {
  return (await ($http || http).post(`/publish/blog/${blog}/${status}`)).data
}

export async function restoreBlog($http, blog) {
  return (await ($http || http).post(`/restore/blog/${blog}`)).data
}

export async function deleteBlog($http, blog) {
  return (await ($http || http).post(`/delete/blog/${blog}`)).data
}