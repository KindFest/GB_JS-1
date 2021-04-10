'use strict';

const settings = {
    rowCount: 9,
    colCount: 9,
    blackCellColor: '#AA3333',
    whiteCellColor: '#eee',
    letters: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    numbers: [8, 7, 6, 5, 4, 3, 2, 1, ''],
    chessPieces:
        [['L5/br.png', 'L5/bn.png', 'L5/bb.png', 'L5/bq.png', 'L5/bk.png', 'L5/bb.png', 'L5/bn.png', 'L5/br.png'],
        ['L5/bp.png', 'L5/bp.png', 'L5/bp.png', 'L5/bp.png', 'L5/bp.png', 'L5/bp.png', 'L5/bp.png', 'L5/bp.png'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['L5/wp.png', 'L5/wp.png', 'L5/wp.png', 'L5/wp.png', 'L5/wp.png', 'L5/wp.png', 'L5/wp.png', 'L5/wp.png'],
        ['L5/wr.png', 'L5/wn.png', 'L5/wb.png', 'L5/wq.png', 'L5/wk.png', 'L5/wb.png', 'L5/wn.png', 'L5/wr.png']]
};

const game = {
    settings,
    containerElement: null,
    cellElements: [],

    run() {
        this.initChessBoard();
    },

    initChessBoard() {
        this.containerElement = document.querySelector('#chessgame');
        for (let row = 0; row < this.settings.rowCount; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);
            for (let col = 0; col < this.settings.colCount; col++) {
                const cell = document.createElement('td');
                trElem.appendChild(cell);
                if ((col != 0) && (row != 8)) {
                    cell.style.backgroundImage = `url(${this.settings.chessPieces[row][col - 1]})`;
                    cell.style.backgroundSize = "50px 50px";
                    cell.style.backgroundRepeat = 'no-repeat';
                    if ((row + col) % 2 != 1) {
                        cell.style.backgroundColor = this.settings.blackCellColor;
                    } else {
                        cell.style.backgroundColor = this.settings.whiteCellColor;
                    }
                    this.cellElements.push(cell);
                } else {
                    cell.style.backgroundColor = '#FFFFFF';
                    cell.style.textAlign = 'center';
                    cell.style.border = '0px';
                    if (row == 8) cell.innerText = this.settings.letters[col];
                    if (col == 0) cell.innerText = this.settings.numbers[row];
                }
            }
        }

    },
};

game.run();