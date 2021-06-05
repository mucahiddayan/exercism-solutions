//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InputCell {
  #value;
  #subscribers = [];
  constructor(value) {
    this.setValue(value);
  }

  setValue(value) {
    this.#value = value;
    //TODO: inform ComputeCell about value change
    this.#subscribers.forEach((cb) => {
      if (typeof cb === "function") {
        cb();
      }
    });
  }

  subscribe(subscriber) {
    if (typeof subscriber !== "function") {
      throw new TypeError("Subscription parameter must be a function");
    }
    this.#subscribers.push(subscriber);
  }

  get value() {
    return this.#value;
  }
}

export class ComputeCell {
  #fn;
  #inputCells;
  #value;
  #subscribers = [];
  #callbacks = new Map();
  constructor(inputCells, fn) {
    if (typeof fn !== "function") {
      throw new TypeError("Fn must be a valid function");
    }
    this.#fn = fn;
    this.#inputCells = inputCells;
    this.#computeValue(true);
    this.#observeChanges();
  }

  #observeChanges() {
    this.#inputCells.forEach((ic) => {
      ic.subscribe(this.#computeValue.bind(this));
    });
  }

  subscribe(subscriber) {
    this.#subscribers.push(subscriber);
  }

  #computeValue() {
    this.#setValue(this.#fn(this.#inputCells));
  }

  #setValue(value) {
    const oldValue = this.#value;
    this.#value = value;
    this.#subscribers.forEach((cb, i) => {
      cb();
    });
    if (value !== oldValue) {
      this.#callbacks.forEach((cb) => {
        cb.run(this);
      });
    }
  }

  addCallback(cb) {
    if (cb instanceof CallbackCell) {
      cb.id = Date.now() + this.#callbacks.size;
      this.#callbacks.set(cb.id, cb);
    }
  }

  removeCallback(cb) {
    this.#callbacks.delete(cb.id);
  }

  get value() {
    return this.#value;
  }
}

export class CallbackCell {
  #fn;
  #values = [];
  constructor(fn) {
    this.#fn = fn;
  }

  get values() {
    return this.#values;
  }

  run(inputcell) {
    const result = this.#fn(inputcell);
    this.#values.push(result);
  }
}
