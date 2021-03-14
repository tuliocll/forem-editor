let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});

chrome.tabs.onActivated.addListener((e) => {
  fetch(chrome.runtime.getURL("/modal.html"))
    .then((response) => response.text())
    .then((data) => {
      chrome.storage.sync.set({ html: data });
    })
    .catch((err) => {
      // handle error
    });

  chrome.scripting.executeScript({
    target: { tabId: e.tabId },
    files: ["script.js"],
  });
});
