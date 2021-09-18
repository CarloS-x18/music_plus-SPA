import pages from "../controllers/index.controller";

const main = document.querySelector('.root');

const router = (route) => {

    main.innerHTML = '';

    switch (route) {
        case '#/':
            return main.appendChild(pages.Home());
        case '#/download':
            return main.appendChild(pages.Download());
        case '#/plans':
                return console.log('Plans');
        case '#/contact':
            return main.appendChild(pages.Contact());
        default:
            return console.log(404);
    }
}

export default router;