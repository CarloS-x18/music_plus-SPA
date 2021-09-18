import view from '../views/download.html';

const Download = () => {
    const divElement = document.createElement('div');
    divElement.classList.add('download');
    divElement.innerHTML = view;

    return divElement;
}

export default Download;