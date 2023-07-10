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
          <div class="item_thumbnail ${obj.color}">
            <img src="${obj.image}" alt="${obj.type}">
          </div>
          <span class="item_name">${obj.name}</span>
          <span class="item_desc">${obj.gender}, ${obj.size}</span>
        </li>
    `
  }

  // Handle button click
  function onButtonClick(event, items) {
    const target = event.target;
    const key = target.dataset.key;
    const value = target.dataset.value;
    const buttons = document.querySelectorAll('.btn')
    
    // button class
    buttons.forEach(button => {
      if (button === target) {
        button.classList.add('active')
      } else {
        button.classList.remove('active');
      }
    })

    if (key == null || value == null) {
      return;
    } 
    makeItem(items.filter(item => item[key] === value))
    
  }

  // filtering items
  function setEventListener(items) {
    const all = document.querySelector('.all');
    const buttons = document.querySelector('.buttons');
    all.addEventListener('click', () => {
      makeItem(items)
    })
    buttons.addEventListener('click', event => {
      onButtonClick(event, items)
    })
  }
  // main
  loadItems()
    .then(items => {
      makeItem(items)
      setEventListener(items);
    })
    .catch(console.log);
  
})();