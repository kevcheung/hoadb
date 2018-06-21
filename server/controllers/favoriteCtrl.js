const getFavInfo = (req, res, next) => {
    // console.log(req.params);
    req.app
    .get("db")
    .favorites.getFav(req.params.id)
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};

const addFavInfo = (req, res, next) => {
    // console.log(req.body)
    req.app
    .get("db")
    .favorites.addFav([req.body.userid, req.body.hoaid])
    .then(response => res.status(200).json(response))
    .catch(err => {console.log('err: ', err); res.status(500).json(err)});
};

const deleteFavInfo = (req, res, next) => {
    // console.log(req.params.id)
    req.app
    .get("db")
    .favorites.deleteFav(req.params.id)
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
  };

module.exports = {
    getFavInfo,
    addFavInfo,
    deleteFavInfo
}