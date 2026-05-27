import { Model } from './model';
import { View } from './view';

export class Controller {
    constructor() {
        this.model = new Model({
            filmsFromFirestore: this.loadFilmsFromFirestore,
            newFilmFromFirestore: this.loadNewFilmFromFirestore
        });
        this.view = new View({
            dataToFirestore: this.loadDataToFirestore
        });
    }

    init() {
        this.model.readFilms();
    }

    loadDataToFirestore = (film) => {
        this.model.addFilm(film);
    }

    loadFilmsFromFirestore = (films) => {
        this.view.render(films);
    }

    loadNewFilmFromFirestore = (film) => {
        this.view.renderNewFilm(film);
    }
}