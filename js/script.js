let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
};

let products = [
  {
    name: 'Orange',
    price: 4.99,
    image: 'https://i.ibb.co/k5bxSHk/product-1.png'
  },
  {
    name: 'Onion',
    price: 4.99,
    image: 'https://i.ibb.co/5KLdFZQ/product-2.png'
  },
  {
    name: 'Meat',
    price: 4.99,
    image: 'https://i.ibb.co/bJsfyxf/product-3.png'
  },
  {
    name: 'Cabbage',
    price: 4.99,
    image: 'https://i.ibb.co/bJLgZbL/product-4.png'
  },
  {
    name: 'Potato',
    price: 4.99,
    image: 'https://i.ibb.co/0mhMNFf/product-5.png'
  },
  {
    name: 'Avocado',
    price: 4.99,
    image: 'https://i.ibb.co/7CtVrxd/product-6.png'
  },
  {
    name: 'Carrot',
    price: 4.99,
    image: 'https://i.ibb.co/zZ2Pk2Z/product-7.png'
  },
  {
    name: 'Lemon',
    price: 4.99,
    image: 'https://i.ibb.co/hB2Zygk/product-8.png'
  },
  {
    name: 'Strawberry',
    price: 4.99,
    image: 'https://i.ibb.co/4YLNzWk/product-9.png'
  },
]

let shoppingCart = document.querySelector('.shopping-cart');
let cartItemsContainer = document.querySelector('.cart-items');
let totalPriceValue = document.querySelector('.total-price');
let cartItems = [];

document.querySelector('#cart-btn').onclick = () => {
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
};

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navbar.classList.remove('active');
};

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
};

window.onscroll = () => {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
};

var swiper = new Swiper('.product-slider', {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper('.review-slider', {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});



products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('box', 'product-card');
  productCard.innerHTML = `
    <img src="${product.image}" alt="" />
    <h3 class="product-name">${product.name}</h3>
    <div class="price">	&#2547; ${product.price}/=</div>
    <div class="stars">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
    </div>
    <button href="#" class="add-to-cart-btn">add to cart</button>
  `;
  document.querySelector('.products-container').appendChild(productCard);
  productCard.addEventListener('click', function (e) {
    if (e.target.className === "add-to-cart-btn") {
      const selectedProductName = this.querySelector('.product-name').innerText;
      const selectedProduct = products.find(product => product.name === selectedProductName);
      if (cartItems.find(item => item.name === selectedProduct.name)) {
        cartItems.map(item => {
          if (item.name === selectedProduct.name) {
            item.quantity = item.quantity + 1;
          }
        })
      } else {
        cartItems = [...cartItems, { ...selectedProduct, quantity: 1 }];
      }
      cartItemsContainer.textContent = '';
      cartItems.forEach(item => {
        const cart = document.createElement('div');
        cart.className = "box";
        cart.innerHTML = `
          <i class="fas fa-trash cart-delete-btn" onclick="handleDeleteProduct('${item.name}')"></i>
          <img src="${item.image}" alt="" />
          <div class="content">
            <h3>${item.name}</h3>
            <span class="price">	&#2547;${item.price}</span>
            <span class="quantity">qty : ${item.quantity}</span>      
          </div>
        `;
        cartItemsContainer.appendChild(cart);
        const totalPrice = cartItems.reduce((previous, next) => previous + next.price * next.quantity, 0);
        totalPriceValue.innerText = totalPrice.toFixed(2);
      })
    }
  })
});


function handleDeleteProduct(name){
  cartItems = cartItems.filter(item => item.name !== name);
  cartItemsContainer.textContent = '';
      cartItems.forEach(item => {
        const cart = document.createElement('div');
        cart.className = "box";
        cart.innerHTML = `
          <i class="fas fa-trash cart-delete-btn" onclick="handleDeleteProduct('${item.name}')"></i>
          <img src="${item.image}" alt="" />
          <div class="content">
            <h3>${item.name}</h3>
            <span class="price">	&#2547;${item.price}</span>
            <span class="quantity">qty : ${item.quantity}</span>      
          </div>
        `;
        cartItemsContainer.appendChild(cart);
      })
      const totalPrice = cartItems.reduce((previous, next) => previous + next.price * next.quantity, 0);
      totalPriceValue.innerText = totalPrice.toFixed(2);
}



