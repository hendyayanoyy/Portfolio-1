
// Dark Mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  
    toggleSVGColor();
    toggleNavbarTextColor();
    toggleTextShadow(); 
    toggleBoxShadow();
  }
  
  function toggleTextShadow() {
    const body = document.body;
    const textNameSpan = document.querySelectorAll('.text-name span');
  
    if (body.classList.contains('dark-mode')) {
      textNameSpan.forEach(span => {
        span.style.textShadow = '1px 1px 2px white';
      });
    } else {
      textNameSpan.forEach(span => {
        span.style.textShadow = '1px 1px 2px black'; 
      });
    }
  }


  
  
  
  
//   back to home 
if (performance.navigation.type === 1) {
    window.location.href = "#home"; 
  }
  