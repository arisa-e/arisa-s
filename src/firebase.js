import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCQ0zIMDJc9-fTDt5FxD_wIcg1EOzyZp64",
  authDomain: "auth-dev-4f69a.firebaseapp.com",
  projectId: "auth-dev-4f69a",
  storageBucket: "auth-dev-4f69a.appspot.com",
  messagingSenderId: "1022105048759",
  appId: "1:1022105048759:web:7a7f701c9d6ef8f198df32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default  app;