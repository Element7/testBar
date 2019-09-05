function Bar(obj) {
    const bar = document.createElement('div');
    const closure = document.createElement('div');
    const wrapper = document.querySelector('.wrapper');
    const displayBtn = document.querySelector('.displayBtn')
    closure.innerText = "X";
    bar.innerHTML = obj.message + `<button class="bar__widgetBtn bar__widgetBtn--transform"}> Get widgets </button>`;
    bar.classList.add('bar');
    closure.classList.add('bar__closureBtn');
    wrapper.appendChild(bar);
    bar.appendChild(closure);

    if (typeof (obj) !== 'object' || typeof (obj.message) !== 'string' || typeof (obj.position) !== 'string') {
        return alert('Provided type of details is incorrect.')
    } else {
        if (obj.position === 'top') {
            bar.classList.add('bar__element--top-position', 'bar__top-element--transform')
        } else if (obj.position === 'bottom') {
            bar.classList.add('bar__element--bottom-position', 'bar__bottom-element--transform')
        }
    }


    closure.addEventListener('click', this.handleClosureBtn)
    displayBtn.addEventListener('click', this.handleBtn)
}



Bar.prototype.handleBtn = function () {
    const bar = document.querySelector('.bar');
    const widgetBtn = document.querySelector('.bar__widgetBtn');
    bar.classList.toggle('bar__element--visible');
    bar.classList.toggle('bar__element--animation');
    widgetBtn.classList.toggle('bar__widgetBtn--animation')
}

Bar.prototype.handleClosureBtn = function () {
    const bar = document.querySelector('.bar');
    const widgetBtn = document.querySelector('.bar__widgetBtn');
    widgetBtn.classList.remove('bar__widgetBtn--animation');
    bar.classList.remove('bar__element--visible', 'bar__element--animation');
}


