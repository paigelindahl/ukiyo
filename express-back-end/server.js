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
App.post("/dashboard", async (req, res) => {
  const { task, created_at, completed, user_id } = req.body;
  console.log(typeof user_id);

  try {
    const newTodo = await db.query(
      "INSERT INTO tasks(task, created_at, completed, user_id) VALUES($1, $2, $3, $4) RETURNING *",
      [task, created_at, completed, user_id]
    );
    console.log("this is ressend", newTodo.rows[0]);
  } catch (error) {
    console.error(err.message);
  }
});

//get all the tasks
App.get("/dashboard", async (req, res) => {
  try {
    const allTodos = await db.query("SELECT * FROM tasks");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a single task
App.get("/dashboard/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleTask = await db.query("SELECT * FROM tasks WHERE id = $1", [id]);

    res.json(singleTask.rows)
  } catch (err) {
    console.error(err.message);
  }
});

//delete a single task
App.delete("/dashboard/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await db.query("DELETE FROM tasks WHERE id = $1", [id]);

    res.json('to do was deleted')

  } catch (err) {
    console.error(err.message);
  }
});


//update a single task 
App.put("/dashboard/:id", async (req, res) => {
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
