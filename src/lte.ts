import { Decimal } from 'decimal.js-light';

/**
 * 小于等于
 * @function
 * @param {string|number} vala
 * @param {string|number} valb
 * @example
 * lte('1.1','1.0')
 * // => false
 * @example
 * lte('1.1','1.1')
 * // => true
 * @example
 * lte('1.1','1.2')
 * // => true
 * @returns {boolean}
 */
const lte = (vala: string | number, valb: string | number) => new Decimal(vala).lte(valb);

export default lte;
