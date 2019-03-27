const isMap = (test) => {
    return test instanceof Map && test !== undefined;
}

const isObject = (test) => {
	return typeof(test) === "object" && test instanceof Object && !Array.isArray(test) && !isMap(test);
}

const isFunction = (test) => {
	return typeof(test) === "function";
}

const forEachInObject = (object = {}, func) => {
	Object.keys(object).forEach((key, index) => {
		func(object[key], key, index);
	})
			
}

module.exports = {
	isObject,
	isFunction,
	isMap,
	forEachInObject,
}