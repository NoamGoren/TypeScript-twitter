export function renderLayout() {
  const layout = document.createElement("div");
  layout.id = "layout";
  layout.classList.add("container");
  const mainContent = document.createElement("main");
  const postsContainer = document.createElement("ul")!;
  postsContainer.id = "ulID";
  mainContent.appendChild(postsContainer);
  layout.appendChild(mainContent);
  return { layout, mainContent };
}
