const bee = document.getElementById('bee')
var last_x = 0

// function to move bee in conjunction with mouse
window.addEventListener('mousemove', function(e) {
  var x = e.clientX - 15
  var y = e.clientY - 15  
  bee.style.left = x +'px'
  bee.style.top = y + 'px'
  if(last_x < x) {
    bee.classList.add('flip')
  } else {
    bee.classList.remove('flip')
  }
  last_x = x

  // add honeycomb trail
  var h = document.createElement('div')
  h.className = 'honey_trail'
  h.style.left = x + 10 +'px'
  h.style.top = y + 30 + 'px' 
  
  //limit the spew of honeycomb
  if(Math.random() < .5) {
    document.body.appendChild(h)  

    //remove trail once faded
    setTimeout(function(){      
      document.getElementsByClassName('honey_trail')[0].remove()       
    },2500)
  }
})