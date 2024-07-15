const scrollers = document.querySelectorAll(".wrapper");

function addanimation(){
    scrollers.forEach((scroll) => {
        scroll.setAttribute("data-animated" ,true)

    const scroinner = scroll.querySelector(".inner")
    const scrollcontent = Array.from(scroinner.children)
    
    scrollcontent.forEach((item) => {
        const duplicateitem = item.cloneNode(true);
  duplicateitem.setAttribute('data-hidden' , true);
  scroinner.appendChild(duplicateitem)

    })
    })
}
addanimation()



const scrollers1 = document.querySelectorAll(".wrapperr");

function addanimation2(){
    scrollers1.forEach((scroll) => {
        scroll.setAttribute("data-animated" ,true)

    const scroinner = scroll.querySelector(".innerr")
    const scrollcontent = Array.from(scroinner.children)
    
    scrollcontent.forEach((item) => {
        const duplicateitem = item.cloneNode(true);
  duplicateitem.setAttribute('data-hidden' , true);
  scroinner.appendChild(duplicateitem)

    })
    })
}
addanimation2()

let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

// Initialize the previous scroll position
function onScroll() {
    // Get the current scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    
    if(scrollTop > 652){
    if (scrollTop < lastScrollTop) {
      // User scrolled up
      document.querySelector('.nav').classList.add('scrolled-up');
    } else {
      // User scrolled down
      document.querySelector('.nav').classList.remove('scrolled-up');
      document.querySelector('.nav').classList.add('basic');

    }
  }
  
    // Update the previous scroll position
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  }
  
  // Add the scroll event listener
  window.addEventListener('scroll', onScroll);
  
   

 