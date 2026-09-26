let board;
const rowCount = 21;
const columnCount = 19;
const tileSize = 32;
const boardWidth = columnCount*tileSize;
const boardHeight = rowCount*tileSize;
let context;

let blueGhostImage;
let orangeGhostImage;
let pinkGhostImage;
let redGhostImage;
let pacmanUpImage;
let pacmanDownImage;
let pacmanRightImage;
let pacmanLeftImage;
let wallImage;




window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    loadImages();
    loadMap();
   
    update();
}

    const tileMap = [
    "XXXXXXXXXXXXXXXXXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X                 X",
    "X XX X XXXXX X XX X",
    "X    X       X    X",
    "XXXX XXXX XXXX XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXrXX X XXXX",
    "O       bpo       O",
    "XXXX X XXXXX X XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXXXX X XXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X  X     P     X  X",
    "XX X X XXXXX X X XX",
    "X    X   X   X    X",
    "X XXXXXX X XXXXXX X",
    "X                 X",
    "XXXXXXXXXXXXXXXXXXX" 
];

const walls = new Set();
const foods = new Set();
const ghosts = new Set();
let pacman;




function loadImages() {
    wallImage = new Image();
    wallImage.src = "./image/wall.png";

    blueGhostImage = new Image();
    blueGhostImage.src = "./image/blueGhost.png";

    orangeGhostImage = new Image();
    orangeGhostImage.src = "./image/orangeGhost.png";

    pinkGhostImage = new Image();
    pinkGhostImage.src = "./image/pinkGhost.png";

    redGhostImage = new Image();
    redGhostImage.src = "./image/redGhost.png";

    pacmanUpImage = new Image();
    pacmanUpImage.src = "./image/pacmanUp.png";

    pacmanDownImage = new Image();
    pacmanDownImage.src = "./image/pacmanDown.png";

    pacmanRightImage = new Image();
    pacmanRightImage.src = "./image/pacmanRight.png";

    pacmanLeftImage = new Image();
    pacmanLeftImage.src = "./image/pacmanLeft.png";

}

function loadMap(){
    walls.clear();
    foods.clear();
    ghosts.clear();


    for (let r = 0; r < rowCount; r++){
        for(let c = 0; c < columnCount; c++){
            const row = tileMap[r];
            const tileMapChar = row[c];

            const x = c*tileSize;
            const y = r*tileSize;

            if(tileMapChar == 'X'){
                const wall = new Block(wallImage, x, y, tileSize, tileSize);
                walls.add(wall);
            }
            else if (tileMapChar == 'b'){
                const ghost = new Block(blueGhostImage, x, y, tileSize);
                ghosts.add(ghost);
            }
            else if (tileMapChar == 'o'){
                const ghost = new Block(orangeGhostImage, x, y, tileSize, tileSize);
                ghosts.add(ghost);
            }
            else if (tileMapChar == 'p'){
                const ghost = new Block(pinkGhostImage, x, y, tileSize, tileSize);
                ghosts.add(ghost);
            }
            else if (tileMapChar == 'r'){
                const ghost = new Block(redGhostImage, x, y, tileSize, tileSize);
                ghosts.add(ghost);
            }
            else if (tileMapChar == 'P'){
                pacman = new Block(pacmanRightImage, x, y, tileSize, tileSize);
            }
           else if (tileMapChar == ' '){
                const food = new Block(null, x + 14, y + 14, 4,4);
                foods.add(food);
            }
        }
    }
}

     function update(){
        draw();
setTimeout(update, 50);
     }

function draw(){
    context.drawImage(
        pacman.image,
        pacman.x,
        pacman.y,
        pacman.width,
        pacman.height
    );
    for(let ghost of ghosts.value()){
        context
    }
}



class Block{
    constructor(image, x, y, width, height){
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.startX = x;
        this.startY = y;
    }
}