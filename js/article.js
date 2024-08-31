// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};


// obtains the header
const header = document.querySelector('header');

header.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid nav-container">
          <a class="navbar-brand" href="#">
              <img class="logo" 
              alt="A smiley face formed using two notes and a tie" 
              src="img/logos/website-logo.png" style="height: 40px;">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
              <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link" aria-current="page" href="index.html#latest-articles">Articles</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="sheet-music.html">Sheet Music</a>
              </li>
              </ul>
          </div>
          <!-- Scroll Indicator -->
          <div class="progress-container">
              <div class="progress-bar" id="myBar"></div>
          </div>
      </div>
  </nav>
  <div style="height: 55px">
      <!-- FILL -->
  </div>
`;


const footer = document.querySelector('footer');
footer.innerHTML = `
  <div class="container">
      <h2>Socials</h2>
      <!-- Logos -->
      <div id="social-media-links">
          <!--SOCIAL MEDIA LINKS WHERE ONLY YOUTUBE AND INSTAGRAM HAVE PAGES-->
          <a href="https://www.facebook.com" class="fa fa-facebook logo">
              <span class="sr-only">Visit my facebook page here</span>
          </a>
          <a href="https://www.twitter.com" class="fa fa-twitter logo">
              <span class="sr-only">Visit my twitter page here</span>
          </a>
          <a href="https://www.youtube.com/@RyPangi5/" class="fa fa-youtube logo">
              <span class="sr-only">Visit my YouTube channel here</span>
          </a>
          <a href="https://www.instagram.com/rpangmusic/" class="fa fa-instagram logo">
              <span class="sr-only">Visit our instagram page here</span>
          </a>
      </div>
  </div>
`;

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}