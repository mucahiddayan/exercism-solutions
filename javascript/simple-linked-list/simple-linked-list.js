//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  next = null;
  constructor(value) {
    this.value = value;
  }
}

export class List {
  constructor(arrayOfList = []) {
    this._list = [];
    arrayOfList.forEach((e) => this.add(new Element(e)));
  }

  add(nextValue) {
    nextValue.next = this.head;
    this._list.unshift(nextValue);
  }

  get length() {
    return this._list.length;
  }

  get head() {
    return this._list[0] || null;
  }

  toArray() {
    return this._list.map((e) => e.value);
  }

  reverse() {
    this._list.reverse();
    return this;
  }
}
