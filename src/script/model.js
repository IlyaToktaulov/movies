import { initializeApp } from "firebase/app";
import { FIREBASE_CONFIG } from './firebase';
import { 
    getFirestore,
    collection, 
    setDoc,

 } from "firebase/firestore";

export class Model {
    constructor() {
        const app = initializeApp(FIREBASE_CONFIG);
        this.db = getFirestore(app);
        this.films = [];
    }

    addFilm = async() => {
        try {
            await setDoc(collection(this.db, "films"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}