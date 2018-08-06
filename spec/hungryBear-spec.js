import { bear } from './../src/hungryBear.js';

describe('HungryBear', function() {
  let fuzzy = bear;

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.foodLevel = 10;
    fuzzy.name = "Fuzzy";
    fuzzy.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should test if the bear ate you, if food level > 0', function() {
    expect(fuzzy.didYouGetEaten()).toEqual(false);
  });

  it('should test if the bear ate you, if food level < 0', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should return that the bear ate blueberries and the food level should go up 5', function() {
    expect(fuzzy.eatSmall("blueberries")).toEqual("The bear ate the blueberries! Food level goes up 5!");
    expect(fuzzy.foodLevel).toEqual(15);
  });

  it('should return that the bear ate mushroom and the food level should go up 10', function() {
    expect(fuzzy.eatMedium("mushroom")).toEqual("The bear ate the mushroom! Food level goes up 10!");
    expect(fuzzy.foodLevel).toEqual(20);
  });

  it('should return that the bear ate honey and the food level should go up 100', function() {
    expect(fuzzy.eatSpecialBonus("honey")).toEqual("The bear ate the honey! Food level goes up 100!");
    expect(fuzzy.foodLevel).toEqual(110);
  });

});
