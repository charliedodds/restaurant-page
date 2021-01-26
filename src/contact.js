const contactPage = (() => {
  const content = document.getElementById('content');
  const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Contact';

    header.appendChild(title);

    content.appendChild(header);
  };

  const createNameInput = (parent) => {
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name-container');
    const nameLabel = document.createElement('label');
    nameLabel.for = 'nameInput';
    nameLabel.textContent = 'Name';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'nameInput';
    nameInput.name = 'name';
    nameInput.placeholder = 'Name';
    nameInput.required = true;

    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);
    parent.appendChild(nameDiv);
  };

  const createEmailInput = (parent) => {
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('email-container');
    const emailLabel = document.createElement('label');
    emailLabel.for = 'emailInput';
    emailLabel.textContent = 'Email';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'emailInput';
    emailInput.name = 'email';
    emailInput.placeholder = 'Email';
    emailInput.required = true;

    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);
    parent.appendChild(emailDiv);
  };

  const createTextArea = (parent) => {
    const textDiv = document.createElement('div');
    textDiv.classList.add('text-container');
    const textLabel = document.createElement('label');
    textLabel.for = 'textarea';
    textLabel.textContent = 'Message';
    const textarea = document.createElement('textarea');
    textarea.id = 'textarea';
    textarea.placeholder = 'Let us know what you think!';
    textarea.required = true;
    textarea.cols = '40';
    textarea.rows = '8';

    textDiv.appendChild(textLabel);
    textDiv.appendChild(textarea);
    parent.appendChild(textDiv);
  };

  const createSubmitBtn = (parent) => {
    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-btn');
    submitBtn.textContent = 'Submit';
    parent.appendChild(submitBtn);
  };

  const createForm = (parent) => {
    const form = document.createElement('form');

    createNameInput(form);

    createEmailInput(form);

    createTextArea(form);

    createSubmitBtn(form);

    parent.appendChild(form);
  };

  const createMain = () => {
    const main = document.createElement('main');
    main.classList.add('contact-main');

    createForm(main);

    content.appendChild(main);
  };
  const load = () => {
    content.innerHTML = '';
    createHeader();
    createMain();
  };

  return {
    load,
  };
})();

export default contactPage;
