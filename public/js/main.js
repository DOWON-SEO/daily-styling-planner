let clothesContainer = document.querySelector(".items__container .items");

async function reloadClothes(option) {
  clothesContainer.innerHTML = "";
  let url = `/clothe?`;
  if (option.temperature) {
    url += `temperature=${option.temperature}&`;
  }

  if (option.type) {
    url += `type=${option.type}`;
  }

  const res = await fetch(url);
  const body = await res.json();

  Object.keys(body.result).forEach((key) => {
    body.result[key].forEach((item) => {
      const el = document.createElement("li");
      el.innerHTML = `<img class="item__thumbnail" src="${item.image}"></img>`;

      clothesContainer.appendChild(el);
    });
  });
}
