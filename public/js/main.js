let clothesContainer = document.querySelector(".items__container .items");

async function reloadClothes(temperature) {
  clothesContainer.innerHTML = "";
  const res = await fetch(`/clothe?temperature=${temperature}`);
  const body = await res.json();

  Object.keys(body.result).forEach((key) => {
    body.result[key].forEach((item) => {
      const el = document.createElement("li");
      el.innerHTML = `<img class="item__thumbnail" src="${item.image}"></img>`;

      clothesContainer.appendChild(el);
    });
  });
}
