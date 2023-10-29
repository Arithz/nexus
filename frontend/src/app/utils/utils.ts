export function openPopup() {
  document.querySelector("#popup")?.classList.remove("hidden");
  document.querySelector("#popupcontent")?.classList.add("animate-slideUp");
}
