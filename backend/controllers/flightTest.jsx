//////////
// Code //

function flightTest(){


  }).then((cond) => {

    // In the event that there is nothing in the cond...
    if (cond === null) {
      // ...then send back an error message.  This is the err
      // out of err, cond.
      callback({
        status: 400,
        internal_message: `Could not find the specificed condition with deviceID = ${device_id}, cond_id = ${cond_id}`,
        message: 'Could not find the specified condition.',
        retry: false
      }, null)
      // And then exit out of this function.
      return;
    }
    // However, if cond does not equal null, send back null for
    // err and the cond for the, well, cond!
    callback(null, cond);

    // In the event that something WEIRD happens, this should catch
    // the error and send it back.
  }).catch((err) => {
    callback({
      status: 500,
      internal_message: `Failed to find condition with error '${err}'`,
      message: 'Encounted an error with finding the condition.',
      retry: false
    }, null);
  })
}

////////
// Exports //
module.exports.flightTest = flightTest;
