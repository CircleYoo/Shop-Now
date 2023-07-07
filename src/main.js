(function () {
  'use strict';
  
  // Fetch the items from the JSON file
  function loadItems() {
    return fetch('./data/item.json')
      .then(res => res.json())
      .then(result => result.items)
  }
  
  // update the list with the given items
  function makeItem(items) {
    const itemWrapper = document.querySelector(".items");
    itemWrapper.innerHTML = items.map(item => createHTMLString(item)).join('');
  }
  
  // Create HTML list item from the given data item
  function createHTMLString(obj) {
    return `
        <li class="item">
          <img src="${obj.image}" alt="${obj.type}" class="item_thumbnail">
          <span class="item_desc">${obj.gender}, ${obj.size}</span>
        </li>
    `
  }

  // Handle button click
  function onButtonClick(event, items) {
    const target = event.target;
    const key = target.dataset.key;
    const value = target.dataset.value;
    // console.log(target, key, value)
    if (key == null || value == null) {
      return;
    } 
    updateItems(items, key, value);
  }
  
  // Make the items matching {key, value} invisible.
  function updateItems(items, key, value) {
    items.forEach(item => {
      console.log(item, key, value)
      if (item.dataset[key] === value) {
        item.classList.remove('invisible');
      } else {
        item.classList.add('invisible');
      }
    })
  }

  // filtering items
  function setEventListner(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => makeItem(items))
    buttons.addEventListener('click', event => onButtonClick(event, items))
  }
  // main
  loadItems()
    .then(items => {
      makeItem(items)
      setEventListner(items);
    })
    .catch(console.log);
  
})();