const Flight = require('../controllers/FlightController');

module.exports = api => {
	api.route('/flightTest').get(Flight.list);
};