const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      hotDeal: true,
      oldPrice: 50,
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      hotDeal: true,
      oldPrice: 50,
      addedForComparison: true,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      hotDeal: true,
      oldPrice: 50,
      addedForComparison: true,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      hotDeal: true,
      oldPrice: 50,
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      hotDeal: true,
      oldPrice: 50,
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 25',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 26',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 27',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 28',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 29',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-30',
      name: 'Aenean Ru Bristique 30',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 31',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 32',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-33',
      name: 'Aenean Ru Bristique 33',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-34',
      name: 'Aenean Ru Bristique 34',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-35',
      name: 'Aenean Ru Bristique 35',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-36',
      name: 'Aenean Ru Bristique 36',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-37',
      name: 'Aenean Ru Bristique 37',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-38',
      name: 'Aenean Ru Bristique 38',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-39',
      name: 'Aenean Ru Bristique 39',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-40',
      name: 'Aenean Ru Bristique 40',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-41',
      name: 'Aenean Ru Bristique 41',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-42',
      name: 'Aenean Ru Bristique 21',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-43',
      name: 'Aenean Ru Bristique 22',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-44',
      name: 'Aenean Ru Bristique 32',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-45',
      name: 'Aenean Ru Bristique 12',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-46',
      name: 'Aenean Ru Bristique 28',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-47',
      name: 'Aenean Ru Bristique 19',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-48',
      name: 'Aenean Ru Bristique 12',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-49',
      name: 'Aenean Ru Bristique 21',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-50',
      name: 'Aenean Ru Bristique 10',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-51',
      name: 'Aenean Ru Bristique 18',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-52',
      name: 'Aenean Ru Bristique 22',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-53',
      name: 'Aenean Ru Bristique 37',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-54',
      name: 'Aenean Ru Bristique 11',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-55',
      name: 'Aenean Ru Bristique 27',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-56',
      name: 'Aenean Ru Bristique 16',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-57',
      name: 'Aenean Ru Bristique 31',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-59',
      name: 'Aenean Ru Bristique 30',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-60',
      name: 'Aenean Ru Bristique 32',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
  ],
  brands: [
    {
      id: 'brand01',
      image: '../images/furniture-logo.jpg',
    },
    {
      id: 'brand02',
      image: '../images/furniture-logo.jpg',
    },
    {
      id: 'brand03',
      image: '../images/furniture-logo.jpg',
    },
    {
      id: 'brand04',
      image: '../images/furniture-logo.jpg',
    },
    {
      id: 'brand05',
      image: '../images/furniture-logo.jpg',
    },
  ],
  cart: {
    products: [],
  },
  deals: {
    banners: [
      {
        id: 'banner-large',
        content: ['Guestroom', 'sofa', '-20%'],
      },
      {
        id: 'banner-small-top',
        content: ['Office', 'chair', 'collection', '$200'],
      },
      {
        id: 'banner-small-bottom',
        content: ['Special', 'collection', 'Save up 45% of furniture'],
      },
    ],
    promoSlider: [
      {
        domain: '',
        category: 'Beds',
        message: 'Save up to 50% off all furniture',
        imageSrc: `${process.env.PUBLIC_URL}/images/products/Aenean Ru Bristique 6.jpg`,
      },
      {
        domain: '',
        category: 'Sofas',
        message: 'Save up to 50% off all sofas',
        imageSrc: `${process.env.PUBLIC_URL}/images/products/Aenean Ru Bristique 8.jpg`,
      },
      {
        domain: 'Indoor',
        category: 'chairs',
        message: 'Buy fast! Buy now! Just buy!',
        imageSrc: `${process.env.PUBLIC_URL}/images/products/Aenean Ru Bristique 10.jpg`,
      },
    ],
  },

  opinions: [
    {
      id: 'opinion-1',
      customerName: 'Mr. Anderson',
      customerOpinion:
        'Just bought two king beds sets... Excellent quality.... The employees are nice, knowledgeable, passionate and very very helpful. To he honest, I have been purchasing their merchandise since the 90s. I think the majority of the people from the projects got stuff from here also.',
      customerPhoto: 'src=../../images/customers/customer1.jpeg',
    },
    {
      id: 'opinion-2',
      customerName: 'Mary Poppins',
      customerOpinion:
        'Always fun to shop around. Huge store with lots of great displays. Food hall is great as well. Can find a lot of nicely priced home goods!',
      customerPhoto: 'src=../../images/customers/customer2.jpg',
    },
    {
      id: 'opinion-3',
      customerName: 'Salvador Dali',
      customerOpinion:
        'Good selection of furnitures, lighting and other home decor ideas. They do temperature checks and you have to wear a mask indoors. They also want you to stick with your designer at all times and within range of your buddy (whoever is visiting with you)... (Somehow you re not comfortable looking around by yourself) .. found some good ideas and will have to look online for more.. parking is in the back... They have branches in other cities too... Check out pics for some ideas...  Have fun!',
      customerPhoto: 'src=../../images/customers/customer3.jpeg',
    },
  ],
  favorites: [
    {
      page: 0,
      index: 0,
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
  ],
  comparedProducts: [],
  productsRatedByUser: [
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      addedForComparison: true,
      userStars: '4',
    },
  ],
  viewport: '',
};

export default initialState;
