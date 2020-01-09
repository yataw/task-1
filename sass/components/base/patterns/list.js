/* Считаем, что не содержит внутренних аккордеонов.*/
document.addEventListener('click', ({target}) => {
    if (target.classList.contains('list__item')) {
        let accord = target.querySelector('.accordion');

        if (!accord.classList.contains('.accordion_open'))
            accord.classList.toggle('accordion_close');
    }
});
