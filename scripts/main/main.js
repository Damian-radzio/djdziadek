const experienceSection = document.querySelector('.experience');
const evenIconOffer = [...document.querySelectorAll('.types .even')];
const oddIconOffer = [...document.querySelectorAll('.types .odd')];
const sectionOffer = document.querySelector('.offer');

// menubar with animations on scroll 
function MinimalizeMenuBar(menuContent,  menuContentUl, menuContentText, menuHeader, menuIcon, headerName){

const items = [
  menuContent = document.querySelector('.menu-content'),
  menuContentUl = document.querySelector('.menu-content .wrapper ul'),
  menuContentText = document.querySelectorAll('.menu-content .wrapper ul li a'),
  menuHeader = document.querySelector('.header'),
  menuIcon = document.querySelector('.wrap'),
  headerName = document.querySelector('.name'),
]


  if(scrollY > 0){
   items[3].classList.add('active');
    headerName.classList.add('active');
    items[items.length-2].classList.add('active');

    if(window.innerWidth >= 1024){
      items[0].classList.add('scroll');
    }

    if(window.innerWidth < 1024){
      items[0].classList.add('scrollMobile');
      items[1].classList.add('scrollMobile');

      items[2].forEach(a => {
        a.classList.add('scrollMobile');
      });
    }

  }else{
    items[items.length-1].classList.remove('active');
    items[0].classList.remove('active');
    items[0].classList.remove('scroll');
    items[0].classList.remove('scrollMobile');
    items[3].classList.remove('active');
    items[items.length-2].classList.remove('active');
    items[1].classList.remove('scrollMobile');
    items[2].forEach(a => {
      a.classList.remove('scrollMobile');
    });
  }
}

// typing effect header 

setTimeout(() => {
  let i = 0;
  const speed = 10;
  const text = `Przy mnie każda impreza będzie niezapomniana!`;
  
  (function TypeWriter(){
    if(i< text.length){
      const textHeader = document.querySelector('.about-intro .text-intro')
      textHeader.innerHTML += text.charAt(i);
      i++;
      
      setTimeout(TypeWriter, speed);
      if(textHeader.textContent === text){
        const buttonHeader = document.querySelector('.about-btn');
        buttonHeader.classList.add('visible');
      }
    }
  })();
}, 300);





// experience counter
const experienceNumber = document.querySelector('.experience-number');
const updateCount = () => {
  let value = 7;
  let i = 0;
  setInterval(() => {
    experienceNumber.textContent = i;
    if(i<value){
      i++;
      if(i === 3){
        experienceNumber.classList.add('active');;
      }
    }
  }, 90);
}

const checksScrollPos = () => {
  if(window.scrollY >= window.innerHeight/3){
    updateCount();
    window.removeEventListener('scroll', checksScrollPos, false);
  }
}







let time = 100;
const offerIconScrollAnimation = () => {
  if(window.scrollY > window.innerHeight + experienceSection.scrollHeight + sectionOffer.scrollHeight / 2){
    setInterval(() => {
      oddIconOffer[0].classList.add('active');
      setInterval(() => {
        evenIconOffer[0].classList.add('active');
        setInterval(() => {
          oddIconOffer[1].classList.add('active');
          setInterval(() => {
            evenIconOffer[1].classList.add('active');
          }, time);
        }, time);
      }, time);
    }, time);
  } 
}


const hideMenu = () => {
  MenuWrap.classList.remove('active');
  one.classList.remove('active-menu');
  two.classList.remove('active-menu');
  three.classList.remove('active-menu');
  menuIconWrap.classList.remove('active-menu');
}
const moveToSection = (place, position) => {
  $('body, html').animate({
    scrollTop: place.offset().top + position
  }, 100);
}

// about Me button scroll animation
const AboutMeButton = $('.about-btn');
const moveToAboutMe = (e) => {
  e.preventDefault();
  moveToSection($('.about-me'), - 50);
  setTimeout(() => {
    hideMenu();
  }, 300);
}
AboutMeButton.click(moveToAboutMe);

// menu after click
// about me
const AboutMeMenuBtn = $('.menu-about-me');
AboutMeMenuBtn.click(moveToAboutMe);

// offer
const OfferMenuBtn = $('.menu-offer');
const moveToOffer = (e) => {
  e.preventDefault();
  moveToSection($('.offer'), - 100);
  setTimeout(() => {
    hideMenu();
  }, 300);
}
OfferMenuBtn.click(moveToOffer);


// gallery
const moveToGallery = (e) => {
  e.preventDefault();
  moveToSection($('.gallery'), - 100);
  
  setTimeout(() => {
    hideMenu();
  }, 300);
}
const galleryMenuBtn =  $('.menu-gallery');
galleryMenuBtn.click(moveToGallery);


// contact (menu btn & icon)

const moveToContact = (e) => {
  e.preventDefault();
  moveToSection($('.contact'), - 100);
  setTimeout(() => {
    hideMenu();
  }, 300);
  
}
const contactMenuBtn = $('.menu-contact');
const contactIcon = $('.contact-icon');

contactMenuBtn.click(moveToContact);
contactIcon.click(moveToContact);


// back to top Animation
const heroeName = document.querySelector('.name');
const backToTop = (e) => {
  e.preventDefault();
   moveToSection($('.main-header'), - 100);
   setTimeout(() => {
     hideMenu();
    }, 300);
  }
  const menuHome = document.querySelector('.menu-home');
  // photos in gallery animation
  const imageAnimation = (gallerySection, images) => {
    gallerySection = document.querySelector('.gallery');
    images = document.querySelectorAll('.photos .glightbox img');
    
    if(window.scrollY > window.innerHeight + experienceSection.scrollHeight + sectionOffer.scrollHeight + gallerySection.scrollHeight / 1.6 && window.screen.orientation.type === "portrait-primary"){
      images.forEach(image => {
        image.classList.add('active');
      });
    }else if(window.screen.orientation.type === "landscape-primary" === "landscape-primary" && window.scrollY > window.innerHeight + experienceSection.scrollHeight + sectionOffer.scrollHeight + gallerySection.scrollHeight / 3){
      images.forEach(image => {
        image.classList.add('active');
      });
    } else{
      images.forEach(image => {
        image.classList.remove('active');
      });
    }
  }
  
  // menu icon animation
  const iconLines = [
    one = document.querySelector('.one'),
  two = document.querySelector('.two'),
  three = document.querySelector('.three'),
];

// wrap
const menuIconWrap = document.querySelector('.wrap');
const MenuWrap = document.querySelector('.menu-content');
const MenuIconAnimation = (e) => {
  e.preventDefault();
  iconLines[0].classList.toggle('active-menu');
  iconLines[1].classList.toggle('active-menu');
  iconLines[2].classList.toggle('active-menu');
  
  menuIconWrap.classList.toggle('active-menu')
  // open menu animation
  MenuWrap.classList.toggle('active');
  
}

const checkOrientation = () => {
  if(window.innerWidth >= 1024 && window.screen.orientation.type === "landscape-primary"){
    MenuWrap.classList.add('active');
    menuIconWrap.classList.add('active');
    
  }else{
    hideMenu();
  }
}

// for messenger
// (function(d, s, id) {
  //   var js, fjs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) return;
  //   js = d.createElement(s); js.id = id;
  //   js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
  //   fjs.parentNode.insertBefore(js, fjs);
  // }(document, 'script', 'facebook-jssdk'));
  
  window.addEventListener('scroll', MinimalizeMenuBar);
  window.addEventListener('scroll', checksScrollPos);
  window.addEventListener('scroll', offerIconScrollAnimation);
  heroeName.addEventListener('click', backToTop);
  menuHome.addEventListener('click', backToTop);
  window.addEventListener('scroll', imageAnimation);
  menuIconWrap.addEventListener('click', MenuIconAnimation);
  window.addEventListener('orientationchange', checkOrientation);






  
  
  
  
  
  
  
  
  
  
  