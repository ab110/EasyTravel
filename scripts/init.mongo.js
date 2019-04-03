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
