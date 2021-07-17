// Navbar with different tabs
function openTab(event, tabName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('active');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add('active');
}


// Generate the menu randomly
function randomMenu() {
	var main_courses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"]
	var techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"]
	var sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"]
	var seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"]
	
	var random_main_course = main_courses[Math.floor(Math.random()*main_courses.length)]
	var random_technique = techniques[Math.floor(Math.random()*techniques.length)]
	var random_side = sides[Math.floor(Math.random()*sides.length)]
	var random_seasoning = seasonings[Math.floor(Math.random()*seasonings.length)]
	var menu = `${random_main_course} ${random_technique}, avec ${random_side} ${random_seasoning}`;

	return menu
}

// Change of the content of the menu when clicking on the button
function changeMenu() {
	const menuDom = document.getElementsByClassName('rand-menu');
	tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < menuDom.length; i++) {
    menuDom[i].innerHTML = `${randomMenu()}`;
  }
}

// Pop up
function popupDisplay() {
  console.log("ça marche wesh");
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
document.getElementsByTagName('body')[0].addEventListener('mouseleave', popupDisplay);

// Drag and drop
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

function allowDrop(event) {
  event.preventDefault();
}

