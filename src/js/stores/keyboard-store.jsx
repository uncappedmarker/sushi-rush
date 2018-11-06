import { createStore } from "redux";
import rootReducer from "keyboard-reducer";
const store = createStore(rootReducer);
export default store;