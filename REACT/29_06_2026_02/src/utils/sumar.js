const sumar = (a, b) => {
	if (typeof(a) !== "number" || typeof(b) !== "number") {
		return null;
	} else {
		return a + b;
	}
};

export default sumar;
