import { Decimal } from 'decimal.js-light';

/**
 * @description 除法
 * @function
 * @param {string | number} dividend - 被除数
 * @param {string | number} divisor - 除数
 * @example
 * divide('1.21','1.1')
 * // => '1.1'
 * @returns {string}
 */
const divide = (dividend: string | number, divisor: string | number) =>
  new Decimal(dividend).div(new Decimal(divisor)).toString();

export default divide;
