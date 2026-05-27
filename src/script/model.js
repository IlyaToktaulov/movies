import { initializeApp } from "firebase/app";
import { FIREBASE_CONFIG } from './firebase';
import { 
    getFirestore,
    collection, 
    setDoc,
    getDocs,
 } from "firebase/firestore";

export class Model {
    constructor() {
        const app = initializeApp(FIREBASE_CONFIG);
        this.db = getFirestore(app);
        this.films = [];
    }

    readFilms = async() => {
        const dataFirebase = await getDocs(collection(this.db, "films"));
        dataFirebase.forEach((doc) => {
            this.films.push({
                title: doc.data().title,
                done: doc.data().done,
                id: doc.id
            })
        });
    }

    addFilm = async(film) => {
        try {
            const id = crypto.randomUUID();
            await setDoc(collection(this.db, "films", id), {
                title: film.title,
                done: film.done,
                id: id
            });
            console.log("Document written with ID: ", id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}