DROP TABLE IF EXISTS meditations CASCADE;

CREATE TABLE meditations (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  link TEXT NOT NULL,
  title VARCHAR (255) NOT NULL,
  is_favourited BOOLEAN DEFAULT FALSE
);