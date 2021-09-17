import view from '../views/contact.html';

const Contact = () => {
    const divElement = document.createElement('div');
    divElement.classList.add('contact');
    divElement.innerHTML = view;

    return divElement;
}

export default Contact;