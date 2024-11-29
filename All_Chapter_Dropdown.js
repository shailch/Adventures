// Inject the dropdown styles
var style = document.createElement("style");
style.innerHTML = `
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-button {
    background-color: #4CAF50; /* Green */
    color: white;
    padding: 10px 15px;
    border-radius: 12px;border: none;
    font-size: 14px;font-family:Arial, Helvetica, sans-serif;
    border: none;
    cursor: pointer;
  }

  .dropdown-button:hover {
    background-color: #45a049;
  }

  .dropdown-menu {
    display: none; /* Hidden by default */
    position: absolute;
    background-color: #b1bd8b;
    border-radius: 12px;
    min-width: 76px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-menu a {
    color: black;
    padding: 12px 12px;
    font-size: 12.5px;;
    text-decoration: none;
    display: block;
    margin-right: 10px;
  }

  .dropdown-menu a:hover {
    background-color: #74b06c;
    border-radius: 12px;
    padding:10px
  }

  .dropdown:hover .dropdown-menu {
    display:block;
    padding-left: 0%;
  }
`;
document.head.appendChild(style);

// Inject the dropdown HTML
var dropdownContainer = document.createElement("div");
dropdownContainer.innerHTML = `
  <div class="dropdown">
    <button class="dropdown-button">Chapters</button>
    <div class="dropdown-menu">
      <a href="../Homepage/index.html"> Home </a>
      <a href=".../Chapter-1/Chapter-1.html">Chapter-1</a>
      <a href="../Chapter-2/Chapter-2.html">Chapter-2</a>
      
    </div>
  </div>
`;
document.body.appendChild(dropdownContainer);
