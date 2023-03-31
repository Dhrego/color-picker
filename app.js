let color = document.querySelector('#button');
let input = document.querySelector('#input');
let randomize = document.querySelector('#randomize');


color.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.style.backgroundColor = `${input.value}`
})

let makeRand = () => {
    return Math.floor(Math.random() * 255) + 1;
}
randomize.addEventListener('click', () => {
    document.body.style.backgroundColor = `rgb(${makeRand()}, ${makeRand()},${makeRand()})`
})
