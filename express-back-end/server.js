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
  console.log("are you hitting this?");

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
    const pendingTodos = await db.query(
      "SELECT * FROM tasks WHERE completed = false"
    );
    console.log("pendingTodos :", pendingTodos.rows);

    res.json(pendingTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get all complete tasks
App.get("/taskscompleted", async (req, res) => {
  try {
    const completedTodos = await db.query(
      "SELECT * FROM tasks WHERE completed = true"
    );
    // console.log("completedTodos :", completedTodos.rows);

    res.json(completedTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a single task
App.get("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleTask = await db.query("SELECT * FROM tasks WHERE id = $1", [
      id,
    ]);

    res.json(singleTask.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a single task
App.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await db.query("DELETE FROM tasks WHERE id = $1", [id]);

    res.json("to do was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

//update a single task
App.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;
    const updateTask = await db.query(
      "UPDATE tasks SET task = $1 WHERE id = $2",
      [task, id]
    );

    res.json("it was update");
  } catch (err) {
    console.error(err.message);
  }
});

//update a single task to completed from incomplete
App.put("/taskscompleted/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateTask = await db.query(
      "UPDATE tasks SET completed = true WHERE id = $1",
      [id]
    );

    res.json("it was changed to completed");
  } catch (err) {
    console.error(err.message);
  }
});

//ADD YOGA YOUTUBE VIA FAVORITE BUTTON

App.put("/yoga/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newFavourite = await db.query(
      "UPDATE workouts SET is_favourited = true WHERE id = $1",
      [id]
    );
    res.json("updated to favourites");
  } catch (error) {
    console.error(error.message);
  }
});

//ADD MEDITATE SPOTIFY VIA FAVORITE BUTTON

App.put("/meditate/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newFavourite = await db.query(
      "UPDATE meditations SET is_favourited = true WHERE id = $1",
      [id]
    );
    res.json("updated to favourites");
  } catch (error) {
    console.error(error.message);
  }
});

//ADD JOURNAL-SAAD ENTRY VIA SUBMIT ARROW

App.post("/journal1", async (req, res) => {
  const { answerOne, answerTwo, answerThree } = req.body;
  try {
    const sadAnswer = await db.query(
      "INSERT INTO journal_entries(user_id, answer_one, answer_two, answer_three, result) VALUES(1, $1, $2, $3, false) RETURNING *",
      [answerOne, answerTwo, answerThree]
    );
    res.json({});
  } catch (error) {
    console.error(error.message);
  }
});

// ADD JOURNAL-HAPPY ENTRY VIA SUBMIT ARROW
App.post("/journal2", async (req, res) => {
  const { answerOne, answerTwo, answerThree } = req.body;
  try {
    const sadAnswer = await db.query(
      "INSERT INTO journal_entries(user_id, answer_one, answer_two, answer_three, result) VALUES(1, $1, $2, $3, true) RETURNING *",
      [answerOne, answerTwo, answerThree]
    );
    res.json({})
  } catch (error) {
    console.log(error.message)
  }
});


//get journal entries by day
App.get("/journalentries/:selectedDate", async (req, res) => {
  try {
    const { selectedDate } = req.params;
    const singleJournalEntry = await db.query(`SELECT * FROM journal_entries WHERE created_at= '2020-11-${selectedDate}'`);

    res.json(singleJournalEntry.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get all the Yoga 
App.get("/yoga", async (req, res) => {
  try {
    const allYogaLinks = await db.query("SELECT * FROM workouts");
    res.json(allYogaLinks.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//get all the Meditations 
App.get("/meditate", async (req, res) => {
  try {
    const allMeditationLinks = await db.query("SELECT * FROM meditations");
    res.json(allMeditationLinks.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//get all favourite Meditations
App.get("/favmeditation", async (req, res) => {
  try {
    const favMeditationLinks = await db.query("SELECT * FROM meditations WHERE is_favourited = true");
    res.json(favMeditationLinks.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//get all favourite Yoga

App.get("/favyoga", async (req, res) => {
  try {
    const favYogaLinks = await db.query("SELECT * FROM workouts WHERE is_favourited = true");
    res.json(favYogaLinks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get all favourite Quotes

App.get("/favquotes", async (req, res) => {
  try {
    const favQuotesLinks = await db.query("SELECT * FROM quotes WHERE is_favourited = true");
    res.json(favQuotesLinks.rows);
  } catch (err) {
    console.error(err.message);
  }
});
