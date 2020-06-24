const PopulationCounter = require('../PopulationCounter')

describe('The populatron', () => {
  it('should print the world population', () => {
      //setup
      const popCTR = new PopulationCounter();
      //test goes here
      expect(popCTR.start()).toBe("The population of the world is: 1,347,982,728");
  })
});