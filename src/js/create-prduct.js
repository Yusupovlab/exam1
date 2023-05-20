// --->>> POST DATA EXAMPLE <<<---

// const data = {
//   name: "product name",
//   price: 100,
//   description: "product description",
//   image: "https://picsum.photos/200/300",
// };

import "../assets/tailwind.css";

const api =
  
"https://to-do-66a0e-default-rtdb.asia-southeast1.firebasedatabase.app/products/said";;

const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const imgInput = document.querySelector("#image");
const descInput = document.querySelector("#description");
const createBtn = document.querySelector("#btncreate");
export async function fetchToDo(e) {
    e.preventDefault()
  const nameInputValue = nameInput.value.trim();
  const priceInputValue = priceInput.value.trim();
  const imgInputValue = imgInput.value.trim();
  const descInputValue = descInput.value.trim();
  if (!nameInputValue || !priceInputValue || !imgInputValue || !descInputValue)
    return;
  const res = await fetch(`${api}.json`, {
    
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      price: priceInputValue,
      name: nameInputValue,
      desc: descInputValue,
      img: imgInputValue,
    }),
  });
  nameInput.value = ""
  priceInput.value = ""
  descInput.value = ""
  imgInput.value = ""
}

createBtn.addEventListener("click", fetchToDo);

