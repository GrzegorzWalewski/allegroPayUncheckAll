chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggleCheckboxes') {
    const checkboxes = document.getElementById("tab_0").getElementsByTagName("input");
    for (const checkbox of checkboxes) {
      checkbox.click();
    }
  }
});