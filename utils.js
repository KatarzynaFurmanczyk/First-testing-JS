function addCssClass(element, classToAdd) {
    const classes = new Set(element.className.split(' '));

    classes.delete('');
    classes.add(classToAdd);

  element.className = [...classes].join(' ');
}

function removeCssClass(element, classToRemove){
    const classes = new Set(element.className.split(' '));

    classes.delete('');
    classes.delete(classToRemove);

    element.className = [...classes].join(' ');
}

module.exports = { addCssClass, removeCssClass };