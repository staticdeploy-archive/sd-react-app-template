const compression = require("compression");
const history = require("connect-history-api-fallback");
const express = require("express");
const rewrite = require("express-urlrewrite");
const serveStatic = require("serve-static");

const APP_BASENAME = process.env.APP_BASENAME || "";
const PORT = process.env.PORT || "8080";

express()
    .use(rewrite(new RegExp(`^${APP_BASENAME}(.*)$`), "$1"))
    .use(history())
    .use(compression())
    .use(serveStatic("build", {
        maxAge: 24 * 60 * 60 * 1000
    }))
    .listen(PORT, "0.0.0.0");
