import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
const defaultState = {
  todo: [],
};

function todoReducer(state = defaultState, actions) {
  switch (actions.type) {
    case "Add":
      return {
        ...state,
        todo: [...state.todo, actions.payload],
      };
    case "Remove":
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== actions.payload),
      };
    case "Update":
      return {
        ...state,
        todo: state.todo.map((item) => {
          if (item.id == actions.payload.id) {
            item.name = actions.payload.name;
          }
          return item;
        }),
      };
    default:
      return state;
  }
}
export const store = createStore(todoReducer, composeWithDevTools());
