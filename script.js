const ul = document.querySelector("m-tabs").querySelector('ul');
const observer = new MutationObserver(() => {
  const ul = document.querySelector("m-tabs ul");
  if (ul && !ul.querySelector('li.my-custom-button')) { // avoid duplicate insertion
    const existingLi = ul.querySelector('li:last-child');
    const newLi = document.createElement('li');
    const newButton = document.createElement('button');

    if (existingLi) newLi.className = existingLi.className;

    newButton.removeAttribute('aria-selected');
    newButton.removeAttribute('aria-controls');

    const img = document.createElement('img');
    img.src = chrome.runtime.getURL('icon.png');
    img.alt = 'Logo';
    img.style.width = '35px';
    img.style.height = '35px';

    newButton.style.border = 'unset';
    newButton.style.padding = 'unset';
    newButton.style.cursor = 'pointer';
    
    newButton.appendChild(img);
    
    newButton.addEventListener("click", () => {
      const checkboxes = document.getElementById("tab_0").getElementsByTagName("input");
      for (const checkbox of checkboxes) {
        checkbox.click();
      }
    });
    
    newLi.appendChild(newButton);
    ul.insertBefore(newLi, ul.firstChild);
    observer.disconnect(); // stop observing once done
  }
});

observer.observe(document.body, { childList: true, subtree: true });