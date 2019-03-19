import {
	isFunction,
	isObject,
	isMap,
} from "object-utils"

describe("Check functions in object-utils", () => {

	it("isObject()", () => {
		expect(isObject({})).toEqual(true);
		expect(isObject([])).toEqual(false);
		expect(isObject()).toEqual(false);
		expect(isObject(1)).toEqual(false);
		expect(isObject(false)).toEqual(false);
		expect(isObject("asd")).toEqual(false);
		expect(isObject(new Map())).toEqual(false);
	});
	
	it("isFunction()", () => {
		expect(isFunction(() => {})).toEqual(true);
		expect(isFunction(function() {})).toEqual(true);
		expect(isFunction()).toEqual(false);
		expect(isFunction([])).toEqual(false);
		expect(isFunction({})).toEqual(false);
		expect(isFunction(2)).toEqual(false);
		expect(isFunction(false)).toEqual(false);
	});

	it("isMap()", () => {
		expect(isMap(new Map())).toEqual(true);
		expect(isMap({})).toEqual(false);
		expect(isMap([])).toEqual(false);
		expect(isMap(false)).toEqual(false);
		expect(isMap(37)).toEqual(false);
		expect(isMap()).toEqual(false);
		expect(isMap("asd")).toEqual(false);
	});

});