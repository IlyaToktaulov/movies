export class View {
    constructor({
        dataToFirestore,
    }) {
        this.inputNode = document.querySelector('.js-input');
        this.btnNode = document.querySelector('.js-input-button');
        this.moviesListNode = document.querySelector('.js-movies-list');
        this.dataToFirestore = dataToFirestore;

        this.btnNode.addEventListener('click', this.addNewFilm);
    }

    render(films) {
        films.forEach(film => {
            this.renderNewFilm(film);
        });
    }

    renderNewFilm = (film) => {
        const div = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');

        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', film.id);
        input.setAttribute('class', 'circle-btn')

        input.onclick = () => {

        }

        label.innerText = film.title;
        label.setAttribute('for', film.id);
        label.setAttribute('class', 'movie-title');

        div.setAttribute('class', 'movie-wrapper');

        div.append(label, input);

        this.moviesListNode.append(div);
    }

    addNewFilm = () => {
        const film = {
            title: this.inputNode.value,
            done: false,
        }

        this.dataToFirestore(film);
    }
}