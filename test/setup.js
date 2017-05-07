import {JSDOM} from "jsdom";

// Setup fake DOM
const dom = new JSDOM();

global.window = dom.window;
global.document = dom.window.document;
global.navigator = {
    userAgent: "node.js"
};

// Setup configuration
global.window.APP_CONFIG = {};
