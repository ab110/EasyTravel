db.flights.insertMany( [
    { "ID":1,"Name":"United","Price":534,"Time":"9:30PM","Link": "https://www.united.com/en/us"},
    {"ID": 2,"Name": "Delta","Price": 314,"Time": "3:41 PM","Link": "https://www.delta.com"},
    {"ID": 3,"Name": "Alaska Air","Price": 254,"Time": "10:15 AM","Link": "https://www.alaskaair.com"}
 ]);

 db.activities.insertMany( [
    {"ID": 1,"Name": "Axe Throwing","Price": 20,"Link": "https://www.rageaxethrowing.com/en/"}, 
    {"ID": 2,"Name": "Sushi","Price": 25,"Link": "http://mizusbg.com/sanjose/menusanjose/"}, 
    {"ID": 3,"Name": "Hiking","Price": "Free","Link": "https://www.alltrails.com/parks/us/california/almaden-quicksilver-county-park"}
 ]);

 db.hotels.insertMany( [
   {"ID": 1, "Name": "Marriott", "Price": 87, "Link": "https://www.marriott.com/default.mi"},
   {"ID": 2, "Name": "Four Seasons", "Price": 93, "Link": "https://www.fourseasons.com/"},
   {"ID": 3, "Name": "Hilton", "Price": 66, "Link": "https://www3.hilton.com/en/index.html?WT.mc_id=zLADA0WW1XX2PSH3DA4PPC5PPC6MULTIBR7"}
]);

db.profiles.insertMany( [
   {"First Name":"John", "Last Name":"Smith", "Location:": "New York"}
]);
