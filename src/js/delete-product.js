import {getTodo} from "./create-products";

export async function deleteProduct(e) {
  const api =
  "https://to-do-66a0e-default-rtdb.asia-southeast1.firebasedatabase.app/products/said";
  const target = e.target;
  const listElement = target.parentElement.parentElement.parentElement.parentElement;
  if (!target.classList.contains("delete")) return;
  const res = await fetch(`${api}/${listElement.id}.json`, {
    method: "DELETE",
  });
  getTodo()
}
