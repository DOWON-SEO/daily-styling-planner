const typeBtns = document.querySelectorAll(".btn.typeBtn");

typeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;

    reloadClothes({ type })
      .then((res) => {
        console.log("result : ", res);
      })
      .catch((err) => {
        throw err;
      });
  });
});
