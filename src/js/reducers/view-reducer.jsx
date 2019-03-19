import { SET_VIEW, SET_TABINDEX, SET_TABINDEX_INC, SET_TABINDEX_DEC } from "constants-view"

const initialState = {
	view: "main",
	tabIndex: 0
}

const view = (state = initialState, action) => {
	switch(action.type) {
		case SET_VIEW:
			return {...state,
				view: action.view,
				tabIndex: 0
			}
		case SET_TABINDEX:
			return {...state,
				tabIndex: action.index
			}
		case SET_TABINDEX_INC:
			return {...state,
				tabIndex: state.tabIndex + 1
			}
		case SET_TABINDEX_DEC:
			return {...state,
				tabIndex: Math.max((state.tabIndex - 1), 0)
			}
		default:
			return state;
	}
}

module.exports = {view}