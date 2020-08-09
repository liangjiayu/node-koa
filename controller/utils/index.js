class Message {
  success(data = {}, msg = 'success', options = {}) {
    return {
      code: 200,
      data: data,
      msg: msg,
      ...options,
    };
  }

  error(msg = '系统错误', options = {}) {
    return {
      code: 400,
      msg: msg,
      ...options,
    };
  }
}

module.exports.Message = new Message();
