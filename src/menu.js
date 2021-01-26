const menuPage = (() => {
  const content = document.getElementById('content');

  const menuItems = [
    {
      name: 'Red Thai Vegetable',
      regular: 5.25,
      large: 6.45,
      imgURL:
        'https://www.chozen.co.uk/wp-content/uploads/2014/12/red-thai-veg-curry.jpg',
    },
    {
      name: 'Red Thai Chicken',
      regular: 5.75,
      large: 7.15,
      imgURL:
        'https://www.chozen.co.uk/wp-content/uploads/2014/12/red-thai-chicken-curry-e1508233136844.jpg',
    },
    {
      name: 'Spicy Sesame Chicken',
      regular: 5.75,
      large: 7.15,
      imgURL:
        'http://www.chozen.co.uk/wp-content/uploads/2014/12/spicy-sesame-chicken.jpg',
    },
    {
      name: 'Sweet Chilli Chicken Teriyaki',
      regular: 5.95,
      large: 7.35,
      imgURL:
        'http://www.chozen.co.uk/wp-content/uploads/2014/12/sweet-chilli-teriyaki.jpg',
    },
    {
      name: 'Sweet & Sour Chicken',
      regular: 5.55,
      large: 7.15,
      imgURL:
        'http://www.chozen.co.uk/wp-content/uploads/2014/12/sweet-sour-chicken.jpg',
    },
    {
      name: 'Chicken Katsu Curry',
      regular: 6.25,
      large: 7.45,
      imgURL:
        'http://fastfood2.wpengine.com/wp-content/uploads/2015/01/Chicken-Katsu-Curry.png',
    },
    {
      name: 'Thai Green Chicken',
      regular: 5.75,
      large: 7.15,
      imgURL:
        'http://www.chozen.co.uk/wp-content/uploads/2014/12/green-thai-chicken-curry.jpg',
    },
    {
      name: 'Chicken Penang',
      regular: 5.75,
      large: 7.15,
      imgURL:
        'http://www.chozen.co.uk/wp-content/uploads/2014/12/panang-chicken-curry.jpg',
    },
  ];

  const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Menu';

    header.appendChild(title);

    content.appendChild(header);
  };

  const createMenuImg = (sourceURL, altName) => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('menu-img-container');
    const img = document.createElement('img');
    img.classList.add('menu-item-img');
    img.src = sourceURL;
    img.alt = altName;
    imgContainer.appendChild(img);
    return imgContainer;
  };

  const createMenuContent = (name, regPrice, largePrice) => {
    const menuContentDiv = document.createElement('div');
    menuContentDiv.classList.add('menu-info');
    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = name;
    menuContentDiv.appendChild(menuTitle);
    const menuPriceDiv = document.createElement('div');
    menuPriceDiv.classList.add('menu-price-container');
    const regPricePara = document.createElement('p');
    regPricePara.classList.add('price');
    regPricePara.textContent = `Regular: £${regPrice}`;
    const largePricePara = document.createElement('p');
    largePricePara.classList.add('price');
    largePricePara.textContent = `Large: £${largePrice}`;
    menuPriceDiv.appendChild(regPricePara);
    menuPriceDiv.appendChild(largePricePara);
    menuContentDiv.appendChild(menuPriceDiv);
    return menuContentDiv;
  };

  const createMenuItem = (menuItem, parent) => {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-item');
    const menuImg = createMenuImg(menuItem.imgURL, menuItem.name);
    const menuContent = createMenuContent(
      menuItem.name,
      menuItem.regular,
      menuItem.large
    );
    menuDiv.appendChild(menuImg);
    menuDiv.appendChild(menuContent);
    parent.appendChild(menuDiv);
  };

  const createMenuSection = () => {
    const main = document.createElement('main');
    main.classList.add('menu-main');
    for (let i = 0; i < menuItems.length; i++) {
      createMenuItem(menuItems[i], main);
    }
    content.appendChild(main);
  };

  const load = () => {
    content.innerHTML = '';
    createHeader();
    createMenuSection();
  };

  return {
    load,
  };
})();

export default menuPage;
