const tabLVL = document.querySelector('.header__timer-extra');
let tezlik = 20
let speed = 100
let tez = 300

function lvl(i = 0) {
    tabLVL.innerHTML = i
    i++
    if (i <= 80) {
        setTimeout(() => {
            lvl(i)
        }, tezlik);
    }else if (i <= 95) {
        setTimeout(() => {
            lvl(i)
        }, speed);
    }else if (i <= 100) {
        setTimeout(() => {
            lvl(i)
        }, tez);
    }
}
lvl()
