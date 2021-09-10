import view from '../views/home.html';

const Home = () => {
    const divElement = document.createElement('div');
    divElement.classList.add('home');
    divElement.innerHTML = view;

    return divElement;
}

export default Home;