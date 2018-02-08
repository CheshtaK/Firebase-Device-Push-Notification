'use strict'

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.sendNotification = functions.database.ref('/notifications/{user_id}/{notification_id}').onWrite(event => {

  const user_id = event.params.user_id;
  const notification_id = event.params.notification_id; 

  console.log('We have a notification from : ', user_id);

  if(!event.data.val()){

  return console.log('A Notification has been deleted from the database : ', notification_id);

}

const payload = {
      notification: {
        title : "New Friend Request",
        body: `Your friend has sent you request`,
        icon: "default",
      };

return admin.messaging().sendToDevice(token_id, payload).then(response => {

              console.log('This was the notification Feature');

            });

});
