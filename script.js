document.addEventListener('mousemove', function(event) {
    var cursor = document.getElementById('cursor');
    var container = document.getElementById('shape');
    var img = document.getElementById('image');
    
  
    // Get the position of the cursor relative to the container
    var x = event.clientX - container.offsetLeft;
    var y = event.clientY - container.offsetTop;
    var image = document.getElementById('relative');
  
    // Get the middle position of the image
    var imageMiddleX = image.offsetLeft + image.offsetWidth / 2;
  
    // Set the position of the cursor
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  
    // Check if the cursor crosses a certain horizontal space
    if (x > imageMiddleX) { 
      container.classList.add('right');
      img.src = 'Group 16R.png';
    }
    else{
      container.classList.remove('right');
      img.src = 'Group 16.png';
    }
  });
  