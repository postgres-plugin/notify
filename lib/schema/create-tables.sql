-- Create table
CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  type VARCHAR(100) NOT NULL,
  people_id INTEGER REFERENCES people (id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS tags_organisations (
 event_id INTEGER REFERENCES events (id),
 people_id INTEGER REFERENCES people (id),
 read BOOLEAN NOT NULL,
 read_at TIMESTAMP
);
