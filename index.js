"use strict";


class RangeValidator {
    /**
     *
     * @param {number} from
     * @param {number} to
     */
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

    /**
     *
     * @returns {string}
     */
    get range() {
        return `${this.from} - ${this.to}`;
    }

    /**
     *
     * @param {object} obj
     * @returns {boolean}
     */
    static isRangeValidator(obj) {
        return obj instanceof RangeValidator;
    }

    /**
     *
     * @param {number} v
     * @param {object} obj
     * @returns {boolean}
     */
    static isValidate(v, obj) {
        if (typeof v !== 'number') {
            throw new TypeError('param from must be a number');
        }
        if (!RangeValidator.isRangeValidator(obj)) {
            throw new TypeError('param obj must be an object created using the constructor function RangeValidator');
        }
        return v < obj.to || v > obj.from;

    }
}

const objRange = new RangeValidator(12, 50);
console.log(objRange.range);
console.log(RangeValidator.isValidate(17, objRange));
const objR = new Object(1,17);
console.log(RangeValidator.isValidate(12,objR))
