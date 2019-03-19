import { SET_VIEW, SET_TABINDEX, SET_TABINDEX_INC, SET_TABINDEX_DEC } from "constants-view"

/**
 * Set the current view
 *
 * @param {string} view
 *
 */
const setView = (view) => ({type: SET_VIEW, view: view});

/**
 * Set the tab index manually
 *
 * @param {int} index
 *
 */
const setTabIndex = (index) => ({type: SET_TABINDEX, index: index});

/**
 * Increment tab index
 *
 */
const incrementTabIndex = (index) => ({type: SET_TABINDEX_INC});

/**
 * Decrement tab index
 *
 */
const decrementTabIndex = (index) => ({type: SET_TABINDEX_DEC});

module.exports = { setView, setTabIndex, incrementTabIndex, decrementTabIndex };