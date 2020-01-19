
function f(text) {
    var str = '';

    text.split(' + ').map(s => {
        str += `<div class="text__word text__word_width_${s}"></div>\n`;
    });

    return str.trim();
}

function g(text) {
    var classes = [];

    text.split(' ').map(s => {
        classes.push('.' + s);
    });

    return classes.join(', ') + ';';
}