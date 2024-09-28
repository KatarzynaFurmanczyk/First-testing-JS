/**
 * @param {number} startProduction
 * @param {number} numberOfMonths
 * @param {number} percent
 *
 * @returns {number[]}
 */
function getPlan(startProduction, numberOfMonths, percent) {
  const goals = [];
  let currentProduction = startProduction;

  for (let i = 0; i < numberOfMonths; i++){
    currentProduction += Math.floor(currentProduction * percent / 100);
    goals.push(currentProduction);
  }

  return goals;
}

module.exports = { getPlan };
