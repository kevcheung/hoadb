SELECT * FROM comments
INNER JOIN hoa ON comments.hoaid = hoa.id
INNER JOIN users ON comments.userid = users.id
WHERE comments.hoaid = $1;