var mongoose = require("./connection");

var UserEvent = mongoose.model("UserEvent")

var seedData = [
  {
    "postal_code": "20052",
    "title": "Bono Goes Solo: Live",
    "venue_address": "1234 Cool St",
    "description": "U2 is Sad. Bono's gettin' rich. Come check it out.",
    "url": "http://www.google.com"
  },
  {
    "postal_code": "20002",
    "title": "Barney and Friends learn to Clean",
    "venue_address": "8476 Purple Ave",
    "description": "Your fave purple dinosaur teaches your kids how to clean the house",
    "url": "http://www.barney.com"
  },
  {
    "postal_code": "20004",
    "title": "Washington Mystics v. Phoenix Stars",
    "venue_address": "12 Blue St",
    "description": "WNBA Action",
    "url": "http://www.wnba.com"
  }
]

UserEvent.remove({}).then(function(){
  UserEvent.collection.insert(seedData).then(function(){
    process.exit();
  })
})
