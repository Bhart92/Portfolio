const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      nodemailer = require("nodemailer"),
      flash = require('connect-flash'),
      mongoose = require('mongoose');
      require("dotenv").config();

let port = process.env.PORT || 3000;

// config
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(flash());
app.use(require("express-session")({
  secret: "hartwebdev",
  resave: false,
  saveUninitialized: false
}));

// config
app.use(function(req, res, next){
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

app.get('/', function(req, res){
  res.render('landing');
});
app.get('/portfolio', function(req, res){
  res.render('portfolio');
});
app.get('/contact', function(req, res){
  res.render('contact');
});
app.get('/resume', function(req, res){
  res.render('resume');
});
app.post('/', function (req, res) {
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'hartwebdev92@gmail.com',
      pass: process.env.GMAILPW
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: 'hartwebdev92@gmail.com',
    subject: 'New message from hartwebdev.com',
    text:`${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      req.flash("error", error.responseCode + ", Something went wrong. Please try again!");
      res.redirect('/');
    }
    else {
      req.flash("success", "Message sent! I'll get back to you as soon as possible.");
      res.redirect('/');
    }
  });
});
app.get("*", function(req, res){
  res.redirect("/");
});

app.listen(port, function(){
  console.log('live');
});
