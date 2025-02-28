import { Outlet } from "react-router-dom";
import List from "../components/List";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <List />
      </main>
    </>
  );
}

export default Posts;
