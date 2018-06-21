UPDATE hoa
SET hoaname = $1, maintenancefee = $2, transferfee= $3, refinancefee = $4, resalecertfee = $5, otherfees = $6, mailingaddress = $7
WHERE id = $8
RETURNING *;