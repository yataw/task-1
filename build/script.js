
const handlerMap = {
    'e-accordion__short': accordionHandler,
    'onoffswitch': themeHandler
};

window.onload = function() {
    document.body.addEventListener('click', ({target}) => {
        target.classList.forEach(className => {
            const handler = handlerMap[className];

            if (handler)
                return handler(target);
        })
    })
};


// handlers

function accordionHandler(element) {
    const more = element.parentElement.querySelector('.e-accordion__more');

    more.classList.toggle('e-accordion__more_view_opened');
}

function themeHandler(element) {
    let parent = element.parentElement;

    while (!parent.classList.contains('theme'))
        parent = parent.parentElement;

    parent.classList.toggle('theme_color_project-default');
    parent.classList.toggle('theme_color_project-inverse');

    element.classList.toggle('onoffswitch_checked');
}
