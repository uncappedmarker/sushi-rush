const isObject = (obj = {}) => {

}

const isFunction = (func) => {
	return typeof(func) === "function";
}

module.exports = {
	isObject,
	isFunction,
}