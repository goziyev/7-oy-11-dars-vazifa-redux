import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useRef } from "react";

function App() {
  const data = useSelector((state) => state.todo);
  console.log(data);
  const dispatch = useDispatch();
  const input = useRef("");
  function handleSubmit(e) {
    e.preventDefault();
    const todo = {
      name: input.current.value,
      id: Date.now(),
    };
    dispatch({ type: "Add", payload: todo });
    input.current.value = "";
  }

  return (
    <>
      <div className="wrapper">
        <h2 className="todo-title">TO DO LIST</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            ref={input}
            maxLength={70}
            placeholder="Enter a task "
          />
        </form>
        <div className="todos">
          {data.length == 0 ? (
            <p style={{ color: "white" }}>Hech qanday qiymat mavjud emas</p>
          ) : (
            data.map((el, index) => {
              return (
                <div key={index} className="todo-card">
                  <p>{el.name}</p>
                  <div>
                    <span
                      onClick={() => {
                        dispatch({
                          type: "Update",
                          payload: { id: el.id, name: "salom" },
                        });
                      }}
                      style={{ backgroundColor: "green", marginRight: "10px" }}
                    >
                      update
                    </span>
                    <span
                      onClick={() => {
                        dispatch({ type: "Remove", payload: el.id });
                      }}
                    >
                      delate
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default App;
