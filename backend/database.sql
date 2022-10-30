CREATE DATABASE tips_database;

--\c into tips_database

CREATE TABLE tip(
	tip_id SERIAL PRIMARY KEY,
	description VARCHAR(255)
);