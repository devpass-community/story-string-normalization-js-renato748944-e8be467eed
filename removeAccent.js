function removeAccent(str) {
	retorn str.normalize('NFD');
}

module.exports = removeAccent;
