// upload.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import fs from "fs";

// ✅ তোমার Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDxhbHs27FrgBrt4Y3xrIH9y7LzInNQPRE",
  authDomain: "fabrics-prices-calculator.firebaseapp.com",
  projectId: "fabrics-prices-calculator",
  storageBucket: "fabrics-prices-calculator.firebasestorage.app", // ✅ ঠিক করা হয়েছে
  messagingSenderId: "1033086068899",
  appId: "1:1033086068899:web:d355dc099f96bc98a2b716"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ JSON ফাইল পড়া
const raw = JSON.parse(fs.readFileSync("fabrics-seed.json", "utf-8"));

// ✅ যদি JSON object হয়, তাহলে সেটাকে array বানানো
const fabrics = Array.isArray(raw) ? raw : Object.values(raw.fabrics || raw);

async function uploadData() {
  try {
    for (const fabric of fabrics) {
      await addDoc(collection(db, "fabrics"), fabric);
      console.log("✅ Added:", fabric.name);
    }
    console.log("🎉 All fabrics uploaded successfully!");
  } catch (error) {
    console.error("❌ Error uploading:", error);
  }
}

uploadData();
