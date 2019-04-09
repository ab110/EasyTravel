const Flight = require('../controllers/FlightController');
const Message = require('../controllers/MessageController');

module.exports = api => {
	api.route('/flightTest').get(Flight.get);
	api.route('/message').get(Message.get);
	api.route('/message').post(Message.post);
};
