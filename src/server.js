const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
	'host': 'localhost',
	'port': 4000
});

server.route({
	'method': 'GET',
	'path': '/hello',
	'handler': (request, reply) => {
		reply('Hello World!');
	}
});

server.route({
	'method': 'GET',
	'path': '/{name}',
	'handler': function (request, reply) {
		reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
	}
});

server.start(err => {
	if (err) {
		console.error('Error was handled!');
		console.error(err);
	}

	console.log(`Server started at ${ server.info.uri }`);
});
