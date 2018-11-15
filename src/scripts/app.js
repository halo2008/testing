var mqls = [
    window.matchMedia("(max-width: 340px)"),
    window.matchMedia("(min-width: 341px) and (max-width: 600px)"),
    window.matchMedia("(min-windth: 601px) and (max-width: 1000px)")
 
    ];

function mediaQueryResponse(mql) {

   if (mqls[0].matches){
     createElement(8);
   }

   else if (mqls[1].matches){
     createElement(4);
   }

   else if (mqls[2].matches){
     createElement(3);
   }

   else {
     createElement(2);
   }
}

function createElement(n){
  document.getElementById('dots2').innerHTML = '';
  var ul = document.getElementById('dots2');      
     
    for(i=0;i<n;i++) {
      var li = document.createElement('li');
      li.classList.add('dot-item');
      ul.appendChild(li);		       
    } 
}

for (var i = 0; i < mqls.length; i++){
    mqls[i].addListener(mediaQueryResponse);
    mediaQueryResponse(mqls[i]);     
} 
