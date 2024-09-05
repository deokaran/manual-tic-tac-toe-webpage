var i = 0;

var box = ['box0', 'box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8'];

// var box1 ='box1';
// var box2 ='box2';
// var box3 ='box3';
// var box4 ='box4';
// var box5 ='box5';
// var box6 ='box6';
// var box7 ='box7';
// var box8 ='box8';
// var box9 ='box9';

var GameRun = true;

function startGame() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('grid').style.display = 'grid';
    document.getElementById('status').style.display = 'block';
    document.getElementById('restart').style.display = 'block';
}

function win() {
    if ((box[0] == box[1]) && (box[1] == box[2])) {
        GameRun = false;
        document.getElementById('status').innerHTML = box[0] + " Wins";


    } else if ((box[3] == box[4]) && (box[4] == box[5])) {
        GameRun = false;
        document.getElementById('status').innerHTML = box[3] + " Wins";


    } else if ((box[6] == box[7]) && (box[7] == box[8])) {
        GameRun = false;
        document.getElementById('status').innerHTML = box[6] + " Wins";


    } else if ((box[0] == box[3]) && (box[3] == box[6])) {
        GameRun = false;
        document.getElementById('status').innerHTML = box[6] + " Wins";


    } else if ((box[1] == box[4]) && (box[4] == box[7])) {
        GameRun = false;
        document.getElementById('status').innerHTML = box[1] + " Wins";


    } else if ((box[2] == box[5]) && (box[5] == box[8])) {
        GameRun = false;
        document.getElementById('status').innerHTML = box[2] + " Wins";


    } else if ((box[0] == box[4]) && (box[4] == box[8])) {
        GameRun = false;
        document.getElementById('status').innerHTML = box[0] + " Wins";


    } else if ((box[2] == box[4]) && (box[4] == box[6])) {
        GameRun = false;
        document.getElementById('status').innerHTML = box[2] + " Wins";


    } else {


    }

}

function tie() {
    if ((box[0] == 'box0') || (box[1] == 'box1') || (box[2] == 'box2') || (box[3] == 'box3') || (box[4] == 'box4') || (box[5] == 'box5') || (box[6] == 'box6') || (box[7] == 'box7') || (box[8] == 'box8')) {
        return
    } else {
        document.getElementById('status').innerHTML = "Its a Tie";
        GameRun = false;
    }
}

function clicked0() {
    tie();
    if (GameRun == true) {
        if (i === 0) {
            document.getElementById('status').innerHTML = "O's Turn";
            document.getElementById('box0').innerHTML = "X";
            i = 1;
            box[0] = 'X';
        } else {
            document.getElementById('status').innerHTML = "X's Turn";
            document.getElementById('box0').innerHTML = "O";
            i = 0;
            box[0] = 'O';
        }
    } else {
        return
    }
    win();
    tie();

}

function clicked1() {

    if (GameRun == true) {
        if (i === 0) {
            document.getElementById('status').innerHTML = "O's Turn";
            document.getElementById('box1').innerHTML = "X";
            i = 1;
            box[1] = 'X';
        } else {
            document.getElementById('status').innerHTML = "X's Turn";
            document.getElementById('box1').innerHTML = "O";
            i = 0;
            box[1] = 'O';
        }
    } else {
        return
    }
    win();
    tie();
}

function clicked2() {
    if (GameRun == true) {
        if (i === 0) {
            document.getElementById('status').innerHTML = "O's Turn";
            document.getElementById('box2').innerHTML = "X";
            i = 1;
            box[2] = 'X';
        } else {
            document.getElementById('status').innerHTML = "X's Turn";
            document.getElementById('box2').innerHTML = "O";
            i = 0;
            box[2] = 'O';
        }
    } else {
        return
    }
    win();
    tie();

}

function clicked3() {
    if (GameRun == true) {
        if (i === 0) {
            document.getElementById('status').innerHTML = "O's Turn";
            document.getElementById('box3').innerHTML = "X";
            i = 1;
            box[3] = 'X';
        } else {
            document.getElementById('status').innerHTML = "X's Turn";
            document.getElementById('box3').innerHTML = "O";
            i = 0;
            box[3] = 'O';
        }
    } else {
        return
    }
    win();
    tie();

}

function clicked4() {
    if (GameRun == true) {
        if (i === 0) {
            document.getElementById('status').innerHTML = "O's Turn";
            document.getElementById('box4').innerHTML = "X";
            i = 1;
            box[4] = 'X';
        } else {
            document.getElementById('status').innerHTML = "X's Turn";
            document.getElementById('box4').innerHTML = "O";
            i = 0;
            box[4] = 'O';
        }
    } else {
        return
    }

    win();
    tie();
}

function clicked5() {
    if (GameRun == true) {
        if (i === 0) {
            document.getElementById('status').innerHTML = "O's Turn";
            document.getElementById('box5').innerHTML = "X";
            i = 1;
            box[5] = 'X';
        } else {
            document.getElementById('status').innerHTML = "X's Turn";
            document.getElementById('box5').innerHTML = "O";
            i = 0;
            box[5] = 'O';
        }
    } else {
        return
    }
    win();
    tie();

}

function clicked6() {
    if (GameRun == true) {
        if (i === 0) {
            document.getElementById('status').innerHTML = "O's Turn";
            document.getElementById('box6').innerHTML = "X";
            i = 1;
            box[6] = 'X';
        } else {
            document.getElementById('status').innerHTML = "X's Turn";
            document.getElementById('box6').innerHTML = "O";
            i = 0;
            box[6] = 'O';
        }
    } else {
        return
    }
    win();
    tie();

}

function clicked7() {
    if (GameRun == true) {
        if (i === 0) {
            document.getElementById('status').innerHTML = "O's Turn";
            document.getElementById('box7').innerHTML = "X";
            i = 1;
            box[7] = 'X';
        } else {
            document.getElementById('status').innerHTML = "X's Turn";
            document.getElementById('box7').innerHTML = "O";
            i = 0;
            box[7] = 'O';
        }
    } else {
        return
    }
    win();
    tie();

}

function clicked8() {
    if (GameRun == true) {
        if (i === 0) {
            document.getElementById('status').innerHTML = "O's Turn";
            document.getElementById('box8').innerHTML = "X";
            i = 1;
            box[8] = 'X';
        } else {

            document.getElementById('status').innerHTML = "X's Turn";
            document.getElementById('box8').innerHTML = "O";
            i = 0;
            box[8] = 'O';
        }
    } else {
        return
    }
    win();
    tie();

}


