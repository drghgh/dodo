import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXVfxW_k8uBTg7NKCoMoPXPZXe2Mouptw",
  authDomain: "dodo-8dbb2.firebaseapp.com",
  projectId: "dodo-8dbb2",
  storageBucket: "dodo-8dbb2.firebasestorage.app",
  messagingSenderId: "403780518467",
  appId: "1:403780518467:web:c359bd55f75b03f2b08af6",
  measurementId: "G-V63YP0NVDK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
