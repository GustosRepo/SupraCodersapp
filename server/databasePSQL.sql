CREATE DATABASE inventoryapp;

CREATE TABLE app_user (
    id serial PRIMARY KEY,
    first_name CHAR (50) NOT NULL,
    last_name CHAR (50) NOT NULL,
    username CHAR (50) NOT NULL,
    password VARCHAR (50) NOT NULL
    );

CREATE TABLE item (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES app_user(id),
    item_name CHAR (50) NOT NULL,
    item_description CHAR (255),
    item_quantity INTEGER NOT NULL
    );

ALTER TABLE app_user 
DROP COLUMN description;

DROP TABLE app_user [CASCADE | RESTRICT];