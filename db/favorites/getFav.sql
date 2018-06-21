SELECT * FROM favorites
INNER JOIN hoa ON favorites.favorites = hoa.id
WHERE favorites.users = $1;