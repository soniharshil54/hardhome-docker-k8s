const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3020;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const RequestUtilService = require('./services/requestUtil');

function success(res, payload) {
  return res.status(200).json(payload);
}

app.get("/envs", async (req, res, next) => {
  try {
    const environmentVariables = process.env;
    const data = {
      environmentVariables,
    };

  res.json(data);
  } catch (err) {
    console.log('err', err);
    next({ status: 400, message: "failed envs" });
  }
});

app.get("/healthcheck", async (req, res, next) => {
  try {
    return res.json({
      message: 'ok',
      note: 'ok'
    })
  } catch (err) {
    console.log('err', err);
    next({ status: 400, message: "failed to healthcheck" });
  }
});

app.get("/todos", async (req, res, next) => {
  try {
    const todos = await RequestUtilService.get('todos');
    return success(res, todos);
  } catch (err) {
    console.log('err', err);
    next({ status: 400, message: "failed to get todos" });
  }
});

app.post("/todos", async (req, res, next) => {
  try {
    const todo = await RequestUtilService.post('todos', req.body);
    return success(res, todo);
  } catch (err) {
    next({ status: 400, message: "failed to create todo" });
  }
});

app.put("/todos/:id", async (req, res, next) => {
  try {
    const todo = await RequestUtilService.put('todos', req.params.id, req.body);
    return success(res, todo);
  } catch (err) {
    next({ status: 400, message: "failed to update todo" });
  }
});

app.delete("/todos/:id", async (req, res, next) => {
  try {
    await RequestUtilService.delete('todos',req.params.id);
    return success(res, "todo deleted!");
  } catch (err) {
    next({ status: 400, message: "failed to delete todo" });
  }
});

app.use((err, req, res, next) => {
  return res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || "there was an error processing request"
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
