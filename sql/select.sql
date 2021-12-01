SELECT * FROM users;
SELECT * FROM chaves;
SELECT u.name,u.phone AS users, ch.valor AS chaves FROM users AS u, chaves AS ch WHERE ch.id_user = u.id