function openModalEr(id, productPath) {
    const popup = document.getElementById(id);
    popup.classList.remove('hidden');
    popup.querySelector('.popup__overlay').classList.remove('hidden');
    popup.querySelector('.popup__overlay').addEventListener('click', () => closeModalEr(id));
    document.body.style.overflowY = 'hidden';
    renderPage(productPath);
}

function closeModalEr(id) {
    const popup = document.getElementById(id);
    popup.classList.add('hidden');
    popup.querySelector('.popup__overlay').classList.add('hidden');
    document.body.style.overflowY = 'auto';
    document.getElementById('contentAtcModal').innerHTML = '';
    document.querySelector('.lds-ring').classList.remove('hidden');
}

function renderPage(productPath) {
    let url;
    const urlObject = new URL(`https://www.weargales.com/${productPath}`);

    if (urlObject.search === "") {
        url = `https://www.weargales.com/${productPath}?view=er-atc-modal`;
    } else {
        url = `https://www.weargales.com/${productPath}&view=er-atc-modal`;
    }
    renderSectionFromFetch(url, productPath);
}

async function renderSectionFromFetch(url, productPath) {
    const contentModal = document.getElementById('contentAtcModal');
    const response = await fetch(url);
    const responseText = await response.text();
    const newContent = new DOMParser()
        .parseFromString(responseText, 'text/html').getElementById('productPageContainer').innerHTML;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = newContent;
    document.querySelector('.lds-ring').classList.add('hidden');
    contentModal.appendChild(newDiv);
    contentModal.querySelector('.product-page-info')
        .insertAdjacentHTML('beforebegin', `<a class="more-info" href="https://www.weargales.com${productPath}">More info</a>`);
    loadEvents(productPath);
}

function loadEvents(productPath) {
    let $atcButton = document.querySelector('.product-page-info__button-add-to-cart button[type="submit"]');
    $atcButton.addEventListener('click', () => {
        setTimeout(() => {
            closeModalEr('atcModal')
        }, 1000)
    })

    const pdpScripts = document.createElement('script');
    pdpScripts.innerHTML = `theme.AssetsLoader.require('scripts', 'product_page');`

    document.getElementById('contentAtcModal').appendChild(pdpScripts);
    theme.LazyImage.update();

    const urlObject = new URL(`https://www.weargales.com/${productPath}`);

    const color = urlObject.searchParams.get('color').replaceAll('-', '');
    if (color) {
        const selectedItem = document.getElementById('contentAtcModal').querySelector(`.product-options__value[data-value="${color}"]`);
        if (selectedItem) {
            selectedItem.click()
            setTimeout(() => {
                selectedItem.click()
            }, 400);
        };
    }

    const fit = urlObject.searchParams.get('fit');
    if (fit) {
        let selectedFit = null;
        if (fit === 'm') {
            selectedFit = document.getElementById('contentAtcModal').querySelector(`.product-options__value[data-code="unisex-M"]`);
        }
        if (fit === 'w') {
            selectedFit = document.getElementById('contentAtcModal').querySelector(`.product-options__value[data-code="unisex-W"]`);
        }
        if (selectedFit) {
            setTimeout(() => {
                selectedFit.click();
            }, 400);
        }
    }

    document.getElementById('contentAtcModal').querySelector('.more-info').href = `https://www.weargales.com${productPath}`;
}