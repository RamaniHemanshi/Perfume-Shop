export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: '/images/women1.avif',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: '/images/women2.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'gucci', id: 'gucci' },
              { name: 'dior', id: 'dior' },
              { name: 'zara', id: 'zara' },
              { name: 'burberry', id: 'burberry' },
              { name: 'chanel', id: 'chanel' },
              { name: 'victoria secret', id: 'victoria-secret' },
            ],
          },
          {
            id: 'fragrances',
            name: 'Fragrances',
            items: [
              { name: 'Neroli', id: 'neroli' },
              { name: 'Rose', id: 'rose' },
              { name: 'Lavender', id: 'lavender' },
              { name: 'Sandalwood', id: 'sandalwood' },
              { name: 'Musk', id: 'musk' },
              { name: 'Mint', id: 'mint' },
            ],
          },
         
          {
            id: 'type',//clothing
            name: 'Type',
            items: [
              { name: 'Floral', id:"floral" },
              { name: 'Oceanic', id:'oceanic'},
              { name: 'Oriental', id: 'oriental' },
              { name: 'Fruity', id: 'fruity' },
              { name: 'Green', id: 'green' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: '/images/men1.jpg',
            imageAlt: 'Drawstring floral with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: '/images/men2.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Calvin klein', id: 'calvin_klein' },
              { name: 'Guess', id: 'gues' },
              { name: 'Boss', id: 'boss' },
              { name: 'Bvlgari', id: 'bvlgari' },
              // { name: 'Denver', id: 'denver' },
              { name: 'Signature', id: 'signature' },
              { name: 'Bella vitta', id: 'bella_vitta' },
              { name: 'Armani', id: 'armani' },
            ],
          },
          {
            id: 'fragrances',
            name: 'Fragrances',
            items: [
              // { name: 'citron', id: 'citron' },
              // { name: 'musk', id: '#' },
              { name: 'freesia', id: 'freesia' },
              { name: 'aromatic', id: 'aromatic' },
              { name: 'aquatic', id: 'aquatic' },
              { name: 'noir', id: 'noir' },
              { name: 'rouge', id: 'rouge' },
              
            ],
          },

          {
            id: 'type',
            name: 'Type',
            items: [
             { name: 'Floral', id:"floral" },
              { name: 'Oceanic', id:'oceanic'},
              { name: 'Oriental', id: 'oriental' },
              { name: 'Fruity', id: 'fruity' },
              { name: 'Green', id: 'green' },
              // { name: 'fresh', id: '#' },
              
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'About Us', href: '/aboutUs' },
      { name: 'Blog', href: '/blogPage' },
      { name: 'Contact Us', href: '/contactPage' },
    ],
  }