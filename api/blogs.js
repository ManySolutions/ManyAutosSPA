const { default: http } = require("~/utils/http");

export async function getBlogs() {
  return (await http.get('/customer/list/blogs')).data
}