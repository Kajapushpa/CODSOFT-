const menuData = {
  Tiffin: [
    { name: "Masala Dosa", price: 60, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.jpg", desc: "Crispy dosa with potato filling" },
    { name: "Idli Sambar", price: 40, img: "https://media.istockphoto.com/id/184721030/photo/sambar-with-idli-indian-dish.jpg?s=612x612&w=0&k=20&c=G1Ee4Yc6m-LOzU6g3IP9rjotMvQTPpt7ee7kmUAIz5M=", desc: "Soft idlis served with hot sambar" },
    { name: "Uttapam", price: 55, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX023BI4Z2QetVedGmZ8kMyrK0gb6WK3k2rQ&s", desc: "South Indian pancake with veggies" },
    { name: "Upma", price: 35, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdrtTmgN4p0sTKdpAJNDxj6qIv1UKsq-3DdQ&s", desc: "Semolina breakfast with ghee" },
    { name: "Pesarattu", price: 50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj2vn-4D-fSz322WZ-dYSgyS2cPwZTwYYccg&s", desc: "Moong dal dosa with chutney" },
    { name: "Poha", price: 30, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6A-lILJOr4XPhJhI7vqPj21B8icW6t3A28A&s", desc: "Flattened rice with spices" },
    { name: "Vada", price: 25, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nh-s8Lb7mfrzUFU47O_luIaT-hDaqEIXLw&s", desc: "Crispy fried lentil snack" },
    { name: "Poori Bhaji", price: 60, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq9yfvyKdPugqu6_Hqaf3Dvbnx9VmPiJeZ8w&s", desc: "Fluffy poori with potato curry" },
    { name: "Chole Kulche", price: 65, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XzGh_8XyuUvolJxjjFqZqCH4qZOlqRnjzg&s", desc: "Spicy chole with soft kulchas" },
    { name: "Bread Omelette", price: 40, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1Yt0sk088a9nTRoRw-Y3PFrLYCzkXARtRw&s", desc: "Quick tiffin with egg toast" },
    { name: "Chapathi", price: 65, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tBGtWNAcTKTas-tkKYJ0_3dzgce30gyZzA&s", desc: "Fluffy roti with potato curry" },
    { name: "Parota", price: 80, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9uOXfhpWgVq41VUCg900n5ZTAAbNmH3pNNw&s", desc: "Parota with veg curry + onions" },

  ],
  Lunch: [
    { name: "Veg Thali", price: 120, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXe0R-xsqQKhtS-fSJzeeUuqzvLwXAk2cGIw&s", desc: "Complete meal with roti, rice, dal" },
    { name: "Paneer Curry", price: 90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcR0i_xrORo0Qii3eJLnN4Kl5ep0LapqXZOw&s", desc: "Paneer cooked in rich gravy" },
    { name: "Dal Fry", price: 70, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtPwGXgMgKzgNfNQJruucd8rdEPW2aq8EB0g&s", desc: "Yellow dal tempered with spices" },
    { name: "Jeera Rice", price: 60, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREVg1j2Om4aDgQ2BhJlJgyyLw29uvhfBYbMQ&s", desc: "Cumin-flavored basmati rice" },
    { name: "Mix Veg", price: 80, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxsMXjVQgPr7PT78rGI6-KXdSgOCrgSSDUg&s", desc: "Seasonal vegetables curry" },
    { name: "Rajma Chawal", price: 85, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Mks2ZeHU1cbSbYzhrLeLKAGB6mahBc_Z6w&s", desc: "Kidney beans with rice" },
    { name: "Curd Rice", price: 55, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-CQ4XbI998vI5a1UdGgooA-gWGvRay4Oxg&s", desc: "Cool and refreshing curd rice" },
    { name: "Roti Set", price: 50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwK1-m_fwHuIjsNAftseoIAObi4N226JLXg&s", desc: "4 rotis with curry" },
    { name: "Biryani Bowl", price: 110, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qiUUwjOkr4Xmdxb0wUv7j3wlSTlygehdcg&s", desc: "Mild spiced veg biryani" },
    { name: "Kadhi Pakora", price: 65, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRslkYH2UNMA6hr_S511D8Gdwi8P6HWfp_d3w&s", desc: "Gram flour dumplings in kadhi" }
  ],
  Dinner: [
    { name: "Paneer Biryani", price: 140, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbtsCbAF7sQDGMChd2muVnNMJyuzWF-gx9KQ&s", desc: "Marinated paneer in biryani" },
    { name: "Chole Bhature", price: 100, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf4nZ-lpMDl38vIokK9gu66gNofIzjndAtdQ&s", desc: "Spicy chole with fried bhature" },
    { name: "Paratha Combo", price: 90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUC1P0Wl5cYObeejJyi7GdJ-mWXXaZHsthQ&s", desc: "Stuffed paratha with butter" },
    { name: "Veg Fried Rice", price: 85, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBnEVVDvZ84p8VOaIYdLsrLqe8dkeSpfcVQ&s", desc: "Chinese-style rice with veg" },
    { name: "Aloo Gobi", price: 75, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Xo0vXS_W2D9RyIALIucHc9956dSWLCPg1Q&s", desc: "Potato-cauliflower curry" },
    { name: "Kofta Curry", price: 95, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNev1qNswWW-dbUvU_AEN-70GfutHSz-iRag&s", desc: "Fried koftas in gravy" },
    { name: "Dal Makhani", price: 90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7PrqeI2wx9ZZboXP-Og-EPJHJ4u8dGg2Iw&s", desc: "Creamy black lentils" },
    { name: "Chapati Roll", price: 60, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkLz2zMrLsDh59CGd_tzVlMcU7fpkB_GpRNw&s", desc: "Stuffed chapati roll" },
    { name: "Veg Noodles", price: 80, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_pI-OvNpLTdxB0rBzN0rEiEbS5zEe7qHJA&s", desc: "Indian-style veg noodles" },
    { name: "Kichdi", price: 65, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1z2Gvkknys7EDuQ77cBRUGLx38_IUS5Yug&s", desc: "Simple moong dal kichdi" }
  ],
  Drinks: [
    { name: "Lassi", price: 50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbYAMvpzq7bkNfWKxxHtqgd6HKl0V_shFVg&s", desc: "Chilled sweet lassi" },
    { name: "Cold Coffee", price: 60, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1YS90b-MI-7cE_IbwbEaDYKgTl7GabrkRcg&s", desc: "Iced coffee drink" },
    { name: "Mango Juice", price: 40, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQE12l2LMKRL06qxttiCIRfSrmlO-e5mCTnw&s", desc: "Sweet mango pulp drink" },
    { name: "Masala Soda", price: 30, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5DO5CbJnJ6j_uw3gyN22FEbRHOHu4UJIdg&s", desc: "Fizz drink with masala" },
    { name: "Buttermilk", price: 20, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPjuXpCJUFcP27X1JucrT6wkdl3RTX7SROw&s", desc: "Chilled chaas" },
    { name: "Green Tea", price: 25, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh6p-PBwQrMng7-zdrMkmqSB0LAWlYEU0GA&s", desc: "Refreshing green tea" },
    { name: "Rose Milk", price: 45, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wSVqz6Atc82IppDqleGeGlf3Q12y7vaVuA&s", desc: "Chilled pink rose milk" },
    { name: "Filter Coffee", price: 30, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkSTGps6lczwgTrL73cfSjmcd_u4anzbjhg&s", desc: "South Indian strong coffee" },
    { name: "Tea", price: 15, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0QjOtu7SCCv1vmQO0ZdjKN3jUReHb1Bemg&s", desc: "South Indian strong chai" },
    { name: "Coconut Water", price: 35, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8sqHKgX2jXwHTPnzcC9tH89rXAuBTjYN8g&s", desc: "Natural and healthy drink" },
    { name: "Energy Drink", price: 60, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbZtEuZx2fktlmk3Shc-MsSo5baXURWUOow&s", desc: "Boosts energy levels" }
  ],
  Desserts: [
    { name: "Gulab Jamun", price: 45, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQ5ajWr8uH8ucnNcpqa9irsm0aTGEDZN4hw&s", desc: "Sweet syrup balls" },
    { name: "Rasgulla", price: 40, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqIRPDbWiNyy7knLMfBz8GPuNRK49PQtnfGg&s", desc: "Soft spongy syrup balls" },
    { name: "Kaju Katli", price: 55, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYGmNvy_KOUdzoNBvrUEjIQ4T-fgcoI_92uA&s", desc: "Cashew sweet barfi" },
    { name: "Ladoo", price: 30, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9lkXB1yVduBuzZpoly8_CgQ29nhJKMc5cTQ&s", desc: "Round desi sweets" },
    { name: "Jalebi", price: 35, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBuU7wu3zO7rJKjdx68cvQ0OM8XCeWryi4g&s", desc: "Crispy sugary spirals" },
    { name: "Halwa", price: 40, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfY1JsPWM7pUPhOYXkTX74fgYKG-iQ86j3iw&s", desc: "Ghee sweet semolina" },
    { name: "Rabri", price: 50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6q_zHiNEN7ve4UFXtcX4rYPY1i0-JEoWmQ&s", desc: "Thick condensed sweet" },
    { name: "Doodh Peda", price: 30, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5-C0KTJvLL0SR1weH1HitXl2d4dJi06HLg&s", desc: "Milky round delight" },
    { name: "Barfi", price: 45, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEMTPQokKKEk4f2pcRdrQlnCDxY-t24b9dJg&s", desc: "Solid milk sweet" },
    { name: "Kheer", price: 50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6K9nr9K05Xi_VN8kuNfT6TFsC8HqQ7-zXPg&s", desc: "Rice pudding" }
  ],
  Chocolates: [
    { name: "Dairy Milk", price: 30, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKGYYb1K0FuHVW4qKFRp0NJ6P90HVwJhPNg&s", desc: "Classic bar" },
    { name: "Perk", price: 15, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXWYYaVSBzmjCnZFcyJCmFR8ERKcJVMr4OA&s", desc: "Wafer chocolate" },
    { name: "KitKat", price: 20, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZc_dtev5rw7uCsF8j7LcV07tnTwK-KBAEg&s", desc: "Break-time bar" },
    { name: "5 Star", price: 20, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZa8dOlYa2-2cjlnokq0B8BZqwh-GudMAWA&s", desc: "Chewy chocolate" },
    { name: "Munch", price: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWHeMyQJ9M9Ayqfl3CEYhIIt1e3zZzORCDQ&s", desc: "Crunchy delight" },
    { name: "Ferrero Rocher", price: 60, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKRm2Py2sSUBPnwSQVYcK3kczB1UW0-x6qzA&s", desc: "Premium hazelnut chocolate" },
    { name: "Snickers", price: 25, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7s2qAdgPEftwYnsQpEnI31mq-hzu5KHVAA&s", desc: "Nutty energy bar" },
    { name: "Temptations", price: 35, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCD-6wmx0-NpATXAw4_UnZoLzLoYLoz4QS-g&s", desc: "Luxury choco block" },
    { name: "Silk", price: 50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRhvoNQmx1gGLmknphsU35xYPXX8nPuFxxyA&s", desc: "Smooth and creamy" },
    { name: "Hershey’s", price: 45, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7K5ewiU6beoj4W-4840GfYKtyR_ipP6AVuA&s", desc: "American delight" }
  ],
  "Ice Cream": [
    { name: "Vanilla", price: 40, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVm2huWX74Pnpztoloxm8GGoOwva-RBWXP2w&s", desc: "Classic creamy scoop" },
    { name: "Chocolate", price: 45, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_CXipj7coguE-J25NdIPNSvvImPLFCuGDQ&s", desc: "Rich chocolate delight" },
    { name: "Strawberry", price: 45, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCcXnZWvkQwEDW84WnpM-zpb8Cqpi1Osv9Og&s", desc: "Pink berry scoop" },
    { name: "Mango", price: 50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2mfiuh93uNgp-cCfASnwvm4NkmXUKaMFmg&s", desc: "Seasonal favorite" },
    { name: "Butterscotch", price: 50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpf9bV-eKws1NoqEnpG_XxsHzwV9ewvA5mUg&s", desc: "Caramel crunch" },
    { name: "Black Currant", price: 55, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRipVYKJ0aKbyI0f2oKT5IUr-aNMSzlMG5KQ&s", desc: "Purple fruity chill" },
    { name: "Choco Chips", price: 60, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgcLxtSIJ9qd4Si6l8-341dGjVBVx4bRlc5g&s", desc: "Crunchy bites in cream" },
    { name: "Kulfi", price: 45, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzAzGxTGZv90PbqdOXaT3DfYEMmG2IdqQJAg&s", desc: "Traditional Indian delight" },
    { name: "Cone", price: 30, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZreC9ww7Jdy-bYy9_toveTyles4sA1P_mA&s", desc: "Waffle cone with ice cream" },
    { name: "Sundae", price: 70, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_mPW12x1QceitZNExwmqEbCXQ4Cgbq84fw&s", desc: "Layered ice cream dessert" }
  ]
};

menuData.All = Object.values(menuData).flat();

const tabsContainer = document.getElementById("categoryTabs");
const menuContainer = document.getElementById("menuContainer");
const searchInput = document.getElementById("searchInput");
let currentCategory = "All";

function renderTabs() {
  Object.keys(menuData).forEach(category => {
    const btn = document.createElement("button");
    btn.textContent = category;
    btn.onclick = () => {
      currentCategory = category;
      setActiveTab(category);
      displayMenu(menuData[category]);
    };
    tabsContainer.appendChild(btn);
  });
}

function setActiveTab(cat) {
  [...tabsContainer.children].forEach(btn =>
    btn.classList.toggle("active", btn.textContent === cat)
  );
}

function displayMenu(items) {
  const keyword = searchInput.value.toLowerCase();
  const filtered = items.filter(item => item.name.toLowerCase().includes(keyword));
  menuContainer.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = "menu-grid";

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
    `;
    card.onclick = () => showModal(item);
    grid.appendChild(card);
  });

  menuContainer.appendChild(grid);
}

function showModal(item) {
  document.getElementById("modalImage").src = item.img;
  document.getElementById("modalName").textContent = item.name;
  document.getElementById("modalDesc").textContent = item.desc;
  document.getElementById("modalPrice").textContent = `Price: ₹${item.price}`;
  document.getElementById("itemModal").style.display = "block";
}

function closeModal() {
  document.getElementById("itemModal").style.display = "none";
}

function addToCart() {
  alert("Item added to cart!");
}

searchInput.addEventListener("input", () => {
  if (currentCategory) {
    displayMenu(menuData[currentCategory]);
  }
});

renderTabs();
setActiveTab("All");
displayMenu(menuData["All"]);
