import {koalas} from './koalas.js'
import { renderKoalaList } from './renderKoalas.js'
import { renderActiveKoala } from './renderActive.js'
import { activeKoala } from './index.js'
export let render = () => {
    let oldPage=  document.querySelector('.koala-container')
    let newPage;
    if(activeKoala){
        newPage = renderActiveKoala(activeKoala)
    } else {
        newPage = renderKoalaList(koalas)
    }
    newPage.classList.add('koala-container')
    oldPage.replaceWith(newPage)
}