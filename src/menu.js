const menuPage = (() => {
  const load = () => {
    const content = document.getElementById('content');

    content.innerHTML = '';

    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Menu';

    header.appendChild(title);

    content.appendChild(header);
  };

  return {
    load,
  };
})();

export default menuPage;
