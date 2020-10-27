import axios from "axios";
import { Message } from "element-ui";

/**
 * 获取分类列表
 * @param url
 * @param parame
 * @param headers
 * @param callback
 */
const getBoxList = (url, parame, headers, callback) => {
  // 拼接请求参数
  var data = new FormData();
  let obj = JSON.parse(JSON.stringify(parame));
  for (var i in obj) {
    var property = obj[i];
    data.append(i, property);
  }

  axios
    .post(url, data, {
      headers: headers
    })
    .then(res => {
      if (res.status != 200) {
        Message.error("网络异常");
        callback({ code: res.status, msg: "网络异常" });
      } else {
        callback(res.data);
      }
    });
};

/**
 * 分页获取所有图片
 * @param url 请求路径
 * @param parame 请求额外参数
 * @param headers 请求头
 * @param boxid 分类ID
 * @param search 收缩关键词
 * @param page 当前页数
 * @param callback
 */

const getImagesByBoxidAndPage = (
  url,
  parame,
  headers,
  boxid,
  search = "",
  page,
  callback
) => {
  // 拼接请求参数
  var data = new FormData();
  let obj = JSON.parse(JSON.stringify(parame));
  console.log("接口准备111");
  for (var i in obj) {
    var property = obj[i];
    data.append(i, property);
  }
  data.append("limit", 15);
  data.append("page", page);
  if (boxid) {
    data.append("id", boxid);
  }
  if (search) {
    data.append("search", search);
  }

  axios
    .post(url, data, {
      headers: headers
    })
    .then(res => {
      if (res.status != 200) {
        Message.error("网络异常");
        callback({ code: res.status, msg: "网络异常" });
      } else {
        callback(res.data);
      }
    });
};

/**
 * 添加或者修改图片分类
 * @param name
 * @param id
 * @param callback
 */
const saveBox = (url, parame, headers, id = 0, name, callback) => {
  // 拼接请求参数
  var data = new FormData();
  let obj = JSON.parse(JSON.stringify(parame));
  console.log("添加图片分类");
  for (var i in obj) {
    var property = obj[i];
    data.append(i, property);
  }
  data.append("name", name);
  if (id != 0) {
    data.append("id", id);
  }

  axios
    .post(url, data, {
      headers: headers
    })
    .then(res => {
      if (res.status != 200) {
        Message.error("网络异常");
        callback({ code: res.status, msg: "网络异常" });
      } else {
        callback(res.data);
      }
    });
};

/**
 * 删除分组
 * @param url
 * @param parame
 * @param headers
 * @param id
 * @param callback
 */
const delBox = (url, parame, headers, id = 0, callback) => {
  // 拼接请求参数
  var data = new FormData();
  let obj = JSON.parse(JSON.stringify(parame));
  console.log("删除图片分类");
  for (var i in obj) {
    var property = obj[i];
    data.append(i, property);
  }
  if (id != 0) {
    data.append("id", id);
  }

  axios
    .post(url, data, {
      headers: headers
    })
    .then(res => {
      if (res.status != 200) {
        Message.error("网络异常");
        callback({ code: res.status, msg: "网络异常" });
      } else {
        callback(res.data);
      }
    });
};

/**
 * 上传文件
 * @param url
 * @param parame
 * @param headers
 * @param image
 * @param callback
 */
const uploadfile = (url, parame, headers, image, callback) => {
  // 拼接请求参数
  var data = new FormData();
  let obj = JSON.parse(JSON.stringify(parame));
  console.log("上传图片");
  for (var i in obj) {
    var property = obj[i];
    data.append(i, property);
  }
  if (image != 0) {
    data.append("image", image);
  }

  axios
    .post(url, data, {
      headers: headers
    })
    .then(res => {
      if (res.status != 200) {
        Message.error("网络异常");
        callback({ code: res.status, msg: "网络异常" });
      } else {
        callback(res.data);
      }
    });
};

/**
 * 删除图片
 * @param url
 * @param parame
 * @param headers
 * @param id
 * @param callback
 */
const delImageById = (url, parame, headers, id, callback) => {
  // 拼接请求参数
  var data = new FormData();
  let obj = JSON.parse(JSON.stringify(parame));
  console.log("删除图片");
  for (var i in obj) {
    var property = obj[i];
    data.append(i, property);
  }
  data.append("id", id);

  axios
    .post(url, data, {
      headers: headers
    })
    .then(res => {
      if (res.status != 200) {
        Message.error("网络异常");
        callback({ code: res.status, msg: "网络异常" });
      } else {
        callback(res.data);
      }
    });
};

export {
  getBoxList,
  getImagesByBoxidAndPage,
  saveBox,
  delBox,
  uploadfile,
  delImageById
};
