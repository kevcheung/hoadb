require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');

const { getUser, strat, logout } = require(`${__dirname}/controllers/authCtrl`);

const { getHoaInfo, addHoaInfo, editHoaInfo } = require(`${__dirname}/controllers/hoaCtrl`);

const { getFavInfo, addFavInfo, deleteFavInfo } = require(`${__dirname}/controllers/favoriteCtrl`);

const { getComments, addComments, editComments, deleteComments } = require(`${__dirname}/controllers/commentsCtrl`);

const port = process.env.PORT || 3001;

const path = require('path');

const app = express();

massive(process.env.CONNECTION_STRING)
    .then(db => app.set('db', db))
    .catch(console.log);

app.use(json());
app.use(cors());
app.use( express.static( `${__dirname}/../build` ) );

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000000
        }
    })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

passport.serializeUser((user, done) => {
    const db = app.get('db');
    db.user.getUserByAuthid([user.id])
      .then(response => {
        if(!response[0]){
    db.user.addUserByAuthid([user.displayName, user.id])
      .then(res => done(null, res[0]))
      .catch(console.log);
        }else return done (null, response[0]);
    })
    .catch(console.log);
});
passport.deserializeUser((user, done) => done(null, user));

app.get('/login', passport.authenticate('auth0', {
    // successRedirect: 'http://localhost:3000/landing',//Conditional rendering for logging in
    // failureRedirect: 'http://localhost:3000/'
    successRedirect: '/landing',
    failureRedirect: '/'
    })
);
//requests for users
app.get('/api/me', getUser);
app.get('/logout', logout);

//requests for HOAs
app.get('/api/getHoa/:hoaname', getHoaInfo)
app.post('/api/addHoa', addHoaInfo)
app.put('/api/editHoa/:id', editHoaInfo)

//request for Favorites
app.get('/api/getFav/:id', getFavInfo)
app.post('/api/addFav', addFavInfo)
app.delete('/api/deleteFav/:id', deleteFavInfo)

//request for Comments
app.get('/api/getComments/:hoaid', getComments)
app.post('/api/addComments', addComments)
app.put('/api/editComments/:id', editComments)
app.delete('/api/deleteComments/:comments', deleteComments)

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
    console.log(`${port}, I READ YOU`);
});