var admin = require("firebase-admin");

var serviceAccount = require("/firebase-keys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});