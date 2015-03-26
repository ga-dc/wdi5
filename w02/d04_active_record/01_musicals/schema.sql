-- # Create a new database
-- # sandbox

-- # Create a table called musicals
-- # id
-- # title
-- # year
-- # composer
-- # lyricist

CREATE TABLE musicals (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  year INTEGER NOT NULL,
  composer VARCHAR(100) NOT NULL,
  lyricist VARCHAR(100) NOT NULL
);