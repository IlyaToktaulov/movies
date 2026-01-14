const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-input-button');
const moviesListNode = document.querySelector('.js-movies-list');
const cicrleBtnNode = ('circle-btn');
const deliteBtnNode = ('movie-delite-btn');
const movieWrapperNode = ('movie-wrapper');

let moviesList = [];


const setMovie = (movie) => {
    moviesList.push(movie);
}

const clearInput = () => {
    inputNode.value = '';
}

const renderList = (moviesList) => {
    let movieCard = '';
    
    moviesList.forEach(element => {
        movieCard += `
            <div class="movie-wrapper">
                <div class="movie-wrapper-item">
                    <button class="circle-btn"></button>
                    <p class="movie-title">${element}</p>
                </div>
                <button class="movie-delite-btn"></button>
            </div>
        `;
    });

    moviesListNode.innerHTML = movieCard;
}



const addBtnHandler = () => {
    // 1. Получаем значение из поля ввода
    const inputNodeValue = inputNode.value;

    if (!inputNodeValue) {
        return;
    }

    // 2. Запись значения в память
    setMovie(inputNodeValue);

    // 3. Сброс значения поля ввода
    clearInput();

    // 4. Рендер списка
    renderList(moviesList);

}

btnNode.addEventListener('click', addBtnHandler);
