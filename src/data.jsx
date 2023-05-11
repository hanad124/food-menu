const data = [
    {
      "id": 1,
      "name": "Classic Burger",
      "description": "A juicy beef patty topped with lettuce, tomato, onion, and pickles, served on a toasted bun.",
      "image": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/ca/e8/6b/burger-classic.jpg",
      "category": "Burger"
    },
    {
      "id": 2,
      "name": "Veggie Burger",
      "description": "A flavorful patty made with vegetables and grains, topped with avocado, sprouts, and hummus, served on a whole wheat bun.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqHewNQEZ2eJ-s6cAppT5ayD1IaePzkhePA&usqp=CAU",
      "category": "Burger"
    },
    {
      "id": 3,
      "name": "Breakfast Burrito",
      "description": "A hearty burrito filled with scrambled eggs, sausage, potatoes, and cheese, served with salsa and sour cream.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHndooYU-Q92GcCHakJq99-sHbElFOuNzeA&usqp=CAU",
      "category": "Breakfast"
    },
    {
      "id": 4,
      "name": "Pancakes",
      "description": "Fluffy pancakes served with butter and maple syrup.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVHdJCarDnxbXslDdK_kZMUIssFc7TAPQZw&usqp=CAU",
      "category": "Breakfast"
    },
    {
      "id": 5,
      "name": "Grilled Cheese Sandwich",
      "description": "Melted cheddar cheese between two slices of buttered bread, served with a side of tomato soup.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ash1MowUVJZUlz_Pj49NUua384TUgVylxA&usqp=CAU",
      "category": "Lunch"
    },
    {
      "id": 6,
      "name": "Caesar Salad",
      "description": "Fresh romaine lettuce, croutons, and Parmesan cheese tossed in a tangy Caesar dressing.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAr9USjiCs0UoBhNU77Ow399wKmRP5xBG2w&usqp=CAU",
      "category": "Lunch"
    },
    {
      "id": 7,
      "name": "Grilled Chicken Breast",
      "description": "A tender and juicy chicken breast, seasoned and grilled to perfection, served with your choice of sides.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuC2DselGxx3dvaMGvjBRRtwUwtyE2awiMCQ&usqp=CAU",
      "category": "Dinner"
    },
    {
      "id": 8,
      "name": "Beef Stroganoff",
      "description": "Tender strips of beef and mushrooms in a rich and creamy sauce, served over egg noodles.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8EK70f8fQnSRNqSr6hw6OZ0W355kNwzHtw&usqp=CAU",
      "category": "Dinner"
    },
    {
      "id": 9,
      "name": "Iced Tea",
      "description": "A refreshing glass of iced tea, sweetened to your liking.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9rVdPDDEDNkCyNyd5RLWlpPEp2WEhT4a9mA&usqp=CAU",
      "category": "Drinks"
    },
    {
      "id": 10,
      "name": "Margarita",
      "description": "A classic margarita made with tequila, lime juice, and triple sec, served with salt on the rim.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mVw3E2NPJrEcX_eE0WIlqYlN35RUNeYkxA&usqp=CAU",
      "category": "Drinks"
    },
    {
      "id": 11,
      "name": "Black Bean Burger",
      "description": "A savory patty made with black beans and spices, topped with salsa, guacamole, and sour cream, served on a whole wheat bun.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANeNcP33YeJlV5GAG3QGwR_IX00FjUaE_ag&usqp=CAU",
      "category": "Burger"
    },
    {
      "id": 12,
      "name": "Egg Sandwich",
      "description": "A breakfast sandwich with scrambled eggs, bacon, and cheddar cheese, served on a toasted English muffin.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIY0QXBOmU0VrTbDC62VagPnm5wB2mUepfyZAk7Yyx1BFm9X19UKCEXM3jIHvyH-zpCbs&usqp=CAU",
      "category": "Breakfast"
    },
    {
      "id": 13,
      "name": "Chicken Caesar Salad",
      "description": "Fresh romaine lettuce, grilled chicken, croutons, and Parmesan cheese tossed in a tangy Caesar dressing.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRocxTR4UiDzSyuWJDgFDWkp-giP15wj_VEwQ&usqp=CAU",
      "category": "Lunch"
    },
    {
      "id": 14,
      "name": "Shrimp Scampi",
      "description": "Tender shrimp sautéed in garlic butter and white wine, served over linguine.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7nQq3r6O7xQpyn66JxuDQrrUYPnBtnZZgw&usqp=CAU",
      "category": "Dinner"
    },
    {
      "id": 15,
      "name": "Mojito",
      "description": "A refreshing cocktail made with rum, lime juice, sugar, and fresh mint.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71ffU9o9pdn_mGD-NVnRNle9uUEzJqoQ8Ug&usqp=CAU",
      "category": "Drinks"
    },
    {
      "id": 16,
      "name": "Turkey Burger",
      "description": "A lean turkey patty topped with lettuce, tomato, and onion, served on a whole wheat bun.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsaXRK_xc2qzqmm_T48EyXrpRKvid1XYh5Aw&usqp=CAU",
      "category": "Burger"
    },
    {
      "id": 17,
      "name": "Omelette",
      "description": "A fluffy omelette filled with your choice of ingredients, such as ham, cheese, vegetables, and more.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjzcRKFXzYWWFkU0OPPzu1XjhpFN9xwOuXQ&usqp=CAU",
      "category": "Breakfast"
    },
    {
      "id": 18,
      "name": "BLT Sandwich",
      "description": "Crispy bacon, fresh lettuce, and ripe tomatoes on toasted bread, served with a side of potato chips.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-FsF0Lmk21gDodkPgox3y5aj4mMD5dZN6bw&usqp=CAU",
      "category": "Lunch"
    },
    {
      "id": 19,
      "name": "Beef Tenderloin",
      "description": "A tender and juicy beef tenderloin, cooked to your liking, served with your choice of sides.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GGnQt-AA5EO3TvRwocA-hzjvug7HQiKktw&usqp=CAU",
      "category": "Dinner"
    },
    {
      "id": 20,
      "name": "Iced Coffee",
      "description": "A refreshing glass of iced coffee, made with freshly brewed coffee and your choice of milk and sweetener.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0x8OEsCYoYPHLM28osyHqsXnX4dIokW0C_w&usqp=CAU",
      "category": "Drinks"
    },
    {
      "id": 21,
      "name": "Bento Box",
      "description": "A Japanese lunch box featuring a variety of dishes, such as rice, meat or fish, vegetables, and pickles, arranged in compartments.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQctkUkfk_NcITqyXtgf8hrlDonM-i22pfAoQ&usqp=CAU",
      "category": "Lunch"
    },
    // {
    //   "id": 20,
    //   "name": "Iced Coffee",
    //   "description": "A refreshing glass of iced coffee, made with freshly brewed coffee and your choice of milk and sweetener.",
    //   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0x8OEsCYoYPHLM28osyHqsXnX4dIokW0C_w&usqp=CAU",
    //   "category": "Drinks"
    // },
    // {
    //   "id": 20,
    //   "name": "Iced Coffee",
    //   "description": "A refreshing glass of iced coffee, made with freshly brewed coffee and your choice of milk and sweetener.",
    //   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0x8OEsCYoYPHLM28osyHqsXnX4dIokW0C_w&usqp=CAU",
    //   "category": "Drinks"
    // },
    // {
    //   "id": 20,
    //   "name": "Iced Coffee",
    //   "description": "A refreshing glass of iced coffee, made with freshly brewed coffee and your choice of milk and sweetener.",
    //   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0x8OEsCYoYPHLM28osyHqsXnX4dIokW0C_w&usqp=CAU",
    //   "category": "Drinks"
    // },
  ];

  export default data;