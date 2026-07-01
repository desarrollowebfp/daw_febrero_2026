const server = require("./server.js");

const PORT = 8080;

server.listen(PORT, () => {
	console.log(`Servidor levantado en http://localhost:${PORT}`);
});
