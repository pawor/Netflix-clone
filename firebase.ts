import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { initializeApp, getApp, getApps } from "firebase/app"


const firebaseConfig = {
  apiKey: "AIzaSyAvSF9smeMNY5nnOD2Z2pmdZ1cqsECnj0A",
  authDomain: "netflix-clone-7e5e7.firebaseapp.com",
  databaseURL: "",
  projectId: "netflix-clone-7e5e7",
  storageBucket: "netflix-clone-7e5e7.appspot.com",
  messagingSenderId: "813446432223",
  appId: "1:813446432223:web:3e0ee4d1163375f61ef06a"
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }