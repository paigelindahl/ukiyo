const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);


const PORT = 8080;

// Express Configuration
// App.use('/api/users', usersRouter(dbHelpers));
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));


// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

App.post("/dashboard", async (req, res) => {

  const {task, task_title, created_at, completed, user_id} = req.body;
  console.log(typeof user_id)



  try {
    const newTodo = await db.query("INSERT INTO tasks(task, task_title, created_at, completed, user_id) VALUES($1, $2, $3, $4, $5) RETURNING *", [task, task_title, created_at, completed, user_id])
    console.log('this is ressend', newTodo.rows)
  } catch (error) {
    console.error(err.message)
  }
})

App.get('/dashboard', async (req, res) => {
  try {
    const allTodos = await db.query("SELECT * FROM tasks");
    res.json(allTodos.rows)
  } catch (err) {
    console.error(err.message)
  }

})