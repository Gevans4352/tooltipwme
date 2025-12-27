export function tooltipWME(selector = ".tooltip-toogler") {
  const tooltipToggle = document.querySelectorAll(selector);

  tooltipToggle.forEach((el) => {
    const dir = el.getAttribute("data-dir") || "onTop";
    const title = el.getAttribute("data-title") || "";

    el.innerHTML += `
      <div class="toolTip ${dir}">
        <span>${title}</span>
      </div>
    `;
  });
}
