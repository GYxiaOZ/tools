import { Decimal } from 'decimal.js-light';

/**
 * @description 减法
 * @function
 * @param {string|number} minuend - 被减数
 * @param {string|number} subtrahend - 减数
 * @example
 * subtract('2.9','1.1')
 * // => '1.8'
 * @returns {string}
 */
const subtract = (minuend: string | number, subtrahend: string | number) =>
  new Decimal(minuend).sub(new Decimal(subtrahend)).toString();

export default subtract;
