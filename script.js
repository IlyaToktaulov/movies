const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-input-button');
const moviesListNode = document.querySelector('.js-movies-list');

let moviesList = [];

const addBtnHandler = () => {
    // 1. Получаем значение из поля ввода
    const inputNodeValue = inputNode.value;

    if (!inputNodeValue) {
        return;
    }

    // 2. Запись значения в память
    moviesList.push(inputNodeValue);
    console.log(moviesList);

    // 3. Сброс значения поля ввода
    inputNode.value = '';

    // 4. Рендер списка
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

btnNode.addEventListener('click', addBtnHandler);