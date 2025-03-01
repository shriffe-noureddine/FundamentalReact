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

// export async function dataLoader() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const resData = await response.json;
//   return resData;
// }
