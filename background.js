chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes('allegro.pl/moje-allegro/zakupy/allegro-pay/')) {
    chrome.tabs.sendMessage(tab.id, { action: 'toggleCheckboxes' });
  }
});