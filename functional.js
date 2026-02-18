const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("header  a");
navLinks.forEach((ele) => {
  if (ele.href.includes(`${activePage}`)) {
    ele.classList.add("bg-[#4f39f6]");
  }
});

// all categories api
const loadCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();

  displayCategories(data);
};

displayCategories = (categories) => {
  const categorieContainer = document.getElementById("categorie-container");

  categories.forEach((cat) => {
    const categoriDiv = document.createElement("div");
    categoriDiv.innerHTML = `
     <button class="btn btn-sm hover:bg-[#4f39f6] hover:text-white" > ${cat}</button>
    `;
    categorieContainer.append(categoriDiv);
  });
};

// // All products api

const allProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  displayProducts(data);
};
displayProducts = (products) => {
  const productsSec = document.getElementById("productsDis");
  products.forEach((p) => {
    const ele = document.createElement("div");
    ele.innerHTML = `
  <div class="card bg-base-100  shadow-sm  my-7 md:my-4">
          <figure ">
            <img class="h-50  "
              src="${p.image}"
             
            />
          </figure>
          <div class="card-body">
            <div class="flex justify-between">
             <div class="badge badge-soft badge-primary">${p.category}</div>
              <div><span><i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i></span> <span>${p.rating.rate} (${p.rating.count})</span></div>
            </div>
            
            <p class="truncate">
              ${p.title}
            </p>
            <h1 class="font-bold"> <span>$</span>${p.price}</h1>
            <div class="card-actions justify-between ">
              <button class="btn btn-primary bg-white text-black"><i class="fa-solid fa-eye"></i> details</button>
              <button class="btn btn-primary"><i class="fa-solid fa-cart-plus"></i>Add</button>
            </div>
          </div>
        </div>
    
    `;
    productsSec.append(ele);
  });
};

allProducts();
loadCategories();
