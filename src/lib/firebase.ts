// import 'firebase/messaging';

// import firebase from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyDXTh_hwXt_106dh6_b8LAqnhNhr1qc4WI",
//   authDomain: "pesu-task.firebaseapp.com",
//   projectId: "pesu-task",
//   storageBucket: "pesu-task.appspot.com",
//   messagingSenderId: "1053639869457",
//   appId: "1:1053639869457:web:9c80ac59d64e35f5d05db0",
//   measurementId: "G-8JD2Q36732",
// };

// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// export const requestPermission = async () => {
//   try {
//     await messaging.requestPermission();
//     const token = await messaging.getToken();
//     console.log("Token:", token);
//     return token;
//   } catch (error) {
//     console.error("Permission denied", error);
//     return null;
//   }
// };

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     messaging.onMessage((payload) => {
//       resolve(payload);
//     });
//   });
