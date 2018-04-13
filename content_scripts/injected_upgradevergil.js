window.onload = () => {
  document.querySelector(".fb-message-container a").href = "/feedback";
  document.querySelector(".fb-message-container a div").innerHTML = "Send Feedback";
  document.querySelector(".fb-message-container").style.display = "flex";
}