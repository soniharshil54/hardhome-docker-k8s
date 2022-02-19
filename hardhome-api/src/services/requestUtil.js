const p = require("phin");

const SERVER_HOST = process.env.BACKEND_SERVER_HOST || 'localhost';
const SERVER_PORT = process.env.BACKEND_SERVER_PORT || 3010;

module.exports = {
  async get(module) {
    try {
      const data = await p({
        url: `http://${SERVER_HOST}:${SERVER_PORT}/${module}`,
        parse: 'json',
      });
      const result = data.body;
      return result;
    } catch (e) {
      throw new Error(e);
    }
  },

  async post(module, body) {
    try {
      const data = await p({
        url: `http://${SERVER_HOST}:${SERVER_PORT}/${module}`,
        parse: 'json',
        method: 'POST',
        data: {
          ...body,
        }
      });
      const result = data.body;
      return result;
    } catch (e) {
      throw new Error(e);
    }
  },

  async put(module, id, body) {
    try {
      const data = await p({
        url: `http://${SERVER_HOST}:${SERVER_PORT}/${module}/${id}`,
        parse: 'json',
        method: 'PUT',
        data: body,
      });
      const result = data.body;
      return result;
    } catch (e) {
      throw new Error(e);
    }
  },

  async delete(module, id) {
    try {
      const data = await p({
        url: `http://${SERVER_HOST}:${SERVER_PORT}/${module}/${id}`,
        parse: 'json',
        method: 'DELETE',
      });
      const result = data.body;
      return result;
    } catch (e) {
      throw new Error(e);
    }
  },
};
