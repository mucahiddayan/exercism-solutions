//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
  #white;
  #black;
  constructor({
    black: [blackRow, blackColumn] = [0, 3],
    white: [whiteRow, whiteColumn] = [7, 3],
  } = {}) {
    if (whiteRow === blackRow && whiteColumn === blackColumn) {
      throw Error(`Queens cannot share the same space`);
    }
    if (
      [whiteColumn, whiteRow, blackColumn, blackRow].some((v) => v < 0 || v > 7)
    ) {
      throw Error(`Queen must be placed on the board`);
    }
    this.#white = [whiteRow, whiteColumn];
    this.#black = [blackRow, blackColumn];
  }

  get white() {
    return this.#white;
  }

  get black() {
    return this.#black;
  }

  toString() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      let row = '';
      for (let q = 0; q < 8; q++) {
        if (q === this.white[1] && i === this.white[0]) {
          row += `W`;
        } else if (q === this.black[1] && i === this.black[0]) {
          row += `B`;
        } else {
          row += `_`;
        }
        if (q !== 7) {
          row += ' ';
        }
      }
      board.push(row);
    }
    return board.join('\n');
  }

  get isDiagonal() {
    return (
      Math.abs(this.white[0] - this.black[0]) ===
      Math.abs(this.white[1] - this.black[1])
    );
  }

  get canAttack() {
    if (
      this.black[0] === this.white[0] ||
      this.black[1] === this.white[1] ||
      this.isDiagonal
    ) {
      return true;
    }
    return false;
  }
}
