const products = [
  {
    path: "https://pbs.twimg.com/media/C8GHEJwXUAEEYiG.jpg",
    name: "",
    dataValue: "cake",
  },
  {
    path:
      "https://img2.goodfon.ru/original/5250x3500/a/55/cupcake-dessert-sweet-cream-2239.jpg",
    name: "",
    dataValue: "cupcakes",
  },
  {
    path:
      "https://s6.hostingkartinok.com/uploads/images/2014/05/12474bf8c0876f87fe57edec8e914a1a.jpg",
    name: "",
    dataValue: "sweet",
  },
  {
    path: "https://s1.1zoom.ru/big3/609/Donuts_Closeup_553930_6016x4016.jpg",
    name: "",
    dataValue: "doughnuts",
  },
  {
    path:
      "https://www.yolandascakes.net/wp-content/uploads/2018/10/cupcakes-3-colores.jpg",
    name: "",
    dataValue: "cupcakes",
  },
  {
    path: "http://www.picshunger.com/wp-content/uploads/2014/05/1120.jpg",
    name: "",
    dataValue: "cake",
  },

  {
    path:
      "https://www.experiencekissimmee.com/sites/default/files/donut-miss.jpeg",
    name: "",
    dataValue: "doughnuts",
  },

  {
    path:
      "http://cdn.shopify.com/s/files/1/0116/2008/9956/collections/sweets_1200x1200.jpg?v=1563018091",
    name: "",
    dataValue: "sweet",
  },
  {
    path: "https://data.whicdn.com/images/28890738/original.jpg",
    name: "",
    dataValue: "cupcakes",
  },
  {
    path:
      "https://wallbox.ru/wallpapers/main2/201714/149141537658e53150a4d6f7.61218937.jpg",
    name: "",
    dataValue: "cake",
  },
];

let wrapper = document.querySelector(".wrapper");
let counter = 0;
let productArray = [];

//add products
function clickHandler() {
  let res = this.dataset ? this.dataset.value : "all";
  wrapper.innerHTML = "";
  for (let i = 0; i <= products.length - 1; i++) {
    let result = res == products[i].dataValue || res == "all";
    result &&
      render(`
	  	<div class="product-body">
			<a class="product" href="#openModal">
				<img src=${products[i].path} alt="product" />
			</a>
		</div>
	`);
  }
  productArray = document.querySelectorAll(".product-body");
  modalOpen();
}
clickHandler();

//render products + modal window
function render(elem) {
  wrapper.insertAdjacentHTML("afterbegin", elem);
}

// Modal Zone-----------------------------------------------------

//add modal window
function modalHandler(e) {
  let modalWindow = `      
		<div class="modal-body">
			<div>
				<div class="close-btn">
					<a href="#close" title="Закрыть" class="close">X</a>
				</div>
				<img src=${e.src} alt="productModal" />
				<div class="btns">
					<button class="btn prev">PREV</button>
					<button class="btn next">NEXT</button>
				</div>
			</div>
		</div>`;
  render(modalWindow);
  modalListener();
}

//listen clicks on next-prev buttons
function modalListener() {
  wrapper.querySelectorAll(".modal-body button").forEach((button) => {
    button.addEventListener("click", nextSlide);
  });

  wrapper.querySelector(".close").addEventListener("click", (e) => {
    wrapper.removeChild(wrapper.querySelector(".modal-body"));
  });
}

//render next slide
function nextSlide() {
  let i = this.classList.contains("next");
  if (i) {
    if (counter >= productArray.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
  } else {
    if (counter <= 0) {
      counter = productArray.length - 1;
    } else {
      counter--;
    }
  }
  document.querySelector(".modal-body img").src = productArray[
    counter
  ].querySelector("img").src;
}
//-----------------------------------------------------------------

//Listener on image click
function modalOpen() {
  document.querySelectorAll(".product-body").forEach((image) => {
    image.children[0].addEventListener("click", (e) => {
      e.preventDefault();
      modalHandler(e.target);
    });
  });
}

//Category buttons
document.querySelectorAll(".wrap button").forEach((button) => {
  button.addEventListener("click", clickHandler);
});
