const http = require('http');

function requestHandler(req, res) {
    res.write('This Is Now Running On Google Cloud RUN');
    res.end();
}

const server = http.createServer(requestHandler);
const port = process.env.PORT || 8888;
server.listen(port, () => console.log(`listening on port ${port}`));


"""
random_stringB64 = "ZWVTjPQSdhwRgl204Hc51YCsritMIzn8B=/p9UyeX7xu6KkAGqfm3FJ+oObLDNEva"
random_stringHex = "b3A0a1FDfe86dcCE945B72"
"""
