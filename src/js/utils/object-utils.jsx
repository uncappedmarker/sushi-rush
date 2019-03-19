const isMap = (test) => {
    return test instanceof Map && test !== undefined;
}

const isObject = (test) => {
	return typeof(test) === "object" && test instanceof Object && !Array.isArray(test) && !isMap(test);
}

const isFunction = (test) => {
	return typeof(test) === "function";
}

module.exports = {
	isObject,
	isFunction,
	isMap,
}