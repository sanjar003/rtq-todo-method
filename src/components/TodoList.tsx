import { useState } from "react";
import {
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
  useEditTodoMutation,
} from "../redux/api/crud";
import scss from "./TodoList.module.scss";

const TodoList = () => {
  const [firstName, setFirstName] = useState("");
  const { data, isLoading } = useGetTodosQuery();
  const [createTodo] = useCreateTodoMutation();
  const [inputValue, setInputValue] = useState<string>("");
  const [isResut, setIsResult] = useState<number | null | boolean>(null);
  const [editTodo] = useEditTodoMutation();

  const addTodo = async () => {
    const createData = {
      firstName,
    };
    setFirstName("");
    await createTodo(createData);
  };

  const [deleteTodo] = useDeleteTodoMutation();
  const handleDelete = (id: number) => {
    deleteTodo(id);
  };
  const putTodo = async (_id: number) => {
    const newData = {
      firstName: inputValue,
    };
    if (inputValue.trim() === "" && inputValue.trim() === "") {
      alert("Введите текст");
    } else {
      editTodo({ _id, newData });
      setIsResult(null);
    }
  };
  function EditItemId(_id: number) {
    setIsResult(_id);
  }

  return (
    <div className={scss.container}>
      <input
        className={scss.input}
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      {isLoading ? (
        <>
          <h1 className={scss.Loading}>Loading...</h1>
        </>
      ) : (
        <>
          {data?.map((item) => (
            <div key={item._id}>
              {isResut === item._id ? (
                <>
                  <div className={scss.ChildrenContainer}>
                    <div>
                      <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        type="text"
                      />
                    </div>
                    <div>
                      <button onClick={() => putTodo(item._id!)}>seva</button>
                      <button onClick={() => setIsResult(null)}>cancel</button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h1>{item.firstName}</h1>
                  <button onClick={() => handleDelete(item._id!)}>
                    delete
                  </button>
                  <button onClick={() => EditItemId(item._id!)}>Edit</button>
                </>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TodoList;
