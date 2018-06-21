const getHoaInfo = (req, res, next) => {
    // console.log(req.params);
    req.app
    .get("db")
    .HOA.getHOA(req.params.hoaname)
    .then(response => {res.status(200).json(response);
    }).catch(err => {res.status(500).json(err)});
};

const addHoaInfo = (req, res, next) => {
    const {hoaname, maintenancefee, transferfee, refinancefee, resalecertfee, otherfees, mailingaddress} = req.body;
    // console.log(req.body)
    req.app
    .get("db")
    .HOA.addHOA([hoaname, maintenancefee, transferfee, refinancefee, resalecertfee, otherfees, mailingaddress])
    .then(response => {res.status(200).json(response)
    }).catch(err => {console.log('err: ', err); res.status(500).json(err)});
};

const editHoaInfo = (req, res, next) => {
    const {hoaname, maintenancefee, transferfee, refinancefee, resalecertfee, otherfees, mailingaddress} = req.body;
    req.app
    .get("db")
    .HOA.editHOA([hoaname, maintenancefee, transferfee, refinancefee, resalecertfee, otherfees, mailingaddress, req.params.id])
    .then(response => {res.status(200).json(response)
    }).catch(err => {console.log('err: ', err); res.status(500).json(err)});
};

module.exports = {
    getHoaInfo,
    addHoaInfo,
    editHoaInfo
}