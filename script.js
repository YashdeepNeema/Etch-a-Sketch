var gridBtn = document.getElementById("grid-btn");




function gridCreate(){
    gridVal = parseInt(prompt("Nos. of squares per line:"))
    makeGrid(gridVal);
    return 1
}
let flagGrid = 0;
gridBtn.addEventListener("click", function(){
    //let gridVal = 0;
    if (flagGrid == 1) {
        document.getElementById('container').innerHTML = ''
        gridCreate()
    }
    else {
        flagGrid = gridCreate()
    }
});




function makeGrid(gridVal){
    const container = document.querySelector('#container');

    let grid = gridVal;
    for(let i = 0; i < grid; ++i){
        const inner_div = document.createElement('div')
        for(let j = 0; j < grid; ++j){
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
}


    