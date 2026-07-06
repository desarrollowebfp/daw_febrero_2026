const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_URL);
		console.log(`Conectado con la base de datos 📊`);
	} catch (error) {
		console.error("Error conectando con la base de datos ❌", error.message);
	}
};

export default connectDB;
