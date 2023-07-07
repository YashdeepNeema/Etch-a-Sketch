const container = document.querySelector('#container');

const GRID = 32;
for(let i = 0; i < GRID; ++i){
    const inner_div = document.createElement('div')
    for(let j = 0; j < GRID; ++j){
        const inner_most_div = document.createElement('div')
        inner_most_div.classList.add('pixel')
        inner_most_div.setAttribute('id', `${i}-${j}`)
        inner_div.appendChild(inner_most_div)
    }
    container.appendChild(inner_div)
}


    const pxl = document.querySelectorAll('.pixel')

    pxl.forEach((px) => {
        px.addEventListener('mouseover', ()=>{
            let currentPxl = document.getElementById(px.id);
            currentPxl.setAttribute('style', 'background: black;');
        })
    })



    