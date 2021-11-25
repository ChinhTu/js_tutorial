const createButton = (name) => {
  const btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.innerHTML = name;
  return btn;
};
