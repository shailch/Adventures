document.addEventListener('DOMContentLoaded', () => {
  // Apply body styles
  document.body.style.cssText = `
    background: radial-gradient(ellipse at bottom, #022227 0%, #000000 100%);
    position: relative;
    height: 100vh;
    width: 100vw;
    margin: 0;
  `;

  // Create a <style> tag for keyframes
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    @keyframes shine {
      from {
        background-position: center 0;
      }
      to {
        background-position: center 200%;
      }
    }
  `;
  document.head.appendChild(styleTag);

  // Create the heading element
  const heading = document.createElement('h1');
  heading.textContent = 'Adventures Of Rudy'; // Replace with your desired text
  heading.style.cssText = `
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 9vh;
    letter-spacing: 1vw;
    position: absolute;
    top: 25vh;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    background: url('https://thumbs.dreamstime.com/b/tropical-flower-pattern-seamless-flowers-blossom-flowers-nature-background-vector-illustration-61142748.jpg');
    background-size: auto 200%;
    background-clip: text;
    -webkit-background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    animation: shine 8s linear infinite;
  `;

  // Append the heading to the body
  document.body.appendChild(heading);
});



