const PRODUCTS = [
    { id: 1, name: "Apple", price: 2.5 },
    { id: 2, name: "Banana", price: 1.5 },
    { id: 3, name: "Orange", price: 3 },
    { id: 4, name: "Rice", price: 1.5 },
    { id: 5, name: "Chocolate", price: 3 },
  ];
  
  const SHOPPING_CART = [
    { id: 1, quantity: 2 },
    { id: 3, quantity: 1 },
  ];
  
  function getCartTotalAmount() {
    let result = 0;
    for (let item of SHOPPING_CART) {
      let product = PRODUCTS.find((p) => p.id === item.id);
      if (product) {
        result += product.price * item.quantity;
      }
    }
    return result;
  }
  
  function addProductToCart(productId) {
    let existingItem = SHOPPING_CART.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      SHOPPING_CART.push({ id: productId, quantity: 1 });
    }
  }
  
  function removeProductFromCart(productId) {
    let existingItemIndex = SHOPPING_CART.findIndex(
      (item) => item.id === productId
    );
    if (existingItemIndex !== -1) {
      if (SHOPPING_CART[existingItemIndex].quantity >= 2) {
        SHOPPING_CART[existingItemIndex].quantity--;
      } else {
        SHOPPING_CART.splice(existingItemIndex, 1);
      }
    }
  }
  
  console.log(getCartTotalAmount()); // Output: 8
  
  // test 2 -
  addProductToCart(1);
  console.log(JSON.stringify(SHOPPING_CART)); // Output: [{"id":1,"quantity":3},{"id":3,"quantity":1}]
  
  // test 3 -
  addProductToCart(2);
  console.log(JSON.stringify(SHOPPING_CART)); // Output: [{"id":1,"quantity":3},{"id":3,"quantity":1},{"id":2,"quantity":1}]
  
  // test 4 -
  removeProductFromCart(1);
  console.log(JSON.stringify(SHOPPING_CART)); // Output: [{"id":1,"quantity":2},{"id":3,"quantity":1},{"id":2,"quantity":1}]
  
  // test 5 -
  removeProductFromCart(2);
  console.log(JSON.stringify(SHOPPING_CART)); // Output: [{"id":1,"quantity":2},{"id":3,"quantity":1}]
