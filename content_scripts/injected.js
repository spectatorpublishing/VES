var injected_logo = document.querySelector("#site-name a");
injected_logo.style.backgroundImage = "url(" + chrome.extension.getURL("icons/vergil-plain.png") + ")"
injected_logo.parentElement.style.paddingTop = "15px";
injected_logo.parentElement.style.paddingBottom = "8px";