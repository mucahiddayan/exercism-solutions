//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  #plaintext;
  constructor(plaintext) {
    this.#plaintext = plaintext;
  }

  #normalize(text) {
    return text.toLowerCase().replace(/\W/g, '');
  }

  get normalizedText() {
    return this.#normalize(this.#plaintext);
  }

  get splittedText() {
    return this.normalizedText
      .split(new RegExp(`(\\w{${this.columnSize}})`))
      .filter(Boolean)
      .map((_) => _.padEnd(this.columnSize, ' '));
  }

  get length() {
    return this.#normalize(this.#plaintext).length;
  }

  get rowSize() {
    return Math.round(Math.sqrt(this.length));
  }

  get columnSize() {
    return Math.round(this.length / this.rowSize);
  }

  get ciphertext() {
    const result = [];
    for (let i = 0; i <= this.rowSize; i++) {
      if (!result[i]) {
        result[i] = '';
      }
      for (let c in this.splittedText) {
        result[i] += this.splittedText[c][i] || '';
      }
    }

    return result.filter(Boolean).join(' ');
  }
}
