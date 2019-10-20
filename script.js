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

let nextBox1;
let nextBox2;
let nextBox3;
let nextBox4;

let boxesArr = [];

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", generateRandomItem);

let currentItem;

function generateRandomItem() {
    currentItem = itemsArr[Math.floor(Math.random() * (itemsArr.length))];
    moveItemDown(currentItem);
}


document.body.addEventListener('keydown', handleKeyDown);

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
            moveItemDown();
            break;
        default:
            break;
    }
}


function moveItemDown(item = currentItem) {
    setInterval(() => {
        clearActiveClasses();
        drawItem(item);
    }, 1000);
}

function clearActiveClasses() {
    boxesArr.map((elem) => {
        console.log(elem)
        elem.classList.remove("active");
    });
}

function drawItem(item) {
    //console.log(item)
    let currentPosition = [];
    let currentElemClassListArr = [];
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
            if (item[i][j]) {
                currentPosition[i][j].classList.add("active");
            }
        }
    }
    console.log(currentPosition);
    for (let i = 0; i < currentPosition.length; i++) {
        for (let j = 0; j < currentPosition[i].length; j++) {
            if (currentPosition[i][j] && currentPosition[i][j].classList.contains("active")) {
                currentElemClassListArr.push(currentPosition[i][j]);
            }
        }
    }

    xPositionOfElem1 = currentElemClassListArr[0].classList[1];
    yPositionOfElem1 = currentElemClassListArr[0].classList[2];

    xPos1 = +xPositionOfElem1.split('-')[1];
    yPos1 = +yPositionOfElem1.split('-')[1];

    xPositionOfElem2 = currentElemClassListArr[1].classList[1];
    yPositionOfElem2 = currentElemClassListArr[1].classList[2];

    xPos2 = +xPositionOfElem2.split('-')[1];
    yPos2 = +yPositionOfElem2.split('-')[1];

    xPositionOfElem3 = currentElemClassListArr[2].classList[1];
    yPositionOfElem3 = currentElemClassListArr[2].classList[2];

    xPos3 = +xPositionOfElem3.split('-')[1];
    yPos3 = +yPositionOfElem3.split('-')[1];

    xPositionOfElem4 = currentElemClassListArr[3].classList[1];
    yPositionOfElem4 = currentElemClassListArr[3].classList[2];

    xPos4 = +xPositionOfElem4.split('-')[1];
    yPos4 = +yPositionOfElem4.split('-')[1];


    box1 = document.querySelector(`.x-${xPos1}.y-${yPos1}`);
    box2 = document.querySelector(`.x-${xPos2}.y-${yPos2}`);
    box3 = document.querySelector(`.x-${xPos3}.y-${yPos3}`);
    box4 = document.querySelector(`.x-${xPos4}.y-${yPos4}`);

    boxesArr = [box1, box2, box3, box4];

    nextBox1 = document.querySelector(`.x-${xPos1}.y-${yPos1 + 1}`);
    nextBox2 = document.querySelector(`.x-${xPos2}.y-${yPos2 + 1}`);
    nextBox3 = document.querySelector(`.x-${xPos3}.y-${yPos3 + 1}`);
    nextBox4 = document.querySelector(`.x-${xPos4}.y-${yPos4 + 1}`);

    initialY += 1;
    box1 = nextBox1;
    box2 = nextBox2;
    box3 = nextBox3;
    box4 = nextBox4;

}




