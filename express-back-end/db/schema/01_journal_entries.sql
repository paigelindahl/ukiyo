DROP TABLE IF EXISTS journal_entries CASCADE;

CREATE TABLE journal_entries (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at DATE DEFAULT CURRENT_DATE,
  answer_one TEXT,
  answer_two TEXT,
  answer_three TEXT,
  result BOOLEAN NOT NULL
  );