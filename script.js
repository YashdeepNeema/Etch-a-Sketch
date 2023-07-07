const container = document.querySelector('#container');

const GRID = 16;
for(let i = 0; i < GRID; ++i){
    const inner_div = document.createElement('div')
    for(let j = 0; j < GRID; ++j){
        const inner_most_div = document.createElement('div')
        inner_div.appendChild(inner_most_div)
    }
    container.appendChild(inner_div)
}