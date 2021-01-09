const products = [
  {
    path: "img/cake-1.jpeg",
    dataValue: "cakes",
  },
  {
    path: "img/cake-2.jpeg",
    dataValue: "cakes",
  },
  {
    path: "img/cake-3.jpeg",
    dataValue: "cakes",
  },
  {
    path: "img/cupcake-1.jpeg",
    dataValue: "cupcakes",
  },
  {
    path: "img/cupcake-2.jpeg",
    dataValue: "cupcakes",
  },
  {
    path: "img/cupcake-3.jpeg",
    dataValue: "cupcakes",
  },
  {
    path: "img/doughnut-1.jpeg",
    dataValue: "doughnuts",
  },
  {
    path: "img/doughnut-2.jpeg",
    dataValue: "doughnuts",
  },
  {
    path: "img/doughnut-3.jpeg",
    dataValue: "doughnuts",
  },
  {
    path: "img/sweets-1.jpeg",
    dataValue: "sweets",
  },
  {
    path: "img/sweets-2.jpeg",
    dataValue: "sweets",
  },
  {
    path: "img/sweets-3.jpeg",
    dataValue: "sweets",
  },
];

let store = document.querySelector(".products");

//add products
function clickHandler() {
  let res = this.dataset ? this.dataset.filter : "all";
  store.innerHTML = "";
  for (let i = 0; i <= products.length - 1; i++) {
    let result = res == products[i].dataValue || res == "all";
    let element = `
      <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item ${products[i].dataValue}" data-item=${products[i].dataValue}>
        <div class="card ">
          <div class="img-container">
            <img src=${products[i].path} class="card-img-top store-img" alt="" />
            <span class="store-item-icon">
              <i class="fas fa-shopping-cart"></i>
            </span>
          </div>
          <div class="card-body">
            <div class="card-text d-flex justify-content-between text-capitalize">
              <h5 id="store-item-name">${products[i].dataValue} item</h5>
              <h5 class="store-item-value">$ <strong id="store-item-price" class="font-weight-bold">10</strong></h5>
            </div>
          </div>
        </div>
      </div>
    `;

    result && render(element);
  }
  productArray = document.querySelectorAll(".store-item");
}
clickHandler();

//render products + modal window
function render(elem) {
  store.insertAdjacentHTML("afterbegin", elem);
}

//Category buttons
document.querySelectorAll(".filter-buttons a").forEach((button) => {
  button.addEventListener("click", clickHandler);
});
