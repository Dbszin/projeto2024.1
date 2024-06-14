const express = require("express");
const cors = require("cors");

const app = express();
const path = require("path");
const { createRecord } = require("./databaseFunctions");
const port = 8080;

app.use(cors({
	origin: '*'
}));
app.use(express.static(path.join(__dirname, "src")));
app.use(express.json())
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "src/HTML", "index.html"));
});

app.get("/cadastrado", (req, res) => {
	res.sendFile(path.join(__dirname, "src/HTML", "cadastrado.html"));
});

app.post("/registro", async (req, res) => {
	const { name, email, password, phone_number } = req.body;

	try {
		await createRecord(name, email, password, phone_number);
		res.sendStatus(201);
	} catch (e) {
		res.status(500).send("Usuário já existe!");
	}

})

app.listen(port, () => {
	console.log(`Server running at: localhost:${port}`);
})
