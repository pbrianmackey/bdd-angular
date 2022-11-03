//import assert from "assert";  //TODO: Discover why this fails
const assert = require('assert')

import { When, Then } from "@cucumber/cucumber";
import { Greeter } from "../../src/greeter";

interface MyWorld {
  whatIHeard: string;
}

When("the greeter says hello", function (this: MyWorld) {
  this.whatIHeard = new Greeter().sayHello();
});

Then(
  "I should have heard {string}",
  function (this: MyWorld, expectedResponse: string) {
    assert.equal(this.whatIHeard, expectedResponse);
  }
);
