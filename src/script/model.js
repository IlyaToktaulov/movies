import { initializeApp } from "firebase/app";
import { FIREBASE_CONFIG } from './firebase';
import { 
    getFirestore,
    collection, 
    setDoc,
    getDocs,
    doc
 } from "firebase/firestore";

export class Model {
    constructor({
        newFilmFromFirestore,
        filmsFromFirestore
    }) {
        const app = initializeApp(FIREBASE_CONFIG);
        this.db = getFirestore(app);
        this.filmsFromFirestore = filmsFromFirestore;
        this.newFilmFromFirestore = newFilmFromFirestore;
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

        this.filmsFromFirestore(this.films);
    }

    addFilm = async(film) => {
        try {
            const id = crypto.randomUUID();
            await setDoc(doc(this.db, "films", id), {
                title: film.title,
                done: film.done,
                id: id
            });

            this.films.push({
                title: film.title,
                done: film.done,
                id: id
            })

            this.newFilmFromFirestore(film);
            console.log("Добавлен фильм ID: ", id);
        } catch (e) {
            console.error("Что-то пошло не так: ", e);
        }
    }
}