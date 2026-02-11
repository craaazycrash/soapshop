const products = [
    {
        id : 1,
        image : "https://nammaonlineshop.com/cdn/shop/products/Chintol_1200x1200.png?v=1600246870",
        name : "Cinthol Original Soap",
        price : 40,
        description : "A trusted, high-TFM (Grade 1) soap that protects against sun, dust, and pollution, helping to prevent acne, rashes, and blemishes."
    },
    {
        id : 2,
        image : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/08ce711f-889e-4604-b0f7-cf41911bd586.png",
        name : "Cinthol Lime Soap",
        price : 32,
        description : "Known for its refreshing citrus fragrance, making it ideal for combating body odor and sweat during summer."
    },
    {
        id : 3,
        image : "https://chennaionlineshopping.in/image/cache/catalog/Products/personal-use/cinthol_cool-removebg-preview-800x800.png",
        name : "Cinthol Cool Soap",
        price : 40,
        description : "Infused with menthol for a cooling, revitalizing, and refreshing bathing experience."
    },
    {
        id : 4,
        image : "https://shodagor.com/public/uploads/all/x3MSP.png",
        name : "Cinthol Confidence Soap",
        price : 40,
        description : "A soap which has the power of germ protection with an amazing deo fragrance"
    },
    {
        id : 5,
        image : "https://egmedi.com/storage/product_media/100610250_4-cinthol-deo-bath-soap-999-germ-protection.webp",
        name : "Cinthol Deo Soap",
        price : 50,
        description : "A deodorizing bathing soap with premium fragrance that protects you from body odour all day long."
    },
    {
        id : 6,
        image : "https://www.bbassets.com/media/uploads/p/xl/100006721_3-lux-soap-soft-glow-rose-vitamin-e.jpg",
        name : "Lux Soft Glow",
        price : 60,
        description : "New Lux Soft Glow Rose & Vitamin E Soap is thoughtfully crafted to reveal a soft, moonlit radiance."
    },
    {
        id : 7,
        image : "https://www.bbassets.com/media/uploads/p/l/306173_8-lux-beauty-soap-for-glowing-skin-jasmine-vitamin-e.jpg",
        name : "Lux Velvet Glow",
        price : 38,
        description : "Infused with 7 beauty ingredients, combining the essence of jasmine flower with its enchanting fragrance, and with Vitamin E known to moisturise and nourish skin, this bar leaves your skin soft, smooth, and glowing.",
    },
    {
        id : 8,
        image : "https://www.bbassets.com/media/uploads/p/l/100006708_5-lux-international-creamy-perfection-soap-bar.jpg",
        name : "Lux Smooth & Radiant",
        price : 80,
        description : "This indulgent beauty bar is enriched with Glutathione, a powerful antioxidant known for its brightening properties. It helps reduce dullness and uneven skin tone, leaving your skin looking visibly luminous with every use.",
    },
    {
        id : 9,
        image : "https://assets.sukkurmall.com/products/lux-nourished-glow-lotus-purple-soap-130g-1768071046569-temp-20260110185050-e6f79fed.webp",
        name : "Lux Nourished Glow",
        price : 140,
        description : "New Lux with rich, creamy lather, washes away dirt on skin's surface to reveal happy, fresh skin after every shower. Soap is suitable for the whole family.",
    },
    {
        id : 10,
        image : "https://infinigoal.in/wp-content/uploads/2025/01/Lux-Sandal-100g.png",
        name : "Lux Sandal Soap",
        price : 40,
        description : "This bathing soap is a perfect blend of 100% pure sandalwood oil and Vitamin C, providing a luxurious experience that deeply nourishes and rejuvenates your skin.",
    },
    {
        id : 11,
        image : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/50b8fb98-590e-4334-80a9-09f98263ca2c.png",
        name : "Lux Creamy Perfection",
        price : 60,
        description : "Infused with the fragrance of delicate white florals and Swiss moisturisers.Get soft moisturized skin",
    },
    {
        id : 12,
        image : "https://wcnv.co.za/wp-content/uploads/2022/08/Soft-Caress1.png",
        name : "Lux Soft Care",
        price : 40,
        description : "Lux Soft Care Beauty Soap is infused with jasmine and silk essence oil that nourishes your skin while you cleanse, leaving it with a luxurious glow.",
    },
    {
        id : 13,
        image : "https://www.add2cartmw.com/cdn/shop/products/10362085EA-checkers515Wx515H_1024x1024.png?v=1660205393",
        name : "Lux Scarlet Blossom",
        price : 40,
        description : "A perfumed soap designed to provide a luxurious, fragrant, and moisturizing bath experience. Infused with exotic notes of Egyptian violet and elemi oil, it creates a rich lather that leaves skin feeling soft, smooth, and delicately scented for hours. ",
    },
    {
        id : 14,
        image : "https://www.bbassets.com/media/uploads/p/xl/40019053_5-dove-cream-beauty-bathing-bar-soap.jpg",
        name : "Dove Cream Bar",
        price : 60,
        description : "It’s not a soap – it’s a beauty bar Washing with regular soap can cause the skin to feel dry tight and irritated as some cleansing ingredients strip the skin of essential nutrients.",
    },
    {
        id : 15,
        image : "https://www.bbassets.com/media/uploads/p/l/40077772_6-dove-pinkrosa-beauty-bathing-bar.jpg",
        name : "Dove Pink Radiance",
        price : 67,
        description : "A Serum Bar combines gentle cleansing with nourishing care for beautifully soft, glowing skin. Enriched with moisturising cream and a delicate floral fragrance, it helps maintain the skin’s natural moisture while cleansing effectively. ",
    },
    {
        id : 16,
        image : "https://static.vecteezy.com/system/resources/previews/054/314/798/non_2x/dove-beauty-cream-bar-soap-free-png.png",
        name : "Dove Gentle Exfoliating",
        price : 48,
        description : "The Beauty Bar is formulated with our pH balanced formula and ¼ moisturizing cream to gently cleanse and nourish your skin for soft, smooth results. ",
    },
    {
        id : 17,
        image : "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/5/27/279f3c38-fa72-4996-b412-ed88ee36b0a7_soapsandbodywash_O0GPN1TBNA_MN.png",
        name : "Dove Fresh Bar",
        price : 45,
        description : "Dove Fresh Moisture Beauty Bar combines the refreshing scent of cucumber and green tea with gentle cleansers and 1/4 Moisturising Cream so you can enjoy the look and feel of soft, smooth, and moisturized skin. ",
    },
    {
        id : 18,
        image : "https://www.bbassets.com/media/uploads/p/l/40031948_10-margo-bathing-soap-original-neem.jpg",
        name : "Margo Original Neem",
        price : 30,
        description : "Margo Original Neem is made from 100% original neem through a unique procedure ensuring the therapeutic benefits of neem are retained. It is infused with Vitamin E for added moisturising.",
    },
    {
        id : 19,
        image : "https://getbasketuk.com/978-large_default/ChandrikaSoap.jpg",
        name : "Chandrika Ayurvedic Soap ",
        price : 33,
        description : "Chandrika has made this soap bar using ayurvedic herbs soaked in double* the amount of pure Coconut oil. With the goodness of Ayurveda's best-kept skin secrets, this bathing bar soap helps ensure total skin care.",
    },
    {
        id : 20,
        image : "https://www.bbassets.com/media/uploads/p/xl/100003862_1-mysore-sandal-bathing-soap.jpg",
        name : "Mysore Sandal Sandal",
        price : 38,
        description : "Mysore Sandal Pure Sandalwood Oil Soap features the timeless essence of sandalwood oil, nature's gift. Renowned for its lingering fragrance, this soap enhances your skin, leaving it glowing, soft, and blemish-free.",
    },
    {
        id : 21,
        image : "https://www.bbassets.com/media/uploads/p/l/306176_7-pears-pure-gentle-bathing-bar.jpg",
        name : "Pears Pure & Gentle",
        price : 50,
        description : "Pears understands this and brings to you its heritage product - the original glycerine soap, Pears Pure & Gentle Bathing Bar. With 100% more glycerine, Pears Pure & Gentle mild bathing bar cleanses your skin for visibly glowing, brighter skin every time you shower.",
    },
    {
        id : 22,
        image : "https://www.bbassets.com/media/uploads/p/l/306136_10-pears-soap-bar-soft-fresh-98-glycerin-mint-extracts.jpg",
        name : "Pears Soft & Fresh",
        price : 50,
        description : "Enriched with mint extracts and pure glycerine. Mint extracts keep your skin looking soft and fresh in summer, while 98% pure glycerine gently cleanses your skin and retains its natural moisture, keeping it young and beautiful.",
    },
    {
        id : 23,
        image : "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/11/3/a2b01182-96c8-437b-a921-30abcd699457_16986_1.png",
        name : "Pears Oil clear",
        price : 50,
        description : "Enriched with Lemon Flower extracts and Pure Glycerine. Lemon Flower extracts wash away the excess oil from your skin while Glycerine gently cleanses your skin and retains its natural moisture keeping it young and beautiful. ",
    },
    {
        id : 24,
        image : "https://www.bbassets.com/media/uploads/p/l/100285404_9-himalaya-neem-turmeric-soap.jpg",
        name : "Himalaya Neem & Turmeric Soap",
        price : 36,
        description : "Discover the natural goodness of Himalaya's Neem & Turmeric Soap, a trusted Ayurvedic formulation that blends the purifying properties of neem with the soothing benefits of turmeric. ",
    },
    {
        id : 25,
        image : "https://www.bbassets.com/media/uploads/p/l/40172801_5-himalaya-ayurveda-clear-skin-soap.jpg",
        name : "Himalaya Ayurveda Clear Skin Soap",
        price : 46,
        description : "Epecially made with Kanaka Taila, a traditional Ayurvedic oil which is infused with carefully selected herbs like Yashtimadhu, Priyangu, Kamala, Manjistha, Nagakesara, Rakta Chandana and Tila taila. ",
    },
    {
        id : 26,
        image : "https://www.bbassets.com/media/uploads/p/l/40018862_4-himalaya-honey-cream-soap.jpg",
        name : "Himalaya Honey & Cream Soap",
        price : 46,
        description : "Crafted with a unique blend of natural ingredients, including the nourishing goodness of honey and creamy milk, this soap transforms your daily bathing routine into a spa-like pampering session.",
    },
    {
        id : 27,
        image : "https://www.bbassets.com/media/uploads/p/l/100014844_10-himalaya-almond-rose-soap.jpg",
        name : "Himalaya Almond and Rose Bathing Soap",
        price : 46,
        description : "Indulge in the luxurious essence of a premium bathing experience crafted to revitalise your skin and uplift your senses. ",
    },
    {
        id : 28,
        image : "https://www.bigbasket.com/media/uploads/p/xxl/100014845_3-himalaya-cucumber-coconut-soap.jpg",
        name : "Himalaya Cucumber & Coconut Soap",
        price : 46,
        description : "A refreshing, antioxidant-rich, and 100% herbal formulation designed to cleanse, tone, and rejuvenate skin. Enriched with Cucumber and Coconut Oil, it tightens pores, soothes skin, and provides deep hydration. ",
    },
    {
        id : 29,
        image : "https://www.bbassets.com/media/uploads/p/l/40223834_2-hamam-soap-lemon-flower-mint-100-pure-neem-oil-fresh-skin-naturally.jpg",
        name : "Hamam Lemon Flower soap",
        price : 46,
        description : "Made with Mint and Pure Neem oil gives you fresh skin naturally. This Soap washes away germs and viruses and protects your skin naturally. ",
    },
    {
        id : 30,
        image : "https://infinigoal.in/wp-content/uploads/2025/01/Hamam-Bathing-Soap-Neem-Tulsi-Aloe-Vera-100-g.png",
        name : "Hamam Pure Neem",
        price : 36,
        description : "Designed to protect skin from 10 common problems like acne, rashes, and prickly heat. It blends neem, tulsi, and aloe vera to provide a refreshing, often recommended for its herbal.",
    },
    {
        id : 31,
        image : "https://www.santoorstayyoung.com/sites/default/files/Sandalwood_0.png",
        name : "Santoor Skin Moisturizing Soap",
        price : 48,
        description : "Sandal and Turmeric have been an integral part of skin care. Taking this tradition forward, we combine both these ingredients to give you a unique and enduring natural beauty treatment.",
    },
    {
        id : 32,
        image : "https://www.santoorstayyoung.com/sites/default/files/Almond%20Soft_0.png",
        name : "Santoor Skin Softening Soap",
        price : 46,
        description : "Treat your skin to a unique bathing experience. Sandalwood and Almond milk deeply moisturise your skin and make it smooth and soft.",
    },
    {
        id : 33,
        image : "https://www.santoorstayyoung.com/sites/default/files/aloe-fresh-570x320_0.png",
        name : "Santoor Fresh Skin Soap",
        price : 56,
        description : "Santoor fresh brings the power of 3x freshness-refreshing lime, hydrating aloe vera and cooling menthol. That’s why it recharges you up like no other freshness soap.",
    },
    {
        id : 34,
        image : "https://www.santoorstayyoung.com/sites/default/files/Santoor-gold_0.png",
        name : "Santoor Gold Soap",
        price : 76,
        description : "Santoor Gold is made from the age-old beauty mix of Sandal, Kashmiri Saffron and Sakura extracts that rejuvenate your skin, giving it a lasting, youthful glow.",
    },
    {
        id : 35,
        image : "https://www.santoorstayyoung.com/sites/default/files/Pureflo_0.png",
        name : "Santoor Pureglo Soap",
        price : 36,
        description : "Santoor PureGlo was made especially for the perfect winter skin that is so hard to get. Its deep acting natural ingredients - Glycerine, Honey and Almond oil, fight dryness and nourish the skin from deep within.",
    },
    {
        id : 36,
        image : "https://www.santoorstayyoung.com/sites/default/files/royal-sandal-570x320_0.png",
        name : "Santoor Royal Sandal Soap",
        price : 65,
        description : "Made with 100% real sandalwood oil and powder, a time-tested ingredient known for its brightening, clarifying, and complexion-enhancing properties.",
    },
    {
        id : 37,
        image : "https://www.santoorstayyoung.com/sites/default/files/570X320_0.png",
        name : "Santoor Gram Flour Soap",
        price : 36,
        description : "Even with a busy lifestyle, achieve blemish-free, flawless skin with the New Santoor Gram Flour & Sandal Soap!",
    },
    {
        id : 38,
        image : "https://www.bbassets.com/media/uploads/p/xl/100014880_1-medimix-bathing-soap-ayurvedic-classic-18-herbs.jpg",
        name : "Medimix Ayurvedic Bathing Soap",
        price : 36,
        description : "Ayurvedic Soap with 18 Herbs is the world's biggest selling ayurvedic bath soap that is suited for every skin type. It is totally herbal with a 60% coconut oil base.",
    },
    {
        id : 39,
        image : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/f7b09621-2d71-4971-bbd3-6ef636b6e6bf.png",
        name : "Medimix Sandal Glycerine Soap",
        price : 36,
        description : "The primary purpose of bathing soaps is to cleanse the skin by removing dirt, impurities, sweat, and excess oil.",
    },
    {
        id : 40,
        image : "https://www.bbassets.com/media/uploads/p/l/40325774_5-dettol-skincare-soap.jpg",
        name : "Dettol Original Bathing Soap Bar",
        price : 36,
        description : "It cleanses and protects the skin, keeping you healthy every day. Personal hygiene plays a critical role in preventing the spread of illness and infection.",
    },
    {
        id : 41,
        image : "https://www.bbassets.com/media/uploads/p/l/100008537_18-dettol-skincare-bathing-soap-bar-with-glycerine-moisturising-protects-from-germs.jpg",
        name : "Dettol Skincare Soap",
        price : 40,
        description : "Dettol's Skincare Germ Protection Bathing Soap bar keeps your skin healthy every day. The trusted germ-protection formula of Dettol soap acts like a barrier between your skin and a wide range of unseen germs.",
    },
    {
        id : 42,
        image : "https://www.bbassets.com/media/uploads/p/l/307813_27-dettol-intense-cool-bathing-soap-bar-with-menthol-provides-germ-protection.jpg",
        name : "Dettol Icy Cool Soap",
        price : 40,
        description : "The anti-bacterial properties of Dettol Cool soap makes sure to provide a shield against unhealthy environment outside. It gives better germ protection vs. ordinary soaps*.",
    },
    {
        id : 43,
        image : "https://www.bbassets.com/media/uploads/p/l/306170_7-lifebuoy-total-germ-protection-soap-bar.jpg",
        name : "Lifebuoy Total Soap",
        price : 36,
        description : "Bathing regularly with this soap can help shield you and your family from illnesses, skin infections, and unpleasant odours, especially during the changing seasons when the threat of flu, cough, and cold is heightened.",
    },
    {
        id : 44,
        image : "https://www.bbassets.com/media/uploads/p/l/40002021_2-lifebuoy-soap-bar-care.jpg",
        name : "Lifebuoy Care Soap Bar",
        price : 36,
        description : "Contains the goodness of milk cream that leaves the skin soft and smooth. Its advanced formula is designed to keep skin healthy and helps protecting it from germs.",
    },
    {
        id : 45,
        image : "https://www.bbassets.com/media/uploads/p/l/40125357_3-lifebuoy-turmeric-honey-100-better-skin-protection-soap-bar.jpg",
        name : "Lifebuoy Turmeric & Honey soap",
        price : 36,
        description : "This is a trusted brand's latest offering, harnessing the power of raw haldi and honey to provide 100% better skin protection. ",
    },
    {
        id : 46,
        image : "https://www.bbassets.com/media/uploads/p/l/30004610_6-park-avenue-bathing-soap-luxury.jpg",
        name : "Park Avenue Bathing Soap - Luxury",
        price : 70,
        description : "Park Avenue Luxury soap has the goodness of shea butter that moisturises skin and re-hydrates your entire body, leaving you with a feeling of freshness.",
    },
    {
        id : 47,
        image : "https://images.jdmagicbox.com/quickquotes/images_main/park-avenue-good-morning-soap-125g-219935908-eaiw2.png",
        name : "Park Avenue Good Morning Soap",
        price : 45,
        description : "Enriched with tea tree oil and shea butter, this variant is designed to leave skin feeling refreshed, rejuvenated, and energized.",
    },
    {
        id : 48,
        image : "https://www.bbassets.com/media/uploads/p/xl/290490_6-park-avenue-bathing-soap-cool-blue.jpg",
        name : "Park Avenue Cool Blue Soap",
        price : 36,
        description : "Infused with menthol and mineral energizers, it provides an intense, cooling, and tingling sensation, making it ideal for hot weather.",
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
                        <button class = "btn btn-primary w-100 mt-2" onclick = "addToCart(${product.id})">Add to cart</button>
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
        existingItem.quantity += 1;
    } else {
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
        item.quantity += 1;
        displayCart();
    }
}

function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity -= 1;
    
        if (item.quantity === 0) {
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
