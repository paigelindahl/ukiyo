const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const db = require("./db");
const dbHelpers = require("./helpers/dbHelpers")(db);

const PORT = 8080;

// Express Configuration
// App.use('/api/users', usersRouter(dbHelpers));
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

// Sample GET route
App.get("/api/data", (req, res) =>
  res.json({
    message: "Seems to work!",
  })
);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});

//add a task
App.post("/tasks", async (req, res) => {
  const { task, completed, user_id } = req.body;
  console.log(typeof user_id);
  console.log('are you hitting this?')

  try {
    const newTodo = await db.query(
      "INSERT INTO tasks(task, created_at, completed, user_id) VALUES($1, NOW(), $2, $3) RETURNING *",
      [task, completed, user_id]
    );
    res.json({});
  } catch (err) {
    console.error(err.message);
  }
});

//get all the tasks
App.get("/tasks", async (req, res) => {
  try {
    const allTodos = await db.query("SELECT * FROM tasks");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get all incomplete tasks
App.get("/taskspending", async (req, res) => {
  try {
    const pendingTodos = await db.query("SELECT * FROM tasks WHERE completed = false");
    console.log('pendingTodos :', pendingTodos.rows);

    res.json(pendingTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//get a single task
App.get("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleTask = await db.query("SELECT * FROM tasks WHERE id = $1", [id]);

    res.json(singleTask.rows)
  } catch (err) {
    console.error(err.message);
  }
});

//delete a single task
App.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await db.query("DELETE FROM tasks WHERE id = $1", [id]);

    res.json('to do was deleted')

  } catch (err) {
    console.error(err.message);
  }
});


//update a single task 
App.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {task} =  req.body;
    const updateTask = await db.query("UPDATE tasks SET task=$1 WHERE id = $2", [task, id]);

    res.json('it was update')

  } catch (err) {
    console.error(err.message);
  }
});

// {
//   "task": "post and get",
//   "created_at": "2020-10-10T15:23:25.000Z",
//   "completed": false,
//   "user_id": 1
// }
