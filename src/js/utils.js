let tab = 1

export let createElement = (tag, className = '', content = '') => {
    if (tag == undefined) return false
    let element = document.createElement(tag);
    element.className = className
    element.innerHTML = content;
    return element
}

export let setTab = (newTab) => {
    tab = newTab
}

export let getTab = () => tab;