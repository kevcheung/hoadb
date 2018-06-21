const getComments = (req, res, next) => {
    // console.log(req.params);
    req.app
    .get("db")
    .comments.getComments(req.params.hoaid)
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};

const addComments = (req, res, next) => {
    // console.log(req.body)
    req.app
    .get("db")
    .comments.addComments([req.body.comments, req.body.userid, req.body.hoaid])
    .then(response => res.status(200).json(response))
    .catch(err => {console.log('err: ', err); res.status(500).json(err)});
};

const editComments = (req, res, next) => {
    console.log(req.body)
    req.app
    .get("db")
    .comments.editComments([req.body.comments, req.params.id])
    .then(response => {res.status(200).json(response)
    }).catch(err => {console.log('err: ', err); res.status(500).json(err)});
};

const deleteComments = (req, res, next) => {
    // console.log(req.params.id)
    req.app
    .get("db")
    .comments.deleteComments(req.params.comments)
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
  };

module.exports = {
    getComments,
    addComments,
    editComments,
    deleteComments
}