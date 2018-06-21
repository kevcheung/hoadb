UPDATE comments
SET comments = $1
WHERE commentsid = $2
RETURNING *;