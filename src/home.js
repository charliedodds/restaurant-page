const homePage = (() => {
  const content = document.getElementById('content');
  const createHeader = () => {
    content.innerHTML = '';

    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Chozen Noodle';

    header.appendChild(title);

    content.appendChild(header);
  };

  const createParagraphs = (parent) => {
    const firstPara = document.createElement('p');
    firstPara.textContent =
      'We’d like to say our origins can be traced back to Genghis Khan, but that’s only partly true.';
    parent.appendChild(firstPara);
    const secondPara = document.createElement('p');
    secondPara.textContent =
      'For those of you old enough to remember, we started out with a create-your-own-stir-fry concept called Mongolian Barbeque. Lots of fun but it was difficult to get the 8-foot iron grill set up in a shopping centre or motorway service station, let alone all the horses, swords, and associated weaponry you need these days.';
    parent.appendChild(secondPara);
    const thirdPara = document.createElement('p');
    thirdPara.textContent =
      ' So we looked for something simpler that allowed us to pursue our love of healthy tasty Asian food that used fresh ingredients. The result was Chozen Noodle.';
    parent.appendChild(thirdPara);
  };

  const createAboutSection = (parent) => {
    const homeContent = document.createElement('section');
    homeContent.classList.add('home-content');
    const subheading = document.createElement('h2');
    subheading.classList.add('subheading');
    subheading.textContent = 'About';
    homeContent.appendChild(subheading);
    createParagraphs(homeContent);
    parent.appendChild(homeContent);
  };

  const createHomeImage = (parent) => {
    const imgContainer = document.createElement('section');
    imgContainer.classList.add('img-container');
    const img = document.createElement('img');
    img.classList.add('home-img');
    img.src =
      'https://images.unsplash.com/photo-1552538962-40822613a09d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1830&q=80';
    imgContainer.appendChild(img);
    parent.appendChild(imgContainer);
  };

  const createMain = () => {
    const main = document.createElement('main');
    createAboutSection(main);
    createHomeImage(main);
    content.appendChild(main);
  };

  const load = () => {
    createHeader();
    createMain();
  };

  return {
    load,
  };
})();

export default homePage;
