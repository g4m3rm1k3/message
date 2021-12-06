const { hash } = window.location;
const message = atob(hash.replace("#", ""));
if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const messageForm = document.querySelector("#message-form");
  const linkForm = document.querySelector("#link-form");

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector("#link-input");
  linkForm.classList.remove("hide");
  messageForm.classList.add("hide");
  window.location.hash = "";
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
const copyButton = document.querySelector("#copy-button");
copyButton.addEventListener("click", myFunction);

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("link-input");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
}
