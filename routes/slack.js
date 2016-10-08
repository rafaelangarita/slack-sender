var WebClient = require('@slack/client').WebClient;
var conf = require('../conf/conf');

var token = conf.slacktoken;
var web = new WebClient(token);

/*

Messages look like this:

  {
     "channel": "test",
     "message": "Hello everybody!"
  }


*/

exports.sendMessage = function(req, res) {

    web.team.info(function teamInfoCb(err, info) {
        if (err) {
            console.log('Error:', err);
        } else {
            console.log('Team Info:', info);
        }

        web.chat.postMessage(
            req.body.channel,
            req.body.message, {
                username: 'AppCivist'
            },
            function(err, messageResponse) {
                console.log(err);
            }
        );
    });
    res.send('OK');
}
