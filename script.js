document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelectorAll('.line').forEach(function(line) {
      line.classList.toggle('active');
    });
  
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open');
  });
/*三本線あるだけです。開きません。助けてください*/  