import React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";

import Home from "views/Home";

describe("Home view", () => {

    it("renders the home container", () => {
        const element = shallow(<Home />);
        expect(element.find(".home-container")).to.have.length(1);
    });

});
