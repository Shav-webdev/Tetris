const wrapper = document.getElementById("wrapper");

window.onload = function () {
    createTetrisSection();
};

function createTetrisSection() {
    const cellsBlock = document.createElement("div");
    cellsBlock.setAttribute("id", "cells-block");

    wrapper.appendChild(cellsBlock);
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = document.createElement("div");
            cell.setAttribute("class", `cell x-${j} y-${i}`);
            cellsBlock.appendChild(cell);
        }
    }
}

const itemsArr = [
    [
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0]
    ],
    [
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1]
    ],
    [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],
    [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 0]
    ]

    // [
    //     [1, 1, 1, 1],
    //     [0, 0, 0, 0],
    //     [0, 0, 0, 0],
    //     [0, 0, 0, 0]
    // ]
];

const xCount = 10;
const yCount = 20;

let initialX = 4;
let initialY = 0;

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", generateRandomItem);

let currentItem;

function generateRandomItem() {
    currentItem = itemsArr[Math.floor(Math.random() * (itemsArr.length))];
    drawItem(currentItem);
}


/*document.body.addEventListener('keydown', handleKeyDown);

function handleKeyDown(e) {
    switch (e.which) {
        case 37:
            // moveLeft();
            break;
        case 38:
            // rotate();
            break;
        case 39:
            // moveRight();
            break;
        case 40:
          //  moveItemDown();
            break;
        default:
            break;
    }
}*/

function drawItem(item = currentItem) {
    //console.log(item)
    let currentPosition = [];
    for (let i = 0; i < item.length; i++) {
        let currentSubPosition = [];
        currentSubPosition.push(
            document.querySelector(`.x-${initialX}.y-${initialY + i}`),
            document.querySelector(`.x-${initialX + 1}.y-${initialY + i}`),
            document.querySelector(`.x-${initialX + 2}.y-${initialY + i}`)
        );
        currentPosition.push(currentSubPosition);
    }
    for (let i = 0; i < item.length; i++) {
        for (let j = 0; j < item[i].length; j++) {
            if (item[i][j]  && !currentPosition[i][j].classList.contains("active")) {
                currentPosition[i][j].classList.add("active");
            }
        }
    }
    console.log(currentPosition);
  //  moveItemDown(currentPosition);
}



function moveItemDown(item) {
    let currentElemClassListArr = [];

    let xPositionOfElem1;
    let yPositionOfElem1;

    let xPositionOfElem2;
    let yPositionOfElem2;

    let xPositionOfElem3;
    let yPositionOfElem3;

    let xPositionOfElem4;
    let yPositionOfElem4;

    let xPos1;
    let yPos1;

    let xPos2;
    let yPos2;

    let xPos3;
    let yPos3;

    let xPos4;
    let yPos4;

    let box1;
    let box2;
    let box3;
    let box4;

    let boxesArr = [];
    let nextBox1;
    let nextBox2;
    let nextBox3;
    let nextBox4;
    for (let i = 0; i < item.length; i++) {
        for (let j = 0; j < item[i].length; j++) {
            if (item[i][j] && item[i][j].classList.contains("active")){
                currentElemClassListArr.push(item[i][j]);
            }
        }
    }

        xPositionOfElem1 = currentElemClassListArr[0].classList[1];
        yPositionOfElem1 = currentElemClassListArr[0].classList[2];

        xPos1 = +xPositionOfElem1[xPositionOfElem1.length - 1];
        yPos1 = +yPositionOfElem1[yPositionOfElem1.length - 1];

        xPositionOfElem2 = currentElemClassListArr[1].classList[1];
        yPositionOfElem2 = currentElemClassListArr[1].classList[2];

        xPos2 = +xPositionOfElem2[xPositionOfElem2.length - 1];
        yPos2 = +yPositionOfElem2[yPositionOfElem2.length - 1];

        xPositionOfElem3 = currentElemClassListArr[2].classList[1];
        yPositionOfElem3 = currentElemClassListArr[2].classList[2];

        xPos3 = +xPositionOfElem3[xPositionOfElem3.length - 1];
        yPos3 = +yPositionOfElem3[yPositionOfElem3.length - 1];

        xPositionOfElem4 = currentElemClassListArr[3].classList[1];
        yPositionOfElem4 = currentElemClassListArr[3].classList[2];

        xPos4 = +xPositionOfElem4[xPositionOfElem4.length - 1];
        yPos4 = +yPositionOfElem4[yPositionOfElem4.length - 1];


        box1 = document.querySelector(`.x-${xPos1}.y-${yPos1}`);
        box2 = document.querySelector(`.x-${xPos2}.y-${yPos2}`);
        box3 = document.querySelector(`.x-${xPos3}.y-${yPos3}`);
        box4 = document.querySelector(`.x-${xPos4}.y-${yPos4}`);
        boxesArr.push(box1, box2, box3, box4);
        //console.log(xPos, yPos, box);
         console.log("box1: ", box1);
         console.log("box2: ", box2);
         console.log("box3: ", box3);
         console.log("box4: ", box4);

         setInterval(() => {
             nextBox1 = document.querySelector(`.x-${xPos1}.y-${yPos1 + 1}`);
             nextBox2 = document.querySelector(`.x-${xPos2}.y-${yPos2 + 1}`);
             nextBox3 = document.querySelector(`.x-${xPos3}.y-${yPos3 + 1}`);
             nextBox4 = document.querySelector(`.x-${xPos4}.y-${yPos4 + 1}`);

             console.log("box1: ", box1);
             console.log("box2: ", box2);
             console.log("box3: ", box3);
             console.log("box4: ", box4);


         }, 1000)
}



