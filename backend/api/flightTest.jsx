/////////////
// Imports //
var controller = require('../controllers/flightTest.jsx');

//////////
// Code //

////
// get
//
// Responding to a get request with a standard TODO message.
function get(req, res) {
  if (!req.body ){
    // This is the fail state.
    // If data is sent, then it continues on down.  Otherwise
    // it does not.
    res.status(400).json({
      internal_message: 'Client failed to display status',
      message: 'You must send data.',
      retry: false
    });
  return;
  }


  // Here is the controller.  It sends in the information.  If
  // it gets back an error, it sends back the errors status.
  // Otherwise, it sends back the 'a-okay' status, and then
  // approppiate list.
  controller.flightTest(
    (err, cond) => {
      if(err) {
        res.status(err.status).json(err);
      }
      else {
          res.status(200).json({
            message: "nice";
          });
      }
    }
    );

}

/////////////
// Exports //
module.exports.path = '/api/flghtTest';
module.exports.get = get;
