import { SET_VIEW, SET_TABINDEX, SET_TABINDEX_INC, SET_TABINDEX_DEC } from "constants-view"
import { setView, setTabIndex, incrementTabIndex, decrementTabIndex } from "view-actions"
import Store from "store"

describe("Set the current view", () => {
	
	it("Check the set view action creator", () => {
		const result = setView();
		const expected = {type: SET_VIEW, view: undefined};
		expect(result).toEqual(expected);
	});

	it("Check the set view action creator again", () => {
		const result = setView("list");
		const expected = {type: SET_VIEW, view: "list"};
		expect(result).toEqual(expected);
	});

	it("Check the store state beforehand", () => {
		const state = Store.getState().view;
		expect(state.view).toEqual("main");
		expect(state.tabIndex).toEqual(0);
	});

	it("Set the view", () => {
		Store.dispatch(setView("list"));
		const state = Store.getState().view;
		expect(state.view).toEqual("list");
		expect(state.tabIndex).toEqual(0);
	});

});

describe("Setting tab index", () => {
	
	it("Check action creators for such deeds", () => {
		expect(setTabIndex(30)).toEqual({type: SET_TABINDEX, index: 30});
		expect(incrementTabIndex()).toEqual({type: SET_TABINDEX_INC});
		expect(decrementTabIndex()).toEqual({type: SET_TABINDEX_DEC});
	});

	it("Check tab index beforehand", () => {
		const state = Store.getState().view;
		expect(state.tabIndex).toEqual(0);
	});

	it("Set tabIndex manually", () => {
		Store.dispatch(setTabIndex(3));
		const state = Store.getState().view;
		expect(state.tabIndex).toEqual(3);
	});

	it("Increment a few times", () => {
		Store.dispatch(incrementTabIndex());
		Store.dispatch(incrementTabIndex());
		Store.dispatch(incrementTabIndex());
		const state = Store.getState().view;
		expect(state.tabIndex).toEqual(6);
	});

	it("Decrement a few times", () => {
		Store.dispatch(decrementTabIndex());
		Store.dispatch(decrementTabIndex());
		
		const state = Store.getState().view;
		expect(state.tabIndex).toEqual(4);
	});

	it("Decrement a many", () => {
		for (var i=0;i<10;i++) {
			Store.dispatch(decrementTabIndex());
		}
		
		const state = Store.getState().view;
		expect(state.tabIndex).toEqual(0);
	});

});