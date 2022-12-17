const buttomIncrease = document.querySelector('.plus-button')
const buttomDecrease = document.querySelector('.minus-button')
const valueQnt = document.querySelector('.show-amount')
let qnt = 0

buttomDecrease.addEventListener('click', () => {
    valueQnt.textContent = qnt <= 0 ? 0 : --qnt
})
buttomIncrease.addEventListener('click', () => {  
    ++qnt
    valueQnt.textContent = qnt
})
