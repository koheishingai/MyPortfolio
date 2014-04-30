var async = require("async"),
    fs = require("fs"),
    sys = require("sys"),
    exec = require("child_process").exec;
var texar = [],
    texstrage = [];
async.parallel( [
    function (callback) {
        console.log('View Section');
        exports.aboutget = function (e, r) {
    c.af = 1, require("../lib/a"), r.writeHead(200, {
        "Content-Type": "text/html"
    }), r.write(c.a), r.end(), delete require.cache[require.resolve("../lib/a")]
},exports.edit = function (e, r) {
    c.af = 1, require("../lib/a"), r.writeHead(200, {
        "Content-Type": "text/html"
    }), r.write(c.a), r.end(), delete require.cache[require.resolve("../lib/a")]
}, exports.index = function (e, r) {
    require("../lib/l"), r.writeHead(200, {
        "Content-Type": "text/html"
    }), r.write(c.l), r.end(), delete require.cache[require.resolve("../lib/l")]
}, exports.about = function (e, r) {
    c.af = 0, require("../lib/a"), r.writeHead(200, {
        "Content-Type": "text/html"
    }), r.write(c.a), r.end(), delete require.cache[require.resolve("../lib/a")]
}, exports.works = function (e, r) {
    c.wf = 0, require("../lib/w"), r.writeHead(200, {
        "Content-Type": "text/html"
    }), r.write(c.w), r.end(), delete require.cache[require.resolve("../lib/w")]
}, exports.works1 = function (e, r) {
    c.wf = 1, require("../lib/w"), r.writeHead(200, {
        "Content-Type": "text/html"
    }), r.write(c.w), r.end(), delete require.cache[require.resolve("../lib/w")]
}, exports.works2 = function (e, r) {
    c.wf = 2, require("../lib/w"), r.writeHead(200, {
        "Content-Type": "text/html"
    }), r.write(c.w), r.end(), delete require.cache[require.resolve("../lib/w")]
}, exports.works3 = function (e, r) {
    c.wf = 3, require("../lib/w"), r.writeHead(200, {
        "Content-Type": "text/html"
    }), r.write(c.w), r.end(), delete require.cache[require.resolve("../lib/w")]
}, exports.collections = function (e, r) {
    c.cf = 0, require("../lib/c"), r.writeHead(200, {
        "Content-Type": "text/html"
    }), r.write(c.c), r.end(), delete require.cache[require.resolve("../lib/c")]
}, exports.collections1 = function (e, r) {
    c.cf = 1, require("../lib/c"), r.writeHead(200, {
        "Content-Type": "text/html"
    }), r.write(c.c), r.end(), delete require.cache[require.resolve("../lib/c")]
}, exports.collections2 = function (e, r) {
    c.cf = 2, require("../lib/c"), r.writeHead(200, {
        "Content-Type": "text/html"
    }), r.write(c.c), r.end(), delete require.cache[require.resolve("../lib/c")]
}, exports.collections3 = function (e, r) {
    c.cf = 3, require("../lib/c"), r.writeHead(200, {
        "Content-Type": "text/html"
    }), r.write(c.c), r.end(), delete require.cache[require.resolve("../lib/c")]
}, exports.article = function (e, r) {
    c.rf = 0, require("../lib/r"), r.writeHead(200, {
        "Content-Type": "text/html"
    }), r.write(c.r), r.end(), delete require.cache[require.resolve("../lib/r")]
}, exports.article1 = function (e, r) {
    c.rf = 1, require("../lib/r"), r.writeHead(200, {
        "Content-Type": "text/html"
    }), r.write(c.r), r.end(), delete require.cache[require.resolve("../lib/r")]
}, exports.article2 = function (e, r) {
    c.rf = 2, require("../lib/r"), r.writeHead(200, {
        "Content-Type": "text/html"
    }), r.write(c.r), r.end(), delete require.cache[require.resolve("../lib/r")]
}, exports.cgs = function (e, r) {
    r.render("codegarage", {
        title: "Express"
    })
}
        callback(null, 'view');
    },
    ], function ( err, result ) {
    console.log('final callback & result = ' + result);
});