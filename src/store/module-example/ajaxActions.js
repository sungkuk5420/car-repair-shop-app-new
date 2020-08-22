import firebase from "firebase";
export const ajaxActions = {
  writeUserData(user) {
    firebase.database().ref('users/' + user.uid).set(user).catch(error => {
      console.log(error.message)
    });
  },
  getUserData(userId, cb) {
    firebase.database().ref('users/' + userId).once("value", snap => {
      console.log("getUserData")
      const user = snap.val()
      cb(user);
    }).catch(error => {
      console.log(error.message)
    });
  }
};
