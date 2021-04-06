const { credential } = require("firebase-admin");
var admin = require("firebase-admin");
var serviceAccount = require("./fcmdemo-89ec1-firebase-adminsdk-vgv4a-9e3ad91fdc.json");
var registrationToken = require("./token.json");

admin.initializeApp({
  credential: credential.cert(serviceAccount),
});

var payload = {
  notification: {
    title: "First Notification",
    body: "This is the body part of notification.",
  },
};

admin
  .messaging()
  .sendToDevice(
    registrationToken["registration-token"].map((item) => item.token),
    payload
  )
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
