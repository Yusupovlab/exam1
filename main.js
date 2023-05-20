import "./src/assets/tailwind.css";
import { getTodo } from "/src/js/create-products";
import { deleteProduct } from "./src/js/delete-product";

// import { fetchProducts, getTodo } from "./src/js/fetch-products";

const api =
  "https://to-do-66a0e-default-rtdb.asia-southeast1.firebasedatabase.app/products/said";

  const listWrapper = document.querySelector('.product-list')
// async function App() {
//   const res = await fetch(`${api}.json`)
// }

window.addEventListener("load", getTodo);
listWrapper.addEventListener('click', deleteProduct)
