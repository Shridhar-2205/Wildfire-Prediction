const accountSid = 'AC2f3d7b0c658eb3c1c21bdb810974b364';
const authToken = 'b9f028b01e9b7b868f061bc7a5c4c389';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'Fire aayu bhago',
         from: '+14437477048',
         statusCallback: 'http://postb.in/1234abcd',
         to: '+1669-278-4640'
       })
      .then(message => console.log(message.sid));
	