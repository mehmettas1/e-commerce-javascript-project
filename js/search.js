function searchFunc(data) {
  const searchWrapperDom = document.querySelector(".search-results .results");
  let result = "";

  data.forEach((item) => {
    result += `
    <a href="#" class="result-item">
            <img src=${item.img.singleImage} class="search-thumb" alt="">
            <div class="search-info">
              <h4>${item.name}</h4>
              <span class="search-sku">SKU: PD0016</span>
              <span class="search-price">$${item.price.newPrice.toFİxed(2)}</span>
            </div>
          </a>
    `;
  });
  searchWrapperDom.innerHTML = result;
}

export default searchFunc;
