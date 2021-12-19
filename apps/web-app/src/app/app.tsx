import styles from "./app.module.css";
import NxWelcome from "./nx-welcome";
import { Item } from "@my-monorepo/common";
import { Route, Link } from "react-router-dom";
import { useEffect } from "react";
import "isomorphic-fetch";
import { useQuery, gql } from "@apollo/client";

const gqlQuery = gql`
  query getAllTodos {
    todos {
      id
      name
    }
  }
`;

export function App() {
  const { loading, error, data } = useQuery<{ todos: Item[] }, Item[]>(
    gqlQuery
  );
  return (
    <>
      <ul>
        {data?.todos?.map((todo) => (
          <li>{todo.name}</li>
        ))}
      </ul>
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
