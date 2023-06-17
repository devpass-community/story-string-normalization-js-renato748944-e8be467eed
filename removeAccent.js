function removeAccent(str) {
	return str.normalize('NFD');
}

module.exports = removeAccent;
