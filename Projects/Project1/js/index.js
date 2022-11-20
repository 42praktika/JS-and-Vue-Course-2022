import {BUTTONS, MODALS, MODALS_TYPES} from "./const/modals";
import state from "./state/state";
import './watchers/watcher';

const renderButtons = () => {
    const buttons = document.querySelector('.buttons');
    BUTTONS.forEach(item => {
        const button = document.createElement('button');
        button.classList.add('btnWidget');
        const buttonText = document.createElement('p');
        buttonText.textContent = item.text;

        button.dataset.type = item.type;

        button.appendChild(buttonText);

        button.addEventListener('click', (event) => {
            state.openedModalType = item.type;
            event.stopPropagation();
        })

        buttons.append(button)

    })
};

const renderModals = () => {

    const page = document.querySelector('.wholePage');

    MODALS.forEach(item => {


        const widget = document.createElement('div');
        widget.classList.add('widget');

        widget.dataset.type = item.type;

        const widgetText = document.createElement('p');
        widgetText.textContent = item.text;

        const exitButton = document.createElement('button');
        exitButton.classList.add("exitButton");

        const exitIcon = document.createElement('div');
        exitIcon.classList.add("iconButton");
        exitIcon.textContent = "X";

        exitButton.addEventListener("click", (event) => {
            state.openedModalType = MODALS_TYPES.NONE;
            event.stopPropagation();
        })

        const nextButton = document.createElement('button');
        nextButton.classList.add("nextButton");

        const nextIcon = document.createElement('div');
        nextIcon.classList.add("iconButton");
        nextIcon.textContent = ">";

        nextButton.addEventListener("click", (event) => {
            const currentWidgetIndex = BUTTONS.findIndex((item) =>
                item.type === state.openedModalType);

            if (currentWidgetIndex === BUTTONS.length - 1) {
                state.openedModalType = BUTTONS[0].type;
            } else {
                state.openedModalType = BUTTONS[currentWidgetIndex + 1].type;
            }

            event.stopPropagation();
        })

        const prevButton = document.createElement('button');
        prevButton.classList.add("prevButton");

        const prevIcon = document.createElement('div');
        prevIcon.classList.add("iconButton");
        prevIcon.textContent = "<";

        prevButton.addEventListener("click", (event) => {
            const currentWidgetIndex = BUTTONS.findIndex((item) =>
                item.type === state.openedModalType);

            if (currentWidgetIndex === 0) {
                state.openedModalType = BUTTONS[BUTTONS.length - 1].type;
            } else {
                state.openedModalType = BUTTONS[currentWidgetIndex - 1].type;
            }

            event.stopPropagation();
        })

        prevButton.append(prevIcon);

        exitButton.append(exitIcon);

        nextButton.append(nextIcon);

        widget.append(nextButton);
        widget.append(exitButton);
        widget.append(prevButton);

        widget.append(widgetText);

        page.append(widget);


        switch (item.type) {
            case MODALS_TYPES.SHOWS:
                const input = document.createElement('input');
                const searchButton = document.createElement('button');
                searchButton.textContent = "Search"
                searchButton.classList.add("searchButton");

                const content = document.createElement('div');
                content.classList.add("widgetContent");

                searchButton.addEventListener('click', () => {

                    document.querySelectorAll('.films').forEach((item) => item.remove());

                    fetch("https://api.tvmaze.com/search/shows?q=" + input.value)
                        .then(response => response.json())
                        .then(data => data.forEach(item => {
                                const film = document.createElement('div');
                                film.classList.add("films");

                                const site = document.createElement('div');
                                site.classList.add("site");

                                const siteURL = document.createElement('a');
                                siteURL.classList.add("siteURL");

                                siteURL.href = item.show.officialSite;
                                siteURL.textContent = item.show.name;

                                site.append(siteURL);
                                film.append(site);

                                const image = document.createElement("div");
                                image.classList.add("images");

                                const img = document.createElement('img');
                                img.classList.add('image');

                                img.src = item.show.image.original;

                                image.append(img);
                                film.append(image);

                                content.append(film)
                            })
                            .catch(err => alert(err))
                        );
                    input.value = "";
                    widget.append(content);
                })
                widget.append(input);
                widget.append(searchButton);
                break;
            case MODALS_TYPES.DOGS:
                const select = document.createElement("div");
                select.classList.add("selectDog");

                const selectBreed = document.createElement("select");

                select.append(selectBreed);

                const breeds = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "basenji",
                    "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "chihuahua",
                    "chow", "clumber", "cockapoo", "coonhound", "cotondetulear", "dachshund", "dalmatian",
                    "dhole", "dingo", "doberman", "entlebucher", "eskimo", "germanshepherd", "golden", "groenendael",
                    "havanese", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labradoodle", "labrador", "leonberg",
                    "lhasa", "malamute", "malinois", "maltese", "mexicanhairless", "mix", "newfoundland", "otterhound",
                    "papillon", "pekinese", "pembroke", "pitbull", "pomeranian", "pug", "puggle", "pyrenees", "whippet",
                    "weimaraner", "vizsla", "tervuren", "stbernard", "shihtzu", "shiba", "sharpei", "saluki"];

                breeds.forEach((breed) => {
                    const option = document.createElement("option");
                    option.textContent = breed;
                    option.value = breed;
                    selectBreed.add(option);
                })

                selectBreed.addEventListener('change', () => {

                    let selectedBreed = document.querySelector('select').selectedIndex;
                    let breed = selectBreed[selectedBreed].text;
                    fetch("https://dog.ceo/api/breed/" + breed + "/images/random")
                        .then(response => response.json())
                        .then(data => {
                            const dogIMG = document.createElement("div");
                            dogIMG.classList.add("dogImage");

                            const img = document.createElement('img');
                            img.classList.add("dogImg");
                            img.src = data.message;

                            dogIMG.append(img);
                            widget.append(dogIMG);
                        })
                        .catch(err => alert(err));

                    document.querySelector(".dogImage").remove();
                })
                widget.append(select);
                break;
            case MODALS_TYPES.MAKEUP:
                const selectors = document.createElement("div");
                selectors.classList.add("selectors");

                const selectBrand = document.createElement("select");
                selectBrand.classList.add("brand");

                const brands = ["almay", "alva", "annabelle", "benefit", "boosh", "clinique", "colourpop", "covergirl",
                    "dalish", "deciem", "dior", "essie", "fenty", "glossier", "iman", "l'oreal", "marcelle", "marienatie", "maybelline",
                    "milani", "misa", "mistura", "moov", "nudus", "nyx", "orly", "pacifica", "revlon", "sante", "stila", "smashbox",
                    "suncoat", "zorah"];

                brands.forEach(brand => {
                    const option = document.createElement("option");
                    option.textContent = brand;
                    option.value = brand;
                    selectBrand.add(option);
                });

                const selectProduct = document.createElement("select");
                selectProduct.classList.add("product");

                const products = ["blush", "bronzer", "eyebrow", "eyeliner", "eyeshadow", "foundation", "lipstick", "mascara"];

                products.forEach(product => {
                    const option = document.createElement("option");
                    option.textContent = product;
                    option.value = product;
                    selectProduct.add(option);
                });

                selectProduct.addEventListener("change", () => {
                    document.querySelectorAll('.productCard').forEach((item) => item.remove());

                    let selectedBrand = document.querySelector('.brand').selectedIndex;
                    let selectedProduct = document.querySelector(".product").selectedIndex;

                    let brand = selectBrand[selectedBrand].text;
                    let product = selectProduct[selectedProduct].text;

                    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=" + brand + "&product_type=" + product)
                        .then(response => response.json())
                        .then(data => data.forEach(item => {
                                const productCard = document.createElement('div');
                                productCard.classList.add("productCard");

                                const site = document.createElement('div');
                                site.classList.add("site");

                                const productName = document.createElement("a");
                                productName.classList.add("siteURL");
                                productName.href = item.product_link;
                                productName.textContent = item.name;

                                const price = document.createElement("div");
                                const priceText = document.createElement("p");
                                priceText.textContent = item.price + " $";
                                price.append(priceText);

                                const image = document.createElement("div");
                                image.classList.add("images");

                                let img = document.createElement("img");
                                img.classList.add("image");
                                img.src = item.image_link;

                                image.append(img);
                                site.append(productName);
                                productCard.append(site);
                                productCard.append(image);
                                productCard.append(price);
                                widget.append(productCard);
                            })
                        )
                        .catch(err => alert(err))
                })

                selectors.append(selectBrand);
                selectors.append(selectProduct);
                widget.append(selectors);
        }
    })
}

renderButtons();
renderModals();


