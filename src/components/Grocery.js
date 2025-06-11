const groceryItems = [
  {
    id: 7,
    name: "Tomatoes (1kg)",
    image:
      "https://www.jiomart.com/images/product/original/590003517/tomato-1-kg-product-images-o590003517-p590003517-0-202408091800.jpg?im=Resize=(420,420)",
    price: "₹25",
  },
  {
    id: 8,
    name: "Potatoes (2kg)",
    image:
      "https://www.jiomart.com/images/product/original/590003516/potato-1-kg-product-images-o590003516-p590003516-0-202408070949.jpg?im=Resize=(420,420)",
    price: "₹45",
  },
  {
    id: 9,
    name: "Cooking Oil (1L)",
    image:
      "https://www.jiomart.com/images/product/original/490000052/fortune-sunlite-refined-sunflower-oil-870-g-product-images-o490000052-p490000052-0-202504081953.jpg?im=Resize=(420,420)",
    price: "₹130",
  },
  {
    id: 10,
    name: "Paneer (200g)",
    image:
      "https://www.jiomart.com/images/product/original/490174895/amul-fresh-paneer-200-g-pack-product-images-o490174895-p490174895-0-202203170432.jpg?im=Resize=(420,420)",
    price: "₹90",
  },
  {
    id: 11,
    name: "Cheddar Cheese",
    image:
      "https://www.jiomart.com/images/product/original/491419335/d-lecta-cheddar-cheese-cubes-200-g-carton-product-images-o491419335-p590067383-0-202203170640.jpg?im=Resize=(420,420)",
    price: "₹160",
  },
  {
    id: 1,
    name: "Fresh Apples",
    image:
      "https://www.jiomart.com/images/product/original/590001723/apple-royal-gala-4-pcs-approx-500-g-700-g-product-images-o590001723-p590001723-0-202409061145.jpg?im=Resize=(420,420)",

    price: "₹120/kg",
  },
  {
    id: 2,
    name: "Organic Milk",
    image:
      "https://www.jiomart.com/images/product/original/494271401/heritage-golden-cow-milk-1-l-pouch-product-images-o494271401-p610079697-0-202410071813.jpg?im=Resize=(420,420)",
    price: "₹60/L",
  },
  {
    id: 3,
    name: "Brown Bread",
    image:
      "https://www.jiomart.com/images/product/original/490191335/modern-hi-fibre-brown-bread-400-g-pack-product-images-o490191335-p490191335-0-202502091858.jpg?im=Resize=(420,420)",
    price: "₹40",
  },
  {
    id: 4,
    name: "Basmati Rice (5kg)",
    image:
      "https://www.jiomart.com/images/product/original/490427669/india-gate-rozana-basmati-rice-5-kg-product-images-o490427669-p490427669-0-202411271349.jpg?im=Resize=(420,420)",
    price: "₹350",
  },
  {
    id: 5,
    name: "Eggs (12 pcs)",
    image:
      "https://www.jiomart.com/images/product/original/rv1k5nfwgk/socxr-egg-storage-box-stackable-egg-container-fridge-for-18-grids-shockproof-egg-carrier-holder-egg-tray-product-images-orv1k5nfwgk-p609245503-0-202406061721.jpg?im=Resize=(420,420)",
    price: "₹70",
  },
  {
    id: 6,
    name: "Bananas (1 dozen)",
    image:
      "https://www.jiomart.com/images/product/original/590008622/banana-mrl-pack-5-pcs-approx-600-g-700-g-product-images-o590008622-p590804206-0-202411141931.jpg?im=Resize=(420,420)",
    price: "₹50",
  },

  {
    id: 12,
    name: "Butter (500g)",
    image:
      "https://www.jiomart.com/images/product/original/490001387/amul-butter-100-g-carton-product-images-o490001387-p490001387-0-202203170403.jpg?im=Resize=(420,420)",
    price: "₹200",
  },
  {
    id: 13,
    name: "Corn Flakes (500g)",
    image:
      "https://www.jiomart.com/images/product/original/491586426/kellogg-s-corn-flakes-1-2-kg-product-images-o491586426-p491586426-0-202502200948.jpg?im=Resize=(420,420)",
    price: "₹150",
  },
  {
    id: 14,
    name: "Green Peas (Frozen)",
    image:
      "https://www.jiomart.com/images/product/original/491208701/good-life-green-peas-500-g-product-images-o491208701-p590034348-0-202203171012.jpg?im=Resize=(420,420)",
    price: "₹90",
  },
  {
    id: 15,
    name: "Spinach Bunch",
    image:
      "https://www.jiomart.com/images/product/original/rvvrynwuyu/green-world-mustard-spinach-brunching-onion-30-seed-with-organic-nutrients-manure-pack-of-5-product-images-orvvrynwuyu-p595868129-0-202212211213.jpg?im=Resize=(420,420)",
    price: "₹20",
  },
  {
    id: 16,
    name: "Mangoes (1kg)",
    image:
      "https://www.jiomart.com/images/product/original/590002403/alphonso-mango-6-pcs-box-approx-1300-g-1500-g-product-images-o590002403-p590002403-0-202504011510.jpg?im=Resize=(420,420)",
    price: "₹100",
  },

  {
    id: 18,
    name: "Instant Noodles (Pack of 5)",
    image:
      "https://www.jiomart.com/images/product/original/490003834/maggi-2-minute-masala-instant-noodles-560-g-product-images-o490003834-p490003834-0-202406241836.jpg?im=Resize=(420,420)",
    price: "₹65",
  },
];

const Grocery = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Grocery Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groceryItems.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-80 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-green-700 font-medium mb-2">{item.price}</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;
