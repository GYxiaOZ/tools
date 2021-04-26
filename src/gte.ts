import { Decimal } from 'decimal.js-light';

/**
 * 字符串数字 大于等于
 * @function
 * @param {string|number} vala
 * @param {string|number} valb
 * @example
 * gte('1.2','1.2')
 * // => true
 * @example
 * gte('1.2','1.3')
 * // => false
 * @returns {boolean}
 */
const gte = (vala: string | number, valb: string | number) => new Decimal(vala).gte(valb);

export default gte;
