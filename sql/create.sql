
CREATE TABLE users(
id serial PRIMARY KEY,
name VARCHAR NOT NULL,
phone VARCHAR NOT NULL
)

CREATE TABLE chaves(
id serial PRIMARY KEY,
valor VARCHAR UNIQUE NOT NULL,
id_user INTEGER NOT NULL,
FOREIGN KEY (id_user) REFERENCES users (id)
);

CREATE TABLE transacao(
id serial PRIMARY KEY,
valor_real REAL UNIQUE NOT NULL,
id_user_origen INTEGER NOT NULL,
id_user_destiny INTEGER NOT NULL,
FOREIGN KEY (id_user_origen) REFERENCES users (id),
FOREIGN KEY (id_user_destiny) REFERENCES users (id)
);