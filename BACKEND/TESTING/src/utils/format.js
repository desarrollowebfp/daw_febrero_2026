const toUpperTitle = (title) => {
	return title.toUpperCase();
};

const titleWithYear = (title, year) => {
	return `${title} (${year})`;
};

module.exports = { toUpperTitle, titleWithYear };
