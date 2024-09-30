const sampleMenu=[
    {
        name: "Paneer Butter Masala",
        category: "Vegetarian",
        subcategory: "Curry",
        price: 12.99,
        description: "Cottage cheese cubes cooked in a rich, creamy tomato gravy with butter and spices.",
        spice_level: "Medium",

        image: {
            url: "https://images.unsplash.com/photo-1701579231378-3726490a407b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "paneer-butter-masala.jpg"
        }
    },
    {
        name: "Chana Masala",
        category: "Vegetarian",
        subcategory: "Curry",
        price: 10.99,
        description: "Chickpeas cooked in a spicy and tangy tomato-based gravy with Indian spices.",
        spice_level: "Medium",
        image: {
            url: "https://images.pexels.com/photos/9287039/pexels-photo-9287039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "chana-masala.jpg"
        }
    },
    {
        name: "Aloo Gobi",
        category: "Vegetarian",
        subcategory: "Curry",
        price: 9.99,
        description: "Potatoes and cauliflower cooked in a blend of spices, garnished with coriander.",
        spice_level: "Mild",
        image: {
            url: "https://images.unsplash.com/photo-1711565129403-c098bb10695b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "aloo-gobi.jpg"
        }
    },
    {
        name: "Palak Paneer",
        category: "Vegetarian",
        subcategory: "Curry",
        price: 11.99,
        description: "Paneer cubes cooked in a creamy spinach gravy with Indian spices.",
        spice_level: "Mild",
        image: {
            url: "https://images.pexels.com/photos/11115801/pexels-photo-11115801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "palak-paneer.jpg"
        }
    },
    {
        name: "Dal Makhani",
        category: "Vegetarian",
        subcategory: "Curry",
        price: 10.49,
        description: "Yellow lentils cooked in a creamy, buttery gravy with aromatic spices.",
        spice_level: "Mild",
        image: {
            url: "https://images.pexels.com/photos/12968279/pexels-photo-12968279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "dal-makhani.jpg"
        }
    },
    {
        name: "Malai Kofta",
        category: "Vegetarian",
        subcategory: "Curry",
        price: 12.49,
        description: "Soft paneer and vegetable dumplings in a creamy tomato-based gravy.",
        spice_level: "Mild",
        image: {
            url: "https://images.pexels.com/photos/9181649/pexels-photo-9181649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "malai-kofta.jpg"
        }
    },
    {
        name: "Kadhai Paneer",
        category: "Vegetarian",
        subcategory: "Curry",
        price: 12.99,
        description: "Paneer cooked with bell peppers and onions in a spicy tomato-based gravy.",
        spice_level: "Medium",
        image: {
            url: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "kadhai-paneer.jpg"
        }
    },
    {
        name: "Baingan Bharta",
        category: "Vegetarian",
        subcategory: "Curry",
        price: 10.49,
        description: "Smoky mashed eggplant cooked with tomatoes, onions, and spices.",
        spice_level: "Medium",
        image: {
            url: "https://images.unsplash.com/photo-1657186394392-ea2ec3b63897?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "baingan-bharta.jpg"
        }
    },
    {
        name: "Aloo Tikki",
        category: "Vegetarian",
        subcategory: "Appetizer",
        price: 5.99,
        description: "Spiced potato patties served with mint and tamarind chutney.",
        spice_level: "Mild",
        image: {
            url: "https://images.unsplash.com/photo-1599307767316-776533bb941c?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "aloo-tikki.jpg"
        }
    },
    {
        name: "Samosa",
        category: "Vegetarian",
        subcategory: "Appetizer",
        price: 4.99,
        description: "Crispy pastry filled with spiced potatoes and peas, served with chutney.",
        spice_level: "Mild",
        image: {
            url: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?q=80&w=3171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "samosa.jpg"
        }
    },
    {
        name: "Onion Bhaji",
        category: "Vegetarian",
        subcategory: "Appetizer",
        price: 6.99,
        description: "Crispy onion fritters made with gram flour and spices, served with chutney.",
        spice_level: "Medium",
        image: {
            url: "https://images.pexels.com/photos/17390914/pexels-photo-17390914/free-photo-of-close-up-of-onion-bhaji.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "onion-bhaji.jpg"
        }
    },
    {
        name: "Paneer Tikka",
        category: "Vegetarian",
        subcategory: "Appetizer",
        price: 8.99,
        description: "Marinated paneer cubes grilled with bell peppers and onions.",
        spice_level: "Medium",
        image: {
            url: "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "paneer-tikka.jpg"
        }
    },
    {
        name: "Hara Bhara Kebab",
        category: "Vegetarian",
        subcategory: "Appetizer",
        price: 7.99,
        description: "Spinach and green pea patties flavored with Indian spices.",
        spice_level: "Mild",
        image: {
            url: "https://images.unsplash.com/photo-1678021012446-d31a3721b4ae?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "hara-bhara-kebab.jpg"
        }
    },
    {
        name: "Dahi Puri",
        category: "Vegetarian",
        subcategory: "Appetizer",
        price: 6.49,
        description: "Crispy puris filled with yogurt, chutneys, and spices.",
        spice_level: "Mild",
        image: {
            url: "https://images.pexels.com/photos/23285887/pexels-photo-23285887/free-photo-of-indian-snack-dahi-bhalle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "dahi-puri.jpg"
        }
    },
    {
        name: "Vegetable Pakora",
        category: "Vegetarian",
        subcategory: "Appetizer",
        price: 5.49,
        description: "Mixed vegetable fritters served with mint chutney.",
        spice_level: "Medium",
        image: {
            url: "https://images.pexels.com/photos/23266988/pexels-photo-23266988/free-photo-of-traditional-desi-pakora-with-mint-and-green-sauces-popular-pakistani-snack.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "vegetable-pakora.jpg"
        }
    },
    {
        name: "Papdi Chaat",
        category: "Vegetarian",
        subcategory: "Appetizer",
        price: 6.99,
        description: "Crispy wafers topped with chickpeas, potatoes, yogurt, and chutneys.",
        spice_level: "Mild",
        image: {
            url: "https://images.unsplash.com/photo-1697155836253-9e957b4d01b1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "papdi-chaat.jpg"
        }
    },
    {
        name: "Vegetable Biryani",
        category: "Vegetarian",
        subcategory: "Rice",
        price: 11.99,
        description: "Basmati rice cooked with mixed vegetables and aromatic spices, served with raita.",
        spice_level: "Medium",
        image: {
            url: "https://images.pexels.com/photos/7593230/pexels-photo-7593230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "vegetable-biryani.jpg"
        }
    },
    {
        name: "Garlic Naan",
        category: "Vegetarian",
        subcategory: "Rice",
        price: 3.99,
        description: "Soft, fluffy bread topped with minced garlic and baked in a tandoor.",
        spice_level: "None",
        image: {
            url: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "garlic-naan.jpg"
        }
    },{
        name: "Rice Shushi",
        category: "Vegetarian",
        subcategory: "Rice",
        price: 4.99,
        description: "Avocardo and vegetables rolled in a sheet of rice",
        spice_level: "Low",
        image: {
            url: "https://images.pexels.com/photos/47546/sushi-eat-japanese-asia-47546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "jeera-rice.jpg"
        }
    },
    {
        name: "Aloo Paratha",
        category: "Vegetarian",
        subcategory: "Rice",
        price: 5.49,
        description: "Whole wheat flatbread stuffed with spiced mashed potatoes and cooked on a griddle.",
        spice_level: "Mild",
        image: {
            url: "https://images.pexels.com/photos/12737919/pexels-photo-12737919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "aloo-paratha.jpg"
        }
    },
    {
        name: "Peshawari Naan",
        category: "Vegetarian",
        subcategory: "Rice",
        price: 6.49,
        description: "Naan bread stuffed with a sweet mixture of nuts and dried fruits, baked in a tandoor.",
        spice_level: "None",
        image: {
            url: "https://images.unsplash.com/photo-1668357530437-72a12c660f94?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "peshawari-naan.jpg"
        }
    },
    {
        name: "Mushroom Biryani",
        category: "Vegetarian",
        subcategory: "Rice",
        price: 12.99,
        description: "Basmati rice cooked with mushrooms and a blend of aromatic spices, served with raita.",
        spice_level: "Medium",
        image: {
            url: "https://images.unsplash.com/photo-1691171047323-37acec85fc84?q=80&w=2480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "mushroom-biryani.jpg"
        }
    },
    {
        name: "Plain Naan",
        category: "Vegetarian",
        subcategory: "Rice",
        price: 2.99,
        description: "Classic soft and fluffy Indian flatbread baked in a tandoor.",
        spice_level: "None",
        image: {
            url: "https://images.unsplash.com/photo-1718874635150-85070e62fcf1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "plain-naan.jpg"
        }
    },
    {
        name: "Stuffed Kulcha",
        category: "Vegetarian",
        subcategory: "Rice",
        price: 6.99,
        description: "Soft bread stuffed with spiced paneer or potato filling, baked in a tandoor.",
        spice_level: "Mild",
        image: {
            url: "https://images.unsplash.com/photo-1683533746199-9e3920bf3eab?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "stuffed-kulcha.jpg"
        }
    },
    {
        name: "Tandoori Roti",
        category: "Vegetarian",
        subcategory: "Rice",
        price: 2.49,
        description: "Whole wheat flatbread cooked in a tandoor until crispy.",
        spice_level: "None",
        image: {
            url: "https://images.pexels.com/photos/8346891/pexels-photo-8346891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "tandoori-roti.jpg"
        }
    },
    {
        name: "Methi Paratha",
        category: "Vegetarian",
        subcategory: "Rice",
        price: 5.99,
        description: "Whole wheat flatbread flavored with fenugreek leaves and cooked on a griddle.",
        spice_level: "Mild",
        image: {
            url: "https://plus.unsplash.com/premium_photo-1671394138152-39b8e909f2bb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "methi-paratha.jpg"
        }
    },
    {
        name: "Paneer Tikka",
        category: "Vegetarian",
        subcategory: "Tandoor",
        price: 12.99,
        description: "Marinated paneer cubes grilled in a tandoor with bell peppers and onions.",
        spice_level: "Medium",
        image: {
            url: "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "paneer-tikka-tandoor.jpg"
        }
    },
    {
        name: "Tandoori Mushroom",
        category: "Vegetarian",
        subcategory: "Tandoor",
        price: 11.99,
        description: "Mushrooms marinated in yogurt and spices, grilled in a tandoor.",
        spice_level: "Medium",
        image: {
            url: "https://images.unsplash.com/photo-1628294897055-a9bfca0f47ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "tandoori-mushroom.jpg"
        }
    },
    {
        name: "Tandoori Aloo",
        category: "Vegetarian",
        subcategory: "Tandoor",
        price: 9.99,
        description: "Baby potatoes marinated in spices and grilled in a tandoor.",
        spice_level: "Medium",
        image: {
            url: "https://images.unsplash.com/photo-1523813301608-f54a198f6b5f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "tandoori-aloo.jpg"
        }
    },
    {
        name: "Tandoori Cabbage",
        category: "Vegetarian",
        subcategory: "Tandoor",
        price: 13.99,
        description: "Cabbage halves marinated with tandoori spices, grilled to perfection.",
        spice_level: "Medium",
        image: {
            url: "https://images.unsplash.com/photo-1559852925-44ce7f97bc36?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "tandoori-paneer.jpg"
        }
    },
    {
        name: "Tandoori Vegetables",
        category: "Vegetarian",
        subcategory: "Tandoor",
        price: 11.49,
        description: "Assorted vegetables marinated and grilled in a tandoor.",
        spice_level: "Medium",
        image: {
            url: "https://images.unsplash.com/photo-1625944227313-4f7f68e6b3fa?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "tandoori-vegetables.jpg"
        }
    },
    {
        name: "Paneer Seekh Kebab",
        category: "Vegetarian",
        subcategory: "Tandoor",
        price: 13.49,
        description: "Spiced paneer mixture shaped on skewers and grilled in a tandoor.",
        spice_level: "Medium",
        image: {
            url: "https://images.pexels.com/photos/5175631/pexels-photo-5175631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "paneer-seekh-kebab.jpg"
        }
    },
    {
        name: "Mixed Vegetable kebab",
        category: "Vegetarian",
        subcategory: "Tandoor",
        price: 12.99,
        description: "Brinjal, sweet corn, and tomatoes marinated with mint and coriander, grilled in a tandoor.",
        spice_level: "Mild",
        image: {
            url: "https://images.pexels.com/photos/5779822/pexels-photo-5779822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "hariyali-paneer-tikka.jpg"
        }
    },
    {
        name: "Gulab Jamun",
        category: "Other",
        subcategory: "Other",
        price: 4.99,
        description: "Soft, spongy milk-based dumplings soaked in sweet sugar syrup.",
        spice_level: "None",
        image: {
            url: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "gulab-jamun.jpg"
        }
    },
    {
        name: "Peda",
        category: "Other",
        subcategory: "Other",
        price: 5.49,
        description: "Soft paneer discs soaked in sweetened, flavored milk, garnished with nuts to make rectangular shaped sweet.",
        spice_level: "None",
        image: {
            url: "https://images.pexels.com/photos/7182054/pexels-photo-7182054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "rasmalai.jpg"
        }
    },
    {
        name: "Jalebi",
        category: "Other",
        subcategory: "Other",
        price: 5.49,
        description: "Crispy, spiral-shaped sweet made from deep-fried batter, soaked in aromatic sugar syrup, and often enjoyed as a festive treat",
        spice_level: "None",
        image: {
            url: "https://images.pexels.com/photos/18488314/pexels-photo-18488314/free-photo-of-traditional-indian-sweets-imrati.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "rasmalai.jpg"
        }
    },
    {
        name: "Mango Lassi",
        category: "Other",
        subcategory: "Other",
        price: 3.99,
        description: "Sweet, creamy yogurt drink flavored with ripe mangoes.",
        spice_level: "None",
        image: {
            url: "https://images.pexels.com/photos/14509267/pexels-photo-14509267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "mango-lassi.jpg"
        }
    },
    {
        name: "Masala Chai",
        category: "Other",
        subcategory: "Other",
        price: 2.99,
        description: "Traditional spiced tea brewed with milk and aromatic spices.",
        spice_level: "Mild",
        image: {
            url: "https://images.pexels.com/photos/11413997/pexels-photo-11413997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "masala-chai.jpg"
        }
    },
    {
        name: "Chicken 65",
        category: "Non-Vegetarian",
        subcategory: "Appetizer",
        price: 9.99,
        description: "Spicy, deep-fried chicken pieces marinated in yogurt and red chili.",
        spice_level: "Hot",
        image: {
            url: "https://images.unsplash.com/photo-1600555379765-f82335a7b1b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "chicken65.jpg"
        }
    },
    {
        name: "Fish Amritsari",
        category: "Non-Vegetarian",
        subcategory: "Appetizer",
        price: 10.99,
        description: "Crispy fried fish fillets coated in gram flour and Indian spices.",
        spice_level: "Medium",
        image: {
            url: "https://images.unsplash.com/photo-1584182711222-2068e7eca683?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "fish_amritsari.jpg"
        }
    },
    {
        name: "Butter Chicken",
        category: "Non-Vegetarian",
        subcategory: "Curry",
        price: 13.99,
        description: "Tender chicken pieces cooked in a creamy tomato-based sauce.",
        spice_level: "Mild",
        image: {
            url: "https://images.unsplash.com/photo-1714799263303-29e7d638578a?q=80&w=2910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "butter_chicken.jpg"
        }
    },
    {
        name: "Lamb Rogan Josh",
        category: "Non-Vegetarian",
        subcategory: "Curry",
        price: 14.99,
        description: "Slow-cooked lamb in a rich, aromatic curry.",
        spice_level: "Medium",
        image: {
            url: "https://images.unsplash.com/photo-1657205937641-01d8c906274f?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "lamb_rogan_josh.jpg"
        }
    },
    {
        name: "Tandoori Chicken",
        category: "Non-Vegetarian",
        subcategory: "Tandoor",
        price: 12.99,
        description: "Chicken marinated in yogurt and spices, grilled in a tandoor oven.",
        spice_level: "Hot",
        image: {
            url: "https://images.unsplash.com/photo-1687020835890-b0b8c6a04613?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "tandoori_chicken.jpg"
        }
    },
    {
        name: "Tandoori Prawns",
        category: "Non-Vegetarian",
        subcategory: "Tandoor",
        price: 15.99,
        description: "Prawns marinated in spiced yogurt and grilled in a tandoor.",
        spice_level: "Medium",
        image: {
            url: "https://images.pexels.com/photos/9646857/pexels-photo-9646857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            filename: "tandoori_prawns.jpg"
        }
    },
    {
        name: "Chicken Biryani",
        category: "Non-Vegetarian",
        subcategory: "Rice",
        price: 12.99,
        description: "Basmati rice cooked with spiced chicken, saffron, and aromatic herbs.",
        spice_level: "Medium",
        image: {
            url: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "chicken_biryani.jpg"
        }
    },
    {
        name: "Lassi",
        category: "Vegetarian",
        subcategory: "Other",
        price: 2.99,
        description: "Refreshing yogurt-based drink, available in sweet or salty flavors.",
        spice_level: "Mild",
        image: {
            url: "https://images.unsplash.com/photo-1527406619566-0159590b8540?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "lassi.jpg"
        }
    },
    {
        name: "Strawberry Lassi",
        category: "Vegetarian",
        subcategory: "Other",
        price: 3.99,
        description: "A sweet yogurt-based drink flavored with ripe strawberryes.",
        spice_level: "Mild",
        image: {
            url: "",
            filename: "strawberry_lassi.jpg"
        }
    }
    
        
    
]

const sampleReviews = [
    {
        customer: "John Doe",
        review: "Great food and excellent service!",
        rating: 5,
        date: new Date(), // Automatically sets the current date
        image: {
           url: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           filename: "user1.jpg"
        }
    },
    {
        customer: "Ivana Saijana",
        review: "The pasta was delicious, but the wait was a bit long.",
        rating: 4,
        date: new Date('2023-09-15T18:30:00'), // Example of a specific date
        image: {
           url: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           filename: "user2.jpg"
        }
    },
    {
        customer: "Ian Dooley",
        review: "Average experience. Nothing special.",
        rating: 3,
        date: new Date(),// Automatically sets the current date
        image: {
           url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           filename: "user3.jpg"
        }
    },
    {
        customer: "Jessica Felicio",
        review: "Good ambiance, but the menu could use more variety.",
        rating: 3.5,
        date: new Date(), // Automatically sets the current date
        image: {
           url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           filename: "user4.jpg"
        }
    },
    {
        customer: "Aiony Hust",
        review: "Disappointing. The food was cold.",
        rating: 2,
        date: new Date(), // Automatically sets the current date
        image: {
           url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           filename: "user5.jpg"
        }
    },
    {
        customer: "Torey Brown",
        review: "An unforgettable dining experience!",
        rating: 5,
        date: new Date(), // Automatically sets the current date
        image: {
           url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           filename: "user6.jpg"
        }
    }
];

module.exports={sampleMenu,sampleReviews};