class Stack {
	constructor() {
		// create our stack, which is an empty object
		this._storage = {};
		this.length = 0;
	}
	// this method will push a value onto the top of our stack
	push(value) {
		this._storage[this._length] = value;
		this.length++;
	}

	// this method is responsible for popping off the last value and returning it
	pop() {
		const lastVal = this._storage[--this._length];
		delete this._storage[--this._length];
		this._length--;
		return lastVal;
	}

	// this will peek at the last value added to the stack
	peek() {
		const lastVal = this._storage[--this._length];
		return lastVal;
	}
}
