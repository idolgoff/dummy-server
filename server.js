const fastify = require('fastify');

const build = (opts={}) => {
    const app = fastify(opts);
    return app;
};

const server = build({
    logger: {
        level: 'info',
    },
});

server.get('/', (req, res) => {
    res.send('ok');
});

server.post('/', (req, res) => {
    console.log(req.body);
    res.send('ok');
});

server.listen(3000, '0.0.0.0', (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
});