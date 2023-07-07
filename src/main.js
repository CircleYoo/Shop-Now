(function () {
  'use strict';
  
  const itemWrapper = document.querySelector(".items")
  let itemData;
  fetch('./data/item.json')
  .then(res => res.json())
  .then(result => {
    itemData = result;
    makeItem(itemData);
  })
    .catch(err => console.log("item error", err))
  
  function makeItem(data) {
    let html = ``;
    data.forEach(obj => {
      let temp = `
        <li class="item">
          <img src="${obj.img}" alt="tshirt" class="item_thumbnail">
          <span class="item_desc">male, large</span>
        </li>
      `
      html += temp;
    })
    itemWrapper.innerHTML = html;
  }

})();