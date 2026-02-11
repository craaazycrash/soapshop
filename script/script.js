const products = [
    {
        id : 1,
        image : "https://nammaonlineshop.com/cdn/shop/products/Chintol_1200x1200.png?v=1600246870",
        name : "Cinthol Original Soap",
        price : 40,
        description : "Protects skin from sun, dust, pollution, prevents acne."
    },
    {
        id : 2,
        image : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/08ce711f-889e-4604-b0f7-cf41911bd586.png",
        name : "Cinthol Lime Soap",
        price : 32,
        description : "Refreshing citrus fragrance combats sweat and body odor."
    },
    {
        id : 3,
        image : "https://chennaionlineshopping.in/image/cache/catalog/Products/personal-use/cinthol_cool-removebg-preview-800x800.png",
        name : "Cinthol Cool Soap",
        price : 40,
        description : "Menthol infused soap gives cooling refreshing experience."
    },
    {
        id : 4,
        image : "https://shodagor.com/public/uploads/all/x3MSP.png",
        name : "Cinthol Confidence Soap",
        price : 40,
        description : "Germ protection soap with long-lasting deodorant fragrance."
    },
    {
        id : 5,
        image : "https://egmedi.com/storage/product_media/100610250_4-cinthol-deo-bath-soap-999-germ-protection.webp",
        name : "Cinthol Deo Soap",
        price : 50,
        description : "Premium deodorizing soap protects from body odor daily."
    },
    {
        id : 6,
        image : "https://www.bbassets.com/media/uploads/p/xl/100006721_3-lux-soap-soft-glow-rose-vitamin-e.jpg",
        name : "Lux Soft Glow",
        price : 60,
        description : "Rose and Vitamin E soap reveals radiant glow."
    },
    {
        id : 7,
        image : "https://www.bbassets.com/media/uploads/p/l/306173_8-lux-beauty-soap-for-glowing-skin-jasmine-vitamin-e.jpg",
        name : "Lux Velvet Glow",
        price : 38,
        description : "Jasmine infused soap nourishes skin, leaves smooth glow.",
    },
    {
        id : 8,
        image : "https://www.bbassets.com/media/uploads/p/l/100006708_5-lux-international-creamy-perfection-soap-bar.jpg",
        name : "Lux Smooth & Radiant",
        price : 80,
        description : "Glutathione enriched soap brightens dull uneven skin tone.",
    },
    {
        id : 9,
        image : "https://assets.sukkurmall.com/products/lux-nourished-glow-lotus-purple-soap-130g-1768071046569-temp-20260110185050-e6f79fed.webp",
        name : "Lux Nourished Glow",
        price : 140,
        description : "Creamy lather cleanses dirt leaves fresh happy skin.",
    },
    {
        id : 10,
        image : "https://infinigoal.in/wp-content/uploads/2025/01/Lux-Sandal-100g.png",
        name : "Lux Sandal Soap",
        price : 40,
        description : "Sandalwood oil and Vitamin C deeply nourish skin.",
    },
    {
        id : 11,
        image : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/50b8fb98-590e-4334-80a9-09f98263ca2c.png",
        name : "Lux Creamy Perfection",
        price : 60,
        description : "White floral fragrance moisturizes skin keeps soft smooth.",
    },
    {
        id : 12,
        image : "https://wcnv.co.za/wp-content/uploads/2022/08/Soft-Caress1.png",
        name : "Lux Soft Care",
        price : 40,
        description : "Jasmine and silk essence nourish glowing radiant skin.",
    },
    {
        id : 13,
        image : "https://www.add2cartmw.com/cdn/shop/products/10362085EA-checkers515Wx515H_1024x1024.png?v=1660205393",
        name : "Lux Scarlet Blossom",
        price : 40,
        description : "Exotic fragrance soap leaves skin soft delicately scented.",
    },
    {
        id : 14,
        image : "https://www.bbassets.com/media/uploads/p/xl/40019053_5-dove-cream-beauty-bathing-bar-soap.jpg",
        name : "Dove Cream Bar",
        price : 60,
        description : "Gentle beauty bar prevents dryness tightness irritation.",
    },
    {
        id : 15,
        image : "https://www.bbassets.com/media/uploads/p/l/40077772_6-dove-pinkrosa-beauty-bathing-bar.jpg",
        name : "Dove Pink Radiance",
        price : 67,
        description : "Serum bar gently cleanses nourishes beautifully glowing skin.",
    },
    {
        id : 16,
        image : "https://static.vecteezy.com/system/resources/previews/054/314/798/non_2x/dove-beauty-cream-bar-soap-free-png.png",
        name : "Dove Gentle Exfoliating",
        price : 48,
        description : "pH balanced bar cleanses moisturizes smooth soft skin.",
    },
    {
        id : 17,
        image : "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/5/27/279f3c38-fa72-4996-b412-ed88ee36b0a7_soapsandbodywash_O0GPN1TBNA_MN.png",
        name : "Dove Fresh Bar",
        price : 45,
        description : "Cucumber green tea refresh moisturize smooth healthy skin.",
    },
    {
        id : 18,
        image : "https://www.bbassets.com/media/uploads/p/l/40031948_10-margo-bathing-soap-original-neem.jpg",
        name : "Margo Original Neem",
        price : 30,
        description : "Original neem soap retains therapeutic natural herbal benefits.",
    },
    {
        id : 19,
        image : "https://getbasketuk.com/978-large_default/ChandrikaSoap.jpg",
        name : "Chandrika Ayurvedic Soap ",
        price : 33,
        description : "Ayurvedic coconut oil soap ensures complete skin care.",
    },
    {
        id : 20,
        image : "https://www.bbassets.com/media/uploads/p/xl/100003862_1-mysore-sandal-bathing-soap.jpg",
        name : "Mysore Sandal Sandal",
        price : 38,
        description : "Pure sandalwood oil enhances glowing blemish free skin.",
    },
    {
        id : 21,
        image : "https://www.bbassets.com/media/uploads/p/l/306176_7-pears-pure-gentle-bathing-bar.jpg",
        name : "Pears Pure & Gentle",
        price : 50,
        description : "Glycerine soap cleanses gently for brighter glowing skin.",
    },
    {
        id : 22,
        image : "https://www.bbassets.com/media/uploads/p/l/306136_10-pears-soap-bar-soft-fresh-98-glycerin-mint-extracts.jpg",
        name : "Pears Soft & Fresh",
        price : 50,
        description : "Mint glycerine soap keeps skin fresh moisturized daily.",
    },
    {
        id : 23,
        image : "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/11/3/a2b01182-96c8-437b-a921-30abcd699457_16986_1.png",
        name : "Pears Oil clear",
        price : 50,
        description : "Lemon extracts remove excess oil glycerine retains moisture.",
    },
    {
        id : 24,
        image : "https://www.bbassets.com/media/uploads/p/l/100285404_9-himalaya-neem-turmeric-soap.jpg",
        name : "Himalaya Neem & Turmeric Soap",
        price : 36,
        description : "Neem turmeric soap purifies soothes protects skin naturally.",
    },
    {
        id : 25,
        image : "https://www.bbassets.com/media/uploads/p/l/40172801_5-himalaya-ayurveda-clear-skin-soap.jpg",
        name : "Himalaya Ayurveda Clear Skin Soap",
        price : 46,
        description : "Ayurvedic herbal soap promotes clear healthy glowing skin.",
    },
    {
        id : 26,
        image : "https://www.bbassets.com/media/uploads/p/l/40018862_4-himalaya-honey-cream-soap.jpg",
        name : "Himalaya Honey & Cream Soap",
        price : 46,
        description : "Honey milk soap deeply nourishes pampered soft skin.",
    },
    {
        id : 27,
        image : "https://www.bbassets.com/media/uploads/p/l/100014844_10-himalaya-almond-rose-soap.jpg",
        name : "Himalaya Almond and Rose Bathing Soap",
        price : 46,
        description : "Almond rose soap revitalizes skin uplifts refreshing senses.",
    },
    {
        id : 28,
        image : "https://www.bigbasket.com/media/uploads/p/xxl/100014845_3-himalaya-cucumber-coconut-soap.jpg",
        name : "Himalaya Cucumber & Coconut Soap",
        price : 46,
        description : "Cucumber coconut soap hydrates tones rejuvenates tired skin.",
    },
    {
        id : 29,
        image : "https://www.bbassets.com/media/uploads/p/l/40223834_2-hamam-soap-lemon-flower-mint-100-pure-neem-oil-fresh-skin-naturally.jpg",
        name : "Hamam Lemon Flower soap",
        price : 46,
        description : "Mint neem soap gives natural germ protection daily.",
    },
    {
        id : 30,
        image : "https://infinigoal.in/wp-content/uploads/2025/01/Hamam-Bathing-Soap-Neem-Tulsi-Aloe-Vera-100-g.png",
        name : "Hamam Pure Neem",
        price : 36,
        description : "Neem tulsi aloe protects from common skin problems.",
    },
    {
        id : 31,
        image : "https://www.santoorstayyoung.com/sites/default/files/Sandalwood_0.png",
        name : "Santoor Skin Moisturizing Soap",
        price : 48,
        description : "Sandal turmeric soap provides traditional natural beauty care.",
    },
    {
        id : 32,
        image : "https://www.santoorstayyoung.com/sites/default/files/Almond%20Soft_0.png",
        name : "Santoor Skin Softening Soap",
        price : 46,
        description : "Sandal almond milk deeply moisturizes smooth soft skin.",
    },
    {
        id : 33,
        image : "https://www.santoorstayyoung.com/sites/default/files/aloe-fresh-570x320_0.png",
        name : "Santoor Fresh Skin Soap",
        price : 56,
        description : "Lime aloe menthol recharge refreshing fresh cool skin.",
    },
    {
        id : 34,
        image : "https://www.santoorstayyoung.com/sites/default/files/Santoor-gold_0.png",
        name : "Santoor Gold Soap",
        price : 76,
        description : "Sandal saffron extracts rejuvenate youthful radiant glowing skin.",
    },
    {
        id : 35,
        image : "https://www.santoorstayyoung.com/sites/default/files/Pureflo_0.png",
        name : "Santoor Pureglo Soap",
        price : 36,
        description : "Glycerine honey almond oil nourish dry winter skin.",
    },
    {
        id : 36,
        image : "https://www.santoorstayyoung.com/sites/default/files/royal-sandal-570x320_0.png",
        name : "Santoor Royal Sandal Soap",
        price : 65,
        description : "Real sandalwood oil brightens clarifies enhances complexion naturally.",
    },
    {
        id : 37,
        image : "https://www.santoorstayyoung.com/sites/default/files/570X320_0.png",
        name : "Santoor Gram Flour Soap",
        price : 36,
        description : "Gram flour sandal soap gives blemish free skin.",
    },
    {
        id : 38,
        image : "https://www.bbassets.com/media/uploads/p/xl/100014880_1-medimix-bathing-soap-ayurvedic-classic-18-herbs.jpg",
        name : "Medimix Ayurvedic Bathing Soap",
        price : 36,
        description : "Ayurvedic eighteen herbs soap suits every skin type.",
    },
    {
        id : 39,
        image : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/f7b09621-2d71-4971-bbd3-6ef636b6e6bf.png",
        name : "Medimix Sandal Glycerine Soap",
        price : 36,
        description : "Glycerine sandal soap cleanses removes impurities effectively daily.",
    },
    {
        id : 40,
        image : "https://www.bbassets.com/media/uploads/p/l/40325774_5-dettol-skincare-soap.jpg",
        name : "Dettol Original Bathing Soap Bar",
        price : 36,
        description : "Protects skin from germs keeps healthy clean daily.",
    },
    {
        id : 41,
        image : "https://www.bbassets.com/media/uploads/p/l/100008537_18-dettol-skincare-bathing-soap-bar-with-glycerine-moisturising-protects-from-germs.jpg",
        name : "Dettol Skincare Soap",
        price : 40,
        description : "Germ protection soap forms barrier against harmful germs.",
    },
    {
        id : 42,
        image : "https://www.bbassets.com/media/uploads/p/l/307813_27-dettol-intense-cool-bathing-soap-bar-with-menthol-provides-germ-protection.jpg",
        name : "Dettol Icy Cool Soap",
        price : 40,
        description : "Menthol antibacterial soap provides cooling strong germ protection.",
    },
    {
        id : 43,
        image : "https://www.bbassets.com/media/uploads/p/l/306170_7-lifebuoy-total-germ-protection-soap-bar.jpg",
        name : "Lifebuoy Total Soap",
        price : 36,
        description : "Shields family from illnesses infections unpleasant body odours.",
    },
    {
        id : 44,
        image : "https://www.bbassets.com/media/uploads/p/l/40002021_2-lifebuoy-soap-bar-care.jpg",
        name : "Lifebuoy Care Soap Bar",
        price : 36,
        description : "Milk cream soap softens smoothens protects delicate skin.",
    },
    {
        id : 45,
        image : "https://www.bbassets.com/media/uploads/p/l/40125357_3-lifebuoy-turmeric-honey-100-better-skin-protection-soap-bar.jpg",
        name : "Lifebuoy Turmeric & Honey soap",
        price : 36,
        description : "Turmeric honey soap provides better natural skin protection.",
    },
    {
        id : 46,
        image : "https://www.bbassets.com/media/uploads/p/l/30004610_6-park-avenue-bathing-soap-luxury.jpg",
        name : "Park Avenue Bathing Soap - Luxury",
        price : 70,
        description : "Shea butter soap moisturizes rehydrates refreshes tired skin.",
    },
    {
        id : 47,
        image : "https://images.jdmagicbox.com/quickquotes/images_main/park-avenue-good-morning-soap-125g-219935908-eaiw2.png",
        name : "Park Avenue Good Morning Soap",
        price : 45,
        description : "Tea tree shea butter refresh energize clean skin.",
    },
    {
        id : 48,
        image : "https://www.bbassets.com/media/uploads/p/xl/290490_6-park-avenue-bathing-soap-cool-blue.jpg",
        name : "Park Avenue Cool Blue Soap",
        price : 36,
        description : "Menthol mineral soap gives intense cooling sensation instantly.",
    },
];

let cart = [];

function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-lg-3 col-md-4 col-sm-6 col-6';
        productCard.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <img src=${product.image} class="card-img-top p-3" alt="..." style="height: 250px; object-fit: contain;">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h5 class="card-title mb-0 fw-bold">${product.name}</h5>
                            <h5 class="text-success mb-0">₹${product.price}</h5>
                        </div>                                    
                        <p class="card-text text-muted small flex-grow-1">${product.description}</p>
                        <button class = "btn btn-dark w-100 mt-2" onclick = "addToCart(${product.id})">Add to cart</button>
                    </div>
                </div>  
        `;
        productsGrid.appendChild(productCard);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        showToast("Quantity Increased!");
        existingItem.quantity += 1;
    } else {
        showToast("Added to Cart!");
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
        });
    }
    displayCart();
}

function displayCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    const cartTotalDiv = document.getElementById('cartTotal');

    if (cart.length == 0) {
        cartItemsDiv.innerHTML = '<p class ="text-muted text-center py-4">Your cart is empty!</p>';
        cartTotalDiv.style.display = 'none';
        return;
    }

    cartItemsDiv.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className =  'cart-item-row mb-4';
        cartItem.innerHTML = `
            <div class = "d-flex justify-content-between align-items-center border-bottom py-3>
                <div class = "flex-grow-1">
                    <h6 class = "mb-1">${item.name}</h6>
                    <h6 class = "text-muted">₹${item.price}</h6>
                </div>
                <div class = "d-flex align-items-center justify-content-between gap-3">
                    <div class = "btn-group" role ="group">
                        <button class="btn btn-outline-secondary btn-sm" onclick="decreaseQuantity(${item.id})">-</button>
                        <button class="btn btn-outline-secondary btn-sm" disabled>${item.quantity}</button>
                        <button class="btn btn-outline-secondary btn-sm" onclick="increaseQuantity(${item.id})">+</button>
                    </div>
                    <div class = "fw-bold" style="min-width: 80px; text-align: right;">
                        ₹${(item.price * item.quantity)}
                    </div>
                </div>    
            </div>  
        `;
        cartItemsDiv.appendChild(cartItem);
    });
    calculateTotal();
    cartTotalDiv.style.display = 'block';   
}

function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        showToast("Quantity Increased!");
        item.quantity += 1;
        displayCart();
    }
}

function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        showToast("Quantity Decreased!");
        item.quantity -= 1;
    
        if (item.quantity === 0) {
            showToast("Item Removed!");
            cart = cart.filter(cartItem => cartItem.id !== productId);
        }
        displayCart();
    }
}

function calculateTotal() {
    let total = 0;
    cart.forEach(item =>{
        total += item.price * item.quantity;
    });
    document.getElementById('totalAmount').textContent = total;
}
displayProducts();

function showPaymentOptions() {
    document.getElementById("paymentSection").style.display = "block";
}

function selectUPI() {
    document.getElementById("upiQR").style.display = "block";
    document.getElementById("cashMessage").style.display = "none";
    document.getElementById("upiMessage").style.display = "block";


    let total = document.getElementById("totalAmount").textContent;

    let upiLink = `upi://pay?pa=noor2411974@okicici&pn=SoapShop&am=${total}&cu=INR`;

    let qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiLink)}`;

    document.getElementById("upiImage").src = qrUrl;
}


function selectCash() {
    document.getElementById("cashMessage").style.display = "block";
    document.getElementById("upiQR").style.display = "none";
    document.getElementById("upiMessage").style.display = "none";

}

function showToast(message) {
    const toastMessage = document.getElementById("toastMessage");
    toastMessage.textContent = message;

    const toastElement = document.getElementById("liveToast");
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
}
