import { createStore } from "redux";

import rootReducer from "./Components/redux/rootReducer";
const store = createStore(rootReducer);

export default store;
