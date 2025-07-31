  // -----------------------------
  // Search Popup
  // -----------------------------

    $(document).ready(function(){
      $('a[href="#search"]').on('click', function(event) {                    
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
      });            
      $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
          $(this).removeClass('open');
        }
      });            
      });

  // -----------------------------
  // HEADER - Scroll Behavior
  // -----------------------------
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.act-header');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }
  });

   AOS.init();
