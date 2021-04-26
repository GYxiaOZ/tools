import { Decimal } from 'decimal.js-light';

/**
 * 小于
 * @function
 * @param {string|number} vala
 * @param {string|number} valb
 * @example
 * lt('1.1','1.0')
 * // => false
 * @example
 * lt('1.1','1.1')
 * // => false
 * @example
 * lt('1.1','1.2')
 * // => true
 * @returns {boolean}
 */
const lt = (vala: string | number, valb: string | number) => new Decimal(vala).lt(valb);

export default lt;
