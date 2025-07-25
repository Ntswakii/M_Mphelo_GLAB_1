const productsData = [ 
  { 
      id: 1, 
      name: "Blue T-Shirt", 
      category: "Clothing", 
      price: 150, 
      inStock: true 
  }, 

  { 
      id: 2, 
      name: "Black Jeans", 
      category: "Clothing", 
      price: 300, 
      inStock: false 
  }, 

  { 
      id: 3,
      name: "Red Sneakers", 
      category: "Shoes", 
      price: 500, 
      inStock: true 
  }, 

  { 
      id: 4,
      name: "Wireless Mouse", 
      category: "Accessories", 
      price: 250, 
      inStock: true 
  }, 

  { 
      id: 5, 
      name: "Office Chair", 
      category: "Furniture", 
      price: 1200, 
      inStock: false 
  },

  {
      id: 6,
      name: "Apple",
      category: "Fruits",
      price: 20,
      inStock: true
  },

  { 
      id: 7,
      name: "Spinach", 
      category: "Vegetables", 
      price: 100, 
      inStock: false 
  },

  { 
      id: 8,
      name: "Hat", 
      category: "Accessories", 
      price: 100, 
      inStock: true 
  },

  { 
      id: 9,
      name: "Lip balm", 
      category: "Accessories", 
      price: 70, 
      inStock: true 
  },

  { 
      id: 10,
      name: "Necklace", 
      category: "Accessories", 
      price: 200, 
      inStock: false 
  },

  { 
      id: 11,
      name: "Notebook", 
      category: "Stationery", 
      price: 45, 
      inStock: true 
  },

  { 
      id: 12,
      name: "Pen Pack", 
      category: "Stationery", 
      price: 30, 
      inStock: true 
  },

  { 
      id: 13,
      name: "Laptop Bag", 
      category: "Accessories", 
      price: 400, 
      inStock: false 
  },

  { 
      id: 14,
      name: "Toothpaste", 
      category: "Toiletries", 
      price: 35, 
      inStock: true 
  },

  { 
      id: 15,
      name: "Shampoo", 
      category: "Toiletries", 
      price: 80, 
      inStock: true 
  },

  { 
      id: 16,
      name: "Tomatoes", 
      category: "Vegetables", 
      price: 25, 
      inStock: true 
  },

  { 
      id: 17,
      name: "Running Shoes", 
      category: "Shoes", 
      price: 600, 
      inStock: false 
  },

  { 
      id: 18,
      name: "Charger", 
      category: "Electronics", 
      price: 180, 
      inStock: true 
  },

  { 
      id: 19,
      name: "Phone Case", 
      category: "Accessories", 
      price: 120, 
      inStock: true 
  },

  { 
      id: 20,
      name: "Hair Dryer", 
      category: "Electronics", 
      price: 550, 
      inStock: true 
  },

  { 
      id: 21,
      name: "Water Bottle", 
      category: "Home", 
      price: 90, 
      inStock: true 
  },

  { 
      id: 22,
      name: "Alarm Clock", 
      category: "Electronics", 
      price: 320, 
      inStock: false 
  },

  { 
      id: 23,
      name: "Frying Pan", 
      category: "Kitchen", 
      price: 250, 
      inStock: true 
  },

  { 
      id: 24,
      name: "Desk Lamp", 
      category: "Furniture", 
      price: 300, 
      inStock: true 
  },

  { 
      id: 25,
      name: "Mirror", 
      category: "Home", 
      price: 350, 
      inStock: true 
  },

  { 
      id: 26,
      name: "Cushion", 
      category: "Home", 
      price: 180, 
      inStock: true 
  },

  { 
      id: 27,
      name: "Socks", 
      category: "Clothing", 
      price: 50, 
      inStock: false 
  },

  { 
      id: 28,
      name: "Rice", 
      category: "Groceries", 
      price: 120, 
      inStock: true 
  },

  { 
      id: 29,
      name: "Oats", 
      category: "Groceries", 
      price: 60, 
      inStock: true 
  },

  { 
      id: 30,
      name: "Orange Juice", 
      category: "Beverages", 
      price: 90, 
      inStock: false 
  },

  { 
      id: 31,
      name: "Blanket", 
      category: "Home", 
      price: 700, 
      inStock: true 
  },

  { 
      id: 32,
      name: "Headphones", 
      category: "Electronics", 
      price: 900, 
      inStock: false 
  },

  { 
      id: 33,
      name: "Scarf", 
      category: "Clothing", 
      price: 140, 
      inStock: true 
  },

  { 
      id: 34,
      name: "Cup", 
      category: "Kitchen", 
      price: 30, 
      inStock: true 
  },

  { 
      id: 35,
      name: "Notebook Stand", 
      category: "Furniture", 
      price: 600, 
      inStock: false 
  },

  { 
      id: 36,
      name: "Smart Watch", 
      category: "Electronics", 
      price: 1500, 
      inStock: true 
  },

  { 
      id: 37,
      name: "Notebook", 
      category: "Stationery", 
      price: 40, 
      inStock: true 
  },

  { 
      id: 38,
      name: "Avocado", 
      category: "Fruits", 
      price: 35, 
      inStock: true 
  },

  { 
      id: 39,
      name: "Carrot", 
      category: "Vegetables", 
      price: 40, 
      inStock: true 
  },

  { 
      id: 40,
      name: "Desk Organizer", 
      category: "Furniture", 
      price: 220, 
      inStock: false 
  },

  { 
      id: 41,
      name: "Stapler", 
      category: "Stationery", 
      price: 70, 
      inStock: true 
  },

  { 
      id: 42,
      name: "Plates (Set of 4)", 
      category: "Kitchen", 
      price: 300, 
      inStock: true 
  },

  { 
      id: 43,
      name: "Cutlery Set", 
      category: "Kitchen", 
      price: 250, 
      inStock: false 
  },

  { 
      id: 44,
      name: "Curtains", 
      category: "Home", 
      price: 500, 
      inStock: true 
  },

  { 
      id: 45,
      name: "Mat", 
      category: "Home", 
      price: 280, 
      inStock: true 
  },

  { 
      id: 46,
      name: "Hand Sanitizer", 
      category: "Toiletries", 
      price: 45, 
      inStock: true 
  },

  { 
      id: 47,
      name: "Toilet Paper (6 Pack)", 
      category: "Toiletries", 
      price: 60, 
      inStock: true 
  },

  { 
      id: 48,
      name: "Laundry Basket", 
      category: "Home", 
      price: 350, 
      inStock: true 
  },

  { 
      id: 49,
      name: "Storage Box", 
      category: "Home", 
      price: 220, 
      inStock: false 
  },

  { 
      id: 50,
      name: "Dustbin", 
      category: "Home", 
      price: 180, 
      inStock: true 
  },

  { 
    id: 51,
    name: "Gucci handbag", 
    category: "Accessories", 
    price: 170000, 
    inStock: true 
  },

  { 
    id: 52,
    name: "Louis Vuitton Sandals", 
    category: "Shoes", 
    price: 100000, 
    inStock: true 
  }
];

export default productsData;