const customCursor = document.getElementById("customCursor");
const container = document.getElementById("container");
const verticalLine = document.getElementById("verticalLine");
const horizontalLine = document.getElementById("horizontalLine");

// The custom mouse ai pickr elements and function
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const containerRect = container.getBoundingClientRect();

  verticalLine.style.left = `${x}px`;
  horizontalLine.style.left = `${x - containerRect.left}px`;
  horizontalLine.style.top = `${y}px`;

  const horizontalLineTop = y - containerRect.top;
  const verticalLineLeft = x - containerRect.left;

  customCursor.style.left = `${x}px`;
  customCursor.style.top = `${y}px`;

  if (
    x >= containerRect.left &&
    x <= containerRect.left + containerRect.width &&
    y >= containerRect.top &&
    y <= containerRect.top + containerRect.height
  ) {
    customCursor.style.display = "block";
  } else {
    customCursor.style.display = "none";
  }
});

// Function for letting things render on same page.
// Basically single page application
function loadContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    })
    .catch((error) => console.error("Error:", error));
}
