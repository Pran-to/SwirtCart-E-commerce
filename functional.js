const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("header  a");
navLinks.forEach((ele) => {
  if (ele.href.includes(`${activePage}`)) {
    ele.classList.add("bg-[#4f39f6]");
  }
});

const toggleActiveButton = (clickedBtn) => {
  const allButtons = document.querySelectorAll(" .category-btn");
  allButtons.forEach((btn) => {
    btn.classList.remove("bg-[#4f39f6]", "text-white");
  });
  clickedBtn.classList.add("bg-[#4f39f6]", "text-white");
};

// all categories api
const loadCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();

  displayCategories(data);
};

// // All products api

const allProducts = async () => {
  const productsSec = document.getElementById("productsDis");
  productsSec.innerHTML = "";
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  displayProducts(data);
};

//  display category
const displayCategories = (categories) => {
  const categorieContainer = document.getElementById("categorie-container");

  categories.forEach((cat) => {
    const categoriDiv = document.createElement("div");
    const button = document.createElement("button");
    button.className =
      "btn btn-sm hover:bg-[#4f39f6] hover:text-white category-btn";
    button.innerText = cat;
    button.addEventListener("click", (e) => {
      toggleActiveButton(e.target);
      categoryData(cat);
    });

    categoriDiv.appendChild(button);
    categorieContainer.append(categoriDiv);
  });
};

// category data api
const categoryData = (cate) => {
  const productsSec = document.getElementById("productsDis");
  productsSec.innerHTML = "";

  fetch(`https://fakestoreapi.com/products/category/${cate}`)
    .then((res) => res.json())
    .then((data) => displayProducts(data))
    .catch((error) => console.error("Error fetching data:", error));
};

//  load all products
displayProducts = (products) => {
  const productsSec = document.getElementById("productsDis");
  productsSec.innerHTML = "";
  products.forEach((p) => {
    const ele = document.createElement("div");
    ele.innerHTML = `
      <div class="card bg-base-100 shadow-sm my-7 md:my-4 h-full">
          <figure class="px-5 pt-5 bg-white">
            <img class="h-48 object-contain" src="${p.image}" alt="Product Image" />
          </figure>
          <div class="card-body">
            <div class="flex justify-between">
             <div class="badge badge-soft badge-primary">${p.category}</div>
              <div><span><i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i></span> <span>${p.rating.rate} (${p.rating.count})</span></div>
            </div>
            
            <p class="truncate font-semibold" title="${p.title}">
              ${p.title}
            </p>
            <h1 class="font-bold text-lg text-[#4f39f6]"> <span>$</span>${p.price}</h1>
            <div class="card-actions justify-between mt-auto pt-4">
              <button class="btn bg-white text-black border-gray-300 hover:bg-gray-100 shadow-sm details-btn"><i class="fa-solid fa-eye"></i> Details</button>
              <button class="btn btn-primary bg-[#4f39f6] text-white border-none"><i class="fa-solid fa-cart-plus"></i> Add</button>
            </div>
          </div>
        </div>
    `;
    const detailsBtn = ele.querySelector(".details-btn");
    detailsBtn.addEventListener("click", () => {
      showDetailsModal(p);
    });

    productsSec.append(ele);
  });
};

// Trending products api & display
const loadTrendingProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    const topTrending = data
      .sort((a, b) => b.rating.rate - a.rating.rate)
      .slice(0, 3);

    const trendingSec = document.getElementById("trending");
    trendingSec.innerHTML = "";
    trendingSec.className = "grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-10";

    topTrending.forEach((p) => {
      const ele = document.createElement("div");
      ele.innerHTML = `
        <div class="card bg-base-100 shadow-sm h-full">
          <figure class="px-5 pt-5">
            <img class="h-48 object-contain" src="${p.image}" alt="Product Image" />
          </figure>
          <div class="card-body">
            <div class="flex justify-between">
              <div class="badge badge-soft badge-primary">${p.category}</div>
              <div>
                <span><i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i></span> 
                <span>${p.rating.rate} (${p.rating.count})</span>
              </div>
            </div>
            
            <p class="truncate font-semibold" title="${p.title}">
              ${p.title}
            </p>
            <h1 class="font-bold text-lg text-[#4f39f6]"> <span>$</span>${p.price}</h1>
            <div class="card-actions justify-between mt-auto pt-4">
              <button class="btn details-btn bg-white text-black border-gray-300 hover:bg-gray-100 shadow-sm"><i class="fa-solid fa-eye"></i> Details</button>
              <button class="btn btn-primary bg-[#4f39f6] text-white border-none"><i class="fa-solid fa-cart-plus"></i> Add</button>
            </div>
          </div>
        </div>
      `;
      const detailsBtn = ele.querySelector(".details-btn");
      detailsBtn.addEventListener("click", () => {
        showDetailsModal(p);
      });
      trendingSec.append(ele);
    });
  } catch (error) {
    console.error("Error fetching trending data:", error);
  }
};

// show  a modal
const showDetailsModal = (product) => {
  let modal = document.getElementById("product_modal");
  if (!modal) {
    modal = document.createElement("dialog");
    modal.id = "product_modal";
    modal.className = "modal modal-bottom sm:modal-middle";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-box relative">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      
      <figure class="flex justify-center p-5 bg-white rounded-lg mb-4">
        <img class="h-56 object-contain" src="${product.image}" alt="${product.title}" />
      </figure>
      
      <h3 class="font-bold text-xl text-gray-800">${product.title}</h3>
      
      <div class="flex justify-between items-center my-3">
         <div class="badge badge-primary badge-soft p-3">${product.category}</div>
         <div>
            <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i>
            <span class="font-semibold text-gray-700">${product.rating.rate} (${product.rating.count} reviews)</span>
         </div>
      </div>
      
      <p class="py-4 text-gray-600 text-sm leading-relaxed">${product.description}</p>
      
      <div class="flex flex-col sm:flex-row justify-between items-center mt-4 pt-4 border-t border-gray-200">
         <h2 class="text-3xl font-bold text-[#4f39f6] mb-4 sm:mb-0">$${product.price}</h2>
         <div class="space-x-2 flex">
            <button class="btn btn-outline border-[#4f39f6] text-[#4f39f6] hover:bg-[#4f39f6] hover:text-white">
              <i class="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
            <button class="btn bg-[#4f39f6] text-white border-none hover:bg-blue-700">Buy Now</button>
         </div>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  `;

  modal.showModal();
};

allProducts();
loadCategories();
loadTrendingProducts();
