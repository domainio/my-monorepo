import styles from "./app.module.css";
import NxWelcome from "./nx-welcome";
import { Item } from "@my-monorepo/common";
import { Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "isomorphic-fetch";
import { useQuery, gql, useMutation } from "@apollo/client";

const gqlGetAllTodos = gql`
  query getAllTodos {
    todos {
      id
      name
    }
  }
`;

const gqlCreateTodo = gql`
  mutation ($name: String!) {
    createTodo(createTodoInput: { name: $name }) {
      id
      name
    }
  }
`;

export function App() {
  const { loading, data: dataAllTodos } = useQuery<{ todos: Item[] }, Item[]>(
    gqlGetAllTodos
  );

  const [addTodo, { data: dataNewTodo }] = useMutation(gqlCreateTodo);
  const [todoName, setTodoName] = useState("");

  const createTodo = () => {
    console.log("todoName", todoName);
    addTodo({ variables: { name: todoName } });
  };

  useEffect(() => {
    console.log("dataNewTodo", dataNewTodo);
  }, [dataNewTodo]);

  return (
    <>
      <ul style={{ backgroundColor: "lightgray" }}>
        <div>All Todo's list:</div>
        {dataAllTodos?.todos?.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
      <div style={{ backgroundColor: "lightgray" }}>
        <div>Add Todo:</div>
        <input
          type={"text"}
          placeholder="type name..."
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button onClick={createTodo}>Create</button>
      </div>
      <NxWelcome title="web-app" />
      <div />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{" "}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </>
  );
}

export default App;
