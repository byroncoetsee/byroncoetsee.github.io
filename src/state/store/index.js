import { createStore } from 'redux';
import rootReducer, { initialState } from '../reducers/index';

var storage = initialState;

try {
	storage = window.localStorage.getItem("price.beater");

	if (storage === null) {
		storage = initialState;
	}

	storage = JSON.parse(storage);
}
catch (err) {
	storage = initialState;
}

const store = createStore(rootReducer, storage);

export default store;
