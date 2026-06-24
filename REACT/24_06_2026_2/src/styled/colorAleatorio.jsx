const coloresPastel = [
	"#FFB7B2", // Rosa pastel
	"#FFDAC1", // Melocotón pastel
	"#E2F0CB", // Verde lima pastel
	"#B5EAD7", // Menta pastel
	"#C7CEEA", // Lavanda pastel
	"#FF9AA2", // Coral pastel
];

const colorAleatorio = () => {
	return coloresPastel[Math.floor(Math.random() * coloresPastel.length)];
};

export default colorAleatorio