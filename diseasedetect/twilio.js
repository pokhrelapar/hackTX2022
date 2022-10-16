const accountSid = 'MY-TWILIO-ACCOUNT-SID';
const authToken = 'MY-TWILIO-AUTH-TOKEN';
const client = require('twilio')(accountSid, authToken);
const my_number = 'MY-TWILIO-PHONE-NUMBER';


client.messages.create({body: 'x has been infected',
                        from: '',
                        to:'' }).then(message=> console.log(message.sid));