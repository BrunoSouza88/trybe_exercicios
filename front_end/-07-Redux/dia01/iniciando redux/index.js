import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = 0;

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === "INCREMENT_COUNTER") {
    return  state + 1;
  }
  return state;
};

const store = createStore(reducer, composeWithDevTools());

const action = { type: "INCREMENT_COUNTER" };

const elemBtn = document.querySelector("button");
elemBtn.addEventListener("click", () => {
  store.dispatch(action);
});

store.subscribe(() => {

  const oloko = store.getState();

  const element0 = document.querySelector("h2");
  element0.innerHTML = oloko;
})