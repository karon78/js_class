"use strict";

class RangeValidator {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    set from(v) {
        if (typeof v !== 'number') {
            throw new TypeError('param from must be a number');
        }
        this._from = v;
    }

    get from() {
        return this._from;
    }

    set to(v) {
        if (typeof v !== 'number') {
            throw new TypeError('param to must be a number');
        }
        if (v < this.from) {
            throw new RangeError('param to mast be bigger param from ');
        }
        this._to = v;
    }

    get to() {
        return this._to;
    }

    get range() {
        return `${this.from} - ${this.to}`;
    }

    static isValidate(v, obj) {
        if (typeof v !== 'number') {
            throw new TypeError('param from must be a number');
        }
        return v < obj.to || v > obj.from;

    }
}

const objRange = new RangeValidator(12, 50);
console.log(objRange.range);
console.log(RangeValidator.isValidate(17, objRange));