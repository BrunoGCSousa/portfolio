// ===== PRODUCT DATA =====
const products = [
  {
    id: 1,
    name: "Camiseta Básica Premium",
    category: "camisetas",
    price: 79.90,
    oldPrice: 99.90,
    badge: "Promoção",
    description: "Camiseta básica de algodão premium com caimento perfeito. Ideal para o dia a dia com conforto e estilo.",
    sizes: ["P", "M", "G", "GG"],
    colors: ["#1a1a2e", "#e94560", "#f5f5f5", "#0f3460"],
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    icon: "fa-tshirt",
    isNew: false
  },
  {
    id: 2,
    name: "Calça Jeans Slim",
    category: "calcas",
    price: 189.90,
    oldPrice: 239.90,
    badge: "Promoção",
    description: "Calça jeans slim fit com elastano para maior conforto. Lavagem moderna e acabamento premium.",
    sizes: ["38", "40", "42", "44", "46"],
    colors: ["#2c3e6b", "#4a6fa5", "#1a1a2e"],
    bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    icon: "fa-person",
    isNew: false
  },
  {
    id: 3,
    name: "Vestido Floral Midi",
    category: "vestidos",
    price: 159.90,
    oldPrice: null,
    badge: null,
    description: "Vestido midi com estampa floral delicada. Perfeito para ocasiões especiais e eventos ao ar livre.",
    sizes: ["P", "M", "G"],
    colors: ["#e94560", "#ff9a9e", "#fecfef"],
    bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    icon: "fa-person-dress",
    isNew: true
  },
  {
    id: 4,
    name: "Jaqueta Corta-Vento",
    category: "jaquetas",
    price: 249.90,
    oldPrice: 329.90,
    badge: "Promoção",
    description: "Jaqueta corta-vento impermeável com forro interno. Ideal para dias frios e chuvosos.",
    sizes: ["P", "M", "G", "GG"],
    colors: ["#1a1a2e", "#16213e", "#e94560"],
    bg: "linear-gradient(135deg, #0c3483 0%, #a2b6df 100%)",
    icon: "fa-vest",
    isNew: false
  },
  {
    id: 5,
    name: "Camiseta Estampada Urban",
    category: "camisetas",
    price: 89.90,
    oldPrice: null,
    badge: null,
    description: "Camiseta com estampa exclusiva urbana. Tecido de alta qualidade com toque macio e durável.",
    sizes: ["P", "M", "G", "GG", "XG"],
    colors: ["#1a1a2e", "#f5f5f5", "#e94560"],
    bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    icon: "fa-tshirt",
    isNew: true
  },
  {
    id: 6,
    name: "Calça Jogger Moletom",
    category: "calcas",
    price: 129.90,
    oldPrice: null,
    badge: null,
    description: "Calça jogger em moletom felpado, confortável e estilosa para o dia a dia.",
    sizes: ["P", "M", "G", "GG"],
    colors: ["#333", "#888", "#1a1a2e"],
    bg: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    icon: "fa-person",
    isNew: false
  },
  {
    id: 7,
    name: "Vestido Longo Elegante",
    category: "vestidos",
    price: 299.90,
    oldPrice: 399.90,
    badge: "Promoção",
    description: "Vestido longo elegante para festas e eventos formais. Tecido fluido com caimento impecável.",
    sizes: ["P", "M", "G"],
    colors: ["#1a1a2e", "#e94560", "#0f3460"],
    bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    icon: "fa-person-dress",
    isNew: false
  },
  {
    id: 8,
    name: "Jaqueta Jeans Oversized",
    category: "jaquetas",
    price: 219.90,
    oldPrice: null,
    badge: null,
    description: "Jaqueta jeans oversized com detalhes vintage. Peça versátil que combina com tudo.",
    sizes: ["P", "M", "G", "GG"],
    colors: ["#4a6fa5", "#6b8dc4", "#2c3e6b"],
    bg: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
    icon: "fa-vest",
    isNew: true
  },
  {
    id: 9,
    name: "Óculos de Sol Classic",
    category: "acessorios",
    price: 149.90,
    oldPrice: 189.90,
    badge: "Promoção",
    description: "Óculos de sol com proteção UV400, design clássico e armação resistente.",
    sizes: ["Único"],
    colors: ["#1a1a2e", "#8B4513", "#333"],
    bg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    icon: "fa-glasses",
    isNew: false
  },
  {
    id: 10,
    name: "Camiseta Oversized Street",
    category: "camisetas",
    price: 99.90,
    oldPrice: null,
    badge: null,
    description: "Camiseta oversized no estilo streetwear. Corte diferenciado com algodão 100% orgânico.",
    sizes: ["M", "G", "GG", "XG"],
    colors: ["#1a1a2e", "#f5f5f5", "#555"],
    bg: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
    icon: "fa-tshirt",
    isNew: true
  },
  {
    id: 11,
    name: "Bolsa Transversal Couro",
    category: "acessorios",
    price: 199.90,
    oldPrice: 259.90,
    badge: "Promoção",
    description: "Bolsa transversal em couro sintético com compartimentos internos e alça ajustável.",
    sizes: ["Único"],
    colors: ["#1a1a2e", "#8B4513", "#c9302c"],
    bg: "linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)",
    icon: "fa-bag-shopping",
    isNew: false
  },
  {
    id: 12,
    name: "Vestido Casual Listrado",
    category: "vestidos",
    price: 139.90,
    oldPrice: null,
    badge: null,
    description: "Vestido casual com estampa listrada, leve e confortável para o verão.",
    sizes: ["P", "M", "G", "GG"],
    colors: ["#0f3460", "#e94560", "#1a1a2e"],
    bg: "linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)",
    icon: "fa-person-dress",
    isNew: false
  }
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem("modabr_cart")) || [];
let currentCategory = "todos";
let currentSearch = "";
let currentSort = "default";
let selectedProduct = null;
let modalQty = 1;
let modalSize = "";
let modalColor = "";

// ===== DOM ELEMENTS =====
const productsGrid = document.getElementById("productsGrid");
const noResults = document.getElementById("noResults");
const cartCount = document.getElementById("cartCount");
const cartSidebar = document.getElementById("cartSidebar");
const cartItems = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartFooter = document.getElementById("cartFooter");
const cartTotal = document.getElementById("cartTotal");
const cartOverlay = document.getElementById("cartOverlay");
const productModal = document.getElementById("productModal");
const checkoutModal = document.getElementById("checkoutModal");
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");
const searchInput = document.getElementById("searchInput");
const mobileSearchInput = document.getElementById("mobileSearchInput");
const sortSelect = document.getElementById("sortSelect");

// ===== FORMAT CURRENCY =====
function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// ===== RENDER PRODUCTS =====
function getFilteredProducts() {
  let filtered = products;

  if (currentCategory !== "todos") {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  if (currentSearch.trim()) {
    const query = currentSearch.toLowerCase().trim();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
  }

  switch (currentSort) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  return filtered;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  productsGrid.innerHTML = "";

  if (filtered.length === 0) {
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-id", product.id);

    let badgeHTML = "";
    if (product.badge) {
      badgeHTML = '<span class="product-badge">' + escapeHTML(product.badge) + '</span>';
    } else if (product.isNew) {
      badgeHTML = '<span class="product-badge new">Novo</span>';
    }

    card.innerHTML =
      '<div class="product-image">' +
        '<div class="product-image-bg" style="background:' + product.bg + '">' +
          '<i class="fas ' + product.icon + '"></i>' +
        '</div>' +
        badgeHTML +
        '<button class="product-wishlist" aria-label="Favoritar" data-id="' + product.id + '">' +
          '<i class="far fa-heart"></i>' +
        '</button>' +
      '</div>' +
      '<div class="product-info">' +
        '<p class="product-category">' + escapeHTML(getCategoryLabel(product.category)) + '</p>' +
        '<h3 class="product-name">' + escapeHTML(product.name) + '</h3>' +
        '<div class="product-price">' +
          '<span class="price-current">' + formatPrice(product.price) + '</span>' +
          (product.oldPrice ? '<span class="price-old">' + formatPrice(product.oldPrice) + '</span>' : '') +
        '</div>' +
      '</div>' +
      '<button class="product-card-btn" data-id="' + product.id + '">' +
        '<i class="fas fa-shopping-bag"></i> Adicionar' +
      '</button>';

    productsGrid.appendChild(card);
  });

  // Event listeners for cards
  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", function (e) {
      if (e.target.closest(".product-wishlist") || e.target.closest(".product-card-btn")) return;
      const id = parseInt(this.getAttribute("data-id"));
      openProductModal(id);
    });
  });

  document.querySelectorAll(".product-card-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const id = parseInt(this.getAttribute("data-id"));
      const product = products.find(p => p.id === id);
      if (product) {
        addToCart(product, product.sizes[0], product.colors[0], 1);
      }
    });
  });

  document.querySelectorAll(".product-wishlist").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      this.classList.toggle("liked");
      const icon = this.querySelector("i");
      icon.classList.toggle("far");
      icon.classList.toggle("fas");
    });
  });
}

function escapeHTML(str) {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function getCategoryLabel(cat) {
  var labels = {
    camisetas: "Camisetas",
    calcas: "Calças",
    vestidos: "Vestidos",
    jaquetas: "Jaquetas",
    acessorios: "Acessórios"
  };
  return labels[cat] || cat;
}

// ===== PRODUCT MODAL =====
function openProductModal(id) {
  selectedProduct = products.find(function (p) { return p.id === id; });
  if (!selectedProduct) return;

  modalQty = 1;
  modalSize = selectedProduct.sizes[0];
  modalColor = selectedProduct.colors[0];

  document.getElementById("modalImage").style.background = selectedProduct.bg;
  document.getElementById("modalImage").innerHTML = '<i class="fas ' + selectedProduct.icon + '"></i>';
  document.getElementById("modalCategory").textContent = getCategoryLabel(selectedProduct.category);
  document.getElementById("modalTitle").textContent = selectedProduct.name;

  var priceHTML = formatPrice(selectedProduct.price);
  if (selectedProduct.oldPrice) {
    priceHTML += '<span class="old-price">' + formatPrice(selectedProduct.oldPrice) + '</span>';
  }
  document.getElementById("modalPrice").innerHTML = priceHTML;
  document.getElementById("modalDescription").textContent = selectedProduct.description;
  document.getElementById("qtyValue").textContent = "1";

  // Sizes
  var sizeContainer = document.getElementById("sizeOptions");
  sizeContainer.innerHTML = "";
  selectedProduct.sizes.forEach(function (size, i) {
    var btn = document.createElement("button");
    btn.className = "size-btn" + (i === 0 ? " selected" : "");
    btn.textContent = size;
    btn.addEventListener("click", function () {
      sizeContainer.querySelectorAll(".size-btn").forEach(function (b) { b.classList.remove("selected"); });
      btn.classList.add("selected");
      modalSize = size;
    });
    sizeContainer.appendChild(btn);
  });

  // Colors
  var colorContainer = document.getElementById("colorOptions");
  colorContainer.innerHTML = "";
  selectedProduct.colors.forEach(function (color, i) {
    var btn = document.createElement("button");
    btn.className = "color-btn" + (i === 0 ? " selected" : "");
    btn.style.background = color;
    btn.setAttribute("aria-label", "Cor " + color);
    btn.addEventListener("click", function () {
      colorContainer.querySelectorAll(".color-btn").forEach(function (b) { b.classList.remove("selected"); });
      btn.classList.add("selected");
      modalColor = color;
    });
    colorContainer.appendChild(btn);
  });

  productModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  productModal.classList.remove("open");
  document.body.style.overflow = "";
  selectedProduct = null;
}

// ===== CART =====
function saveCart() {
  localStorage.setItem("modabr_cart", JSON.stringify(cart));
}

function addToCart(product, size, color, qty) {
  var existing = cart.find(function (item) {
    return item.id === product.id && item.size === size && item.color === color;
  });

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      bg: product.bg,
      icon: product.icon,
      size: size,
      color: color,
      qty: qty
    });
  }

  saveCart();
  updateCartUI();
  openCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

function updateCartItemQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    removeFromCart(index);
    return;
  }
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function getCartTotal() {
  return cart.reduce(function (sum, item) { return sum + item.price * item.qty; }, 0);
}

function getCartCount() {
  return cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
}

function updateCartUI() {
  var count = getCartCount();
  cartCount.textContent = count;

  if (cart.length === 0) {
    cartEmpty.style.display = "flex";
    cartFooter.style.display = "none";
    // Remove rendered items but keep the empty message
    var items = cartItems.querySelectorAll(".cart-item");
    items.forEach(function (item) { item.remove(); });
    return;
  }

  cartEmpty.style.display = "none";
  cartFooter.style.display = "block";

  // Remove old items
  var oldItems = cartItems.querySelectorAll(".cart-item");
  oldItems.forEach(function (item) { item.remove(); });

  cart.forEach(function (item, index) {
    var div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML =
      '<div class="cart-item-image" style="background:' + item.bg + '">' +
        '<i class="fas ' + item.icon + '"></i>' +
      '</div>' +
      '<div class="cart-item-info">' +
        '<p class="cart-item-name">' + escapeHTML(item.name) + '</p>' +
        '<p class="cart-item-details">Tam: ' + escapeHTML(item.size) + '</p>' +
        '<div class="cart-item-bottom">' +
          '<span class="cart-item-price">' + formatPrice(item.price * item.qty) + '</span>' +
          '<div class="cart-item-qty">' +
            '<button data-index="' + index + '" data-action="minus" aria-label="Diminuir">-</button>' +
            '<span>' + item.qty + '</span>' +
            '<button data-index="' + index + '" data-action="plus" aria-label="Aumentar">+</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<button class="cart-item-remove" data-index="' + index + '" aria-label="Remover">' +
        '<i class="fas fa-trash"></i>' +
      '</button>';

    cartItems.appendChild(div);
  });

  // Cart item events
  cartItems.querySelectorAll(".cart-item-qty button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var idx = parseInt(this.getAttribute("data-index"));
      var action = this.getAttribute("data-action");
      updateCartItemQty(idx, action === "plus" ? 1 : -1);
    });
  });

  cartItems.querySelectorAll(".cart-item-remove").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var idx = parseInt(this.getAttribute("data-index"));
      removeFromCart(idx);
    });
  });

  cartTotal.textContent = formatPrice(getCartTotal());
}

function openCart() {
  cartSidebar.classList.add("open");
  cartOverlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartSidebar.classList.remove("open");
  cartOverlay.classList.remove("show");
  if (!productModal.classList.contains("open")) {
    document.body.style.overflow = "";
  }
}

// ===== CATEGORY FILTER =====
function setCategory(cat) {
  currentCategory = cat;

  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("data-category") === cat);
  });

  document.querySelectorAll(".mobile-nav-link").forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("data-category") === cat);
  });

  renderProducts();
}

// ===== EVENT LISTENERS =====
document.addEventListener("DOMContentLoaded", function () {
  renderProducts();
  updateCartUI();

  // Nav category links
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      setCategory(this.getAttribute("data-category"));
    });
  });

  // Mobile nav links
  document.querySelectorAll(".mobile-nav-link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      setCategory(this.getAttribute("data-category"));
      closeMobileNav();
    });
  });

  // Category cards
  document.querySelectorAll(".category-card").forEach(function (card) {
    card.addEventListener("click", function () {
      setCategory(this.getAttribute("data-category"));
      document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Search
  searchInput.addEventListener("input", function () {
    currentSearch = this.value;
    renderProducts();
  });

  mobileSearchInput.addEventListener("input", function () {
    currentSearch = this.value;
    searchInput.value = this.value;
    renderProducts();
  });

  // Sort
  sortSelect.addEventListener("change", function () {
    currentSort = this.value;
    renderProducts();
  });

  // Cart toggle
  document.getElementById("cartToggle").addEventListener("click", openCart);
  document.getElementById("closeCart").addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);

  // Clear cart
  document.getElementById("clearCartBtn").addEventListener("click", clearCart);

  // Checkout
  document.getElementById("checkoutBtn").addEventListener("click", function () {
    closeCart();
    checkoutModal.classList.add("open");
    clearCart();
  });

  document.getElementById("checkoutClose").addEventListener("click", function () {
    checkoutModal.classList.remove("open");
    document.body.style.overflow = "";
  });

  // Product modal close
  document.getElementById("modalClose").addEventListener("click", closeProductModal);
  productModal.addEventListener("click", function (e) {
    if (e.target === productModal) closeProductModal();
  });

  // Modal quantity
  document.getElementById("qtyMinus").addEventListener("click", function () {
    if (modalQty > 1) {
      modalQty--;
      document.getElementById("qtyValue").textContent = modalQty;
    }
  });

  document.getElementById("qtyPlus").addEventListener("click", function () {
    modalQty++;
    document.getElementById("qtyValue").textContent = modalQty;
  });

  // Add to cart from modal
  document.getElementById("addToCartBtn").addEventListener("click", function () {
    if (selectedProduct) {
      addToCart(selectedProduct, modalSize, modalColor, modalQty);
      closeProductModal();
    }
  });

  // Mobile nav
  document.getElementById("menuToggle").addEventListener("click", openMobileNav);
  document.getElementById("closeMenu").addEventListener("click", closeMobileNav);
  overlay.addEventListener("click", closeMobileNav);

  // Keyboard - close modals on Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeProductModal();
      closeCart();
      closeMobileNav();
      checkoutModal.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
});

function openMobileNav() {
  mobileNav.classList.add("open");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeMobileNav() {
  mobileNav.classList.remove("open");
  overlay.classList.remove("show");
  if (!cartSidebar.classList.contains("open") && !productModal.classList.contains("open")) {
    document.body.style.overflow = "";
  }
}
