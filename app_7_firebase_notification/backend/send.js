const { credential } = require("firebase-admin");
var admin = require("firebase-admin");
var serviceAccount = require("./fcmdemo-89ec1-firebase-adminsdk-vgv4a-9e3ad91fdc.json");

admin.initializeApp({
  credential: credential.cert(serviceAccount),
});

var registrationToken =
  " cOVh9EftQS8KthZVJOHnJS:APA91bEontU46lcQgZAYXcUbQVM4vG4S2G-Gn5f9TQ5gZqhhIoY1FZ5FEvmYsvnjif50IujLbd8WpCBgHkMKOQ1bXo7xwLkOq-WKEFItg_PeZfAFWOoxsoPoGboOc2c1bCwRgiAi08q7";

var payload = {
  notification: {
    title: "First Notification",
    body: "This is the body part of notification.",
  },
};

admin
  .messaging()
  .sendToDevice(registrationToken, payload)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
