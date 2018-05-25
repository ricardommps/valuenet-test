const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const LETTERS = 'acdegilmnoprstuw';
const HASH = 7;
const FACTOR = 37;
const TARGET_HASH = '695527946727L';


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(">>>>RESULT:",decode(680131659347))
});

var getHash = function (srt) {
    let lLen = str.length;
    let h = HASH;
    for (var i = 0; i < lLen; i++) {
        h = h * FACTOR + LETTERS.indexOf(str.charAt(i));
    }

    return _hash;
}

var decode = function (hash) {
    let result = ""

    while (hash > HASH) {
        let i = hash % FACTOR;
        if (i > LETTERS.length) {
            console.log("no solution")
        }
        hash = (hash - i) / FACTOR;
        result = LETTERS.charAt(i) + result
    }
    return result
}
