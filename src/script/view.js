export class View {
    constructor() {
        this.inputNode = document.querySelector('.js-input');
        this.btnNode = document.querySelector('.js-input-button');
        this.moviesListNode = document.querySelector('.js-movies-list');
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

        input.onclick = () => {

        }

        label.innerText = film.title;
        label.setAttribute('for', film.id);

        div.setAttribute('class', 'movie-wrapper');

        div.append(label, input);

        this.moviesListNode.append(div);
    }
}