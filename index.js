const dropDownLinks = document.getElementById("drop-down-links");
const servicesLink = document.getElementById("services-link");
const overlayPopup = document.getElementById("homepage-hero-overlay");
const contactOwerlay = document.getElementById("contact-overlay");
const closeOverlay = document.getElementById("overlay-close-btn");
const navBarPositions = document.getElementById("hero-navbar");
const scrollOff = document.body;
const locationNavbarBoxes = document.querySelectorAll(".package-location-navbar-box");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const navbar = document.querySelector(".nav-links-box");
const locationtpdetails = document.getElementById("tp-details");
const locationtourplan=document.getElementById("location-page-id");
const tourgallery=document.getElementById("tour-gallery");

for (let i = 0; i < locationNavbarBoxes.length; i++) {
  locationNavbarBoxes[i].addEventListener("click", (value) => {
    for (let j = 0; j < locationNavbarBoxes.length; j++) {
      locationNavbarBoxes[j].style.backgroundColor = "#f8f8f8";
      if(value.target.parentElement.children[1].innerHTML=="Tour Plan"){
        locationtpdetails.classList.remove("active");
        locationtourplan.classList.add("active");
        tourgallery.classList.remove("active");

      }
      else if(value.target.parentElement.children[1].innerHTML=="Location"){
        locationtpdetails.classList.add("active");
        locationtourplan.classList.remove("active");
        tourgallery.classList.remove("active");
      }
      else if(value.target.parentElement.children[1].innerHTML=="Gallery"){
        locationtpdetails.classList.remove("active");
        locationtourplan.classList.remove("active");
        tourgallery.classList.add("active");
      }

  }
  locationNavbarBoxes[i].style.backgroundColor = "#fff";
  });

}

let isModalOpen = false;

servicesLink.addEventListener("click", () => {
  if (!isModalOpen) {
    dropDownLinks.style.display = "block";
    isModalOpen = !isModalOpen;
  } else {
    dropDownLinks.style.display = "none";
    isModalOpen = !isModalOpen;
  }

});


let isNavbarOpen = false;

hamburgerIcon.addEventListener("click", () => {
  if(!isNavbarOpen){
    navbar.style.display = "flex";
    isNavbarOpen = !isNavbarOpen;
  } else {
    navbar.style.display = "none";
    isNavbarOpen = !isNavbarOpen;
  }
})

