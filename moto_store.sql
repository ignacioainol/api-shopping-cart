CREATE TABLE products (
    id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    name text,
    price numeric,
	description TEXT
);