export function openChatWindow() {
  document.querySelector("#chatwindow")?.classList.remove("hidden");
  document.querySelector("#chatwindowcontent")?.classList.add("animate-slideUp");
}

export function openNewPostWindow() {
  document.querySelector("#newpostwindow")?.classList.remove("hidden");
  document.querySelector("#newpostwindowcontent")?.classList.add("animate-slideUp");
}
