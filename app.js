// Changing the content of INFOGRAPHIC section dynamically ---------------------------------------------

let aboutContent = document.querySelector("#infographic-about");
let honestyContent = document.querySelector("#infographic-honesty");

// If any change to input is done, depending on whether the input is
// checked or not, change the display of the respective content
document.querySelector(".toggle input").addEventListener("change", (e) => {
  aboutContent.style.display = e.target.checked ? "none" : "block";
  honestyContent.style.display = e.target.checked ? "block" : "none";
});

// ---------------------------------------------

const { skills, education } = window;
function main() {
  const gridContainer = document.querySelector(".skills-grid-container");
  const skillTrigger = document.querySelector("#skill-trigger");
  const eduTrigger = document.querySelector("#education-trigger");

  // Default Content
  for (let skill of skills) {
    gridContainer.appendChild(createCard(skill, "skill"));
  }
  document.querySelector("#skill-trigger").style.color = "#f76866";

  // Add click listener to skill-trigger -----------------------------------------------
  skillTrigger.addEventListener("click", function () {
    let eduCards = document.querySelectorAll(".skills-grid-container > .education-card");
    let skillCards = document.querySelectorAll(".skills-grid-container > .skill-card");
    let eduTitle = document.querySelector("#education-trigger");
    let skillTitle = document.querySelector("#skill-trigger");

    // Removing the existing cards
    for (let card of skillCards) {
      card.remove();
    }
    for (let card of eduCards) {
      card.remove();
    }
    eduTitle.style.color = "#7e7e7e";

    // Create cards
    skills.forEach((skill) => {
      gridContainer.appendChild(createCard(skill, "skill"));
    });

    skillTitle.style.color = "#f76866";
  });

  // Add click listener to education-trigger ------------------------------------------
  eduTrigger.addEventListener("click", function () {
    let eduCards = document.querySelectorAll(".skills-grid-container > .education-card");
    let skillCards = document.querySelectorAll(".skills-grid-container > .skill-card");
    let eduTitle = document.querySelector("#education-trigger");
    let skillTitle = document.querySelector("#skill-trigger");

    // Removing the existing cards
    for (let card of eduCards) {
      card.remove();
    }
    for (let card of skillCards) {
      card.remove();
    }
    skillTitle.style.color = "#7e7e7e";

    // Create cards
    education.forEach((element) => {
      gridContainer.appendChild(createCard(element, "education"));
    });

    eduTitle.style.color = "#f76866";
  });

  // -Adding click listeners to Radio buttons -----------------------------------------------------------------
  const other = document.querySelector("#other");
  const reasonJob = document.querySelector("#job-offer");
  const reasonSchool = document.querySelector("#school");
  const otherDescription = document.querySelector("#other-description");

  // Add event listener to other radio button and if clicked, display the
  // text area user can put in values
  other.addEventListener("click", function (e) {
    otherDescription.style.display = e.target.checked ? "block" : "none";
  });

  // Add event listeners to the other two radio buttons so that if clicked
  // they will stop displaying the other description and clear its value.
  reasonJob.addEventListener("click", function () {
    otherDescription.style.display = "none";
    otherDescription.value = "";
  });
  reasonSchool.addEventListener("click", function () {
    otherDescription.style.display = "none";
    otherDescription.value = "";
  });
  // Validating form submission --------------------------------------------------------------------------
  const form = document.querySelector("#contact-me-form");
  form.onsubmit = function (event) {
    // Check if all fields are filled in the form
    if (!form.checkValidity()) {
      // Add the class "was-validated" to turn on error messages
      form.classList.add("was-validated");
      event.preventDefault();
      return false;
    }

    return true;
  };
}

//****************************Defined Functions ********************************
function createCard(data, type) {
  // The "type" parameter will have either "skill" or "education"
  // and the function will react differently according to the argument

  // Create article element
  let article = document.createElement("article");
  article.classList.add(`${type}-card`);

  if (type === "skill") {
    // Create picture element
    let picture = document.createElement("picture");
    let image = document.createElement("img");
    image.src = data.imageUrl;
    picture.appendChild(image);
    article.appendChild(picture);

    // Create name heading
    let name = document.createElement("h3");
    name.innerHTML = data.name;
    article.appendChild(name);

    // Create description
    let description = document.createElement("p");
    description.innerHTML = data.description;
    article.appendChild(description);
  } else if (type === "education") {
    // Create school name heading
    let school = document.createElement("h3");
    school.innerHTML = data.school;
    article.appendChild(school);

    // Create school name heading
    let degree = document.createElement("h4");
    degree.innerHTML = data.degree;
    article.appendChild(degree);

    // Create span and p tag for year
    let year = document.createElement("p");
    let yearSpan = document.createElement("span");
    yearSpan.innerHTML = data.year;
    year.appendChild(yearSpan);
    article.appendChild(year);

    // Create description
    let description = document.createElement("p");
    description.innerHTML = data.description;
    article.appendChild(description);
  }

  return article;
}

addEventListener("DOMContentLoaded", main);
