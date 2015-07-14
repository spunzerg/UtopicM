var gameServer = function (io) {
	io.on('connection', function (socket) {

		var playerList = [];

		console.log("Usuario conectado: " + socket.id);
		//Añadir id de cliente a la lista
		playerList.push(socket.id);

		socket.emit('clientValidated', { id: socket.id, playerList: playerList });
		socket.on('my other event', function (data) {
			console.log(data);
		});


		socket.on('disconnect', function (data) {
			console.log("Usuario desconectado: " + socket.id);
			//Eliminar usuario de la lista
		});
	});
}

module.exports = gameServer;
