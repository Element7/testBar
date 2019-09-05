const bar = document.createElement('div');
const closure = document.createElement('div');
const wrapper = document.querySelector('.wrapper');
const displayBtn = document.querySelector('.displayBtn')
function Bar(obj) {
    if (!obj.myCustom) {
        obj.myCustom = {
            animate: true,
        }
    }
    closure.innerText = "X";
    closure.classList.add('closure')
    bar.innerHTML = obj.message + `<span class="bar__widgetBtn"}> Get widgets </span>`;
    bar.classList.add('bar');
    closure.classList.add('bar__closureBtn');
    wrapper.appendChild(bar);
    bar.appendChild(closure);

    if (typeof (obj) !== 'object' || typeof (obj.message) !== 'string' || typeof (obj.position) !== 'string') {
        return alert('Provided type of details is incorrect.')
    } else {
        if (obj.position === 'top') {
            bar.classList.add('bar__element--top-position')
        } else if (obj.position === 'bottom') {
            bar.classList.add('bar__element--bottom-position', 'bar__bottom-element--transform')
        }
    }

    const widgetBtn = document.querySelector('.bar__widgetBtn')

    if (obj.myCustom.animate === true) {
        bar.classList.add('bar__top-element--transform')
        widgetBtn.classList.add('bar__widgetBtn--transform')
    }

    this.handleWidget = function () {
        if (!obj.myCustom.background) {
            alert('hello world');
        }
        else if (obj.myCustom.animate) {
            bar.style.color = obj.myCustom.color;
            bar.style.backgroundColor = obj.myCustom.background;
        }
    }
    closure.addEventListener('click', this.handleClosureBtn)
    displayBtn.addEventListener('click', this.handleBtn)
    widgetBtn.addEventListener('click', this.handleWidget)
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

