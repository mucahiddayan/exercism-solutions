export class InputCell {
  #value;
  #listeners = [];
  constructor(value) {
    this.setValue(value);
  }

  setValue(value) {
    this.#value = value;
    this.#listeners.forEach(this.#run.bind(this));
  }

  addListener(cc) {
    this.#listeners.push(cc);
  }

  get value() {
    return this.#value;
  }

  #run(fn) {
    return fn();
  }
}

export class ComputeCell {
  #value;
  #fn;
  #listeners = [];
  #callbacks = [];
  constructor(cells, fn) {
    this.#fn = () => fn(cells);
    this.#value = this.#fn();
    cells.forEach((c) => c.addListener(this.computeValue.bind(this)));
  }

  addListener(cc) {
    this.#listeners.push(cc);
  }

  computeValue() {
    if (this.#value !== this.value) {
      this.#callbacks.forEach((cb) => cb.update(this));
      this.#listeners.forEach(this.#run.bind(this));
    }
  }

  #run(fn) {
    return fn();
  }

  addCallback(cb) {
    this.#callbacks.push(cb);
  }

  removeCallback(cb) {
    this.#callbacks = this.#callbacks.filter((c) => c !== cb);
  }

  get value() {
    return (this.#value = this.#fn());
  }
}

export class CallbackCell {
  #values = [];
  #fn;
  constructor(fn) {
    this.#fn = fn;
    this.counter = 0;
  }

  update(cc) {
    this.#values.push(this.#fn(cc));
  }

  get values() {
    return this.#values;
  }
}
