/** Add any JavaScript you need to this file. */

const images = [
    {
      caption: 'Everyday Lizardman',
      type: 'Abstract Painting',
      alt: 'Lizardman',
      src:
        './images/p1.png',
      desc: '15.5x12 inch painting on a wooden canvas',
      price: '$40.00 CAD'
    },
    {
      caption: 'Lava Marble',
      type: 'Poured Painting',
      alt: 'Lava',
      src:
        './images/p2.png',
      desc: '9x12 inch painting on a cotton canvas board',
      price: '$20.00 CAD'
    },
    {
      caption: 'Inverted Clouds',
      type: 'Abstract Painting',
      alt: 'Clouds',
      src:
        './images/p3.png',
      desc: '9x12 inch painting on a cotton canvas board',
      price: '$20.00 CAD'
    },
    {
      caption: 'Box Pattern',
      type: 'Abstract Painting',
      alt: 'Box',
      src:
        './images/p4.png',
      desc: '15.5x12 inch painting on a wooden canvas',
      price: '$25.00 CAD'
    },
    {
      caption: 'Sand String',
      type: 'Poured Painting',
      alt: 'Sand',
      src:
        './images/p5.png',
      desc: '5x7 inch painting on a cotton canvas board',
      price: '$10.00 CAD'
    },
    {
      caption: 'Round Waves',
      type: 'Abstract Painting',
      alt: 'Waves',
      src:
        './images/p6.png',
      desc: '8x10 inch painting on a wooden canvas',
      price:'$15.00 CAD'
    },
    {
      caption: 'Lizard Cave',
      type: 'Poured Painting',
      alt: 'Cave',
      src:
        './images/p7.png',
      desc: '9x12 inch painting on a cotton canvas board',
      price:'$20.00 CAD'
    },
    {
      caption: 'Fish and Mud',
      type: 'Abstract Painting',
      alt: 'Fish',
      src:
        './images/p8.png',
      desc: '9x12 inch painting on a cotton canvas board',
      price: '$20.00 CAD'
    },
    {
      caption: 'Busy Bubbles',
      type: 'Abstract Painting',
      alt: 'Bubbles',
      src:
        './images/p9.png',
      desc: '8x10 inch painting on a wooden canvas',
      price: '$15.00 CAD'
    },
    {
      caption: 'Galaxy Hearts',
      type: 'Poured Painting',
      alt: 'Hearts',
      src:
        './images/p10.png',
      desc: '5x7 inch painting on a cotton canvas board',
      price: '$10.00 CAD'
    }
];


function clearItems(){
  var imgnum = document.getElementById("itemscontainer").childElementCount;
    if(imgnum!= 0){
      var d = document.getElementById("itemscontainer").lastElementChild;
      while(d) { 
        document.getElementById("itemscontainer").removeChild(d);
        d = document.getElementById("itemscontainer").lastElementChild;
      } 
    }
};

function chooseItems (itemType){
    var idNum = 0;

    if(itemType == 'abstract'){
        var titleH = document.createElement("h3");
        titleH.innerText = "Abstract Paintings";
        document.getElementById("itemscontainer").appendChild(titleH);
        document.getElementById("itemscontainer").innerHTML += "<br><br><br>";
        //show only abstract paintings
        for (var i in images) {
            if(images[i].type=='Abstract Painting'){
                var figPic = document.createElement("figure");
                var descPrice = document.createElement("figcaption");
                var img = document.createElement("img");
                img.src = images[i].src;
                img.alt = images[i].alt;
                img.id = idNum;
                
                descPrice.innerHTML += images[i].caption + "<br>" + images[i].type + "<br>" + images[i].desc + "<br>" + images[i].price;
                figPic.appendChild(img);
                figPic.appendChild(descPrice);

                document.getElementById("itemscontainer").appendChild(figPic);
                idNum+=1; 
            }
        }
    }
    else if (itemType == 'pour'){
        var titleH = document.createElement("h3");
        titleH.innerText = "Poured Paintings";
        document.getElementById("itemscontainer").appendChild(titleH);
        //show only pour paintings
        for (var i in images) {
          
            if(images[i].type=='Poured Painting'){
                var figPic = document.createElement("figure");
                var descPrice = document.createElement("figcaption");
                var img = document.createElement("img");
                img.src = images[i].src;
                img.alt = images[i].alt;
                img.id = idNum;
                
                descPrice.innerHTML += images[i].caption + "<br>" + images[i].type + "<br>" + images[i].desc + "<br>" + images[i].price;
                figPic.appendChild(img);
                figPic.appendChild(descPrice);

                document.getElementById("itemscontainer").appendChild(figPic);
                idNum+=1;
            }
        }
    }
    else {
        var titleH = document.createElement("h3");
        titleH.innerText = "All Paintings";
        document.getElementById("itemscontainer").appendChild(titleH);
    //show all items
        for (var i in images) {
          var figPic = document.createElement("figure");
          var descPrice = document.createElement("figcaption");
          var img = document.createElement("img");
          img.src = images[i].src;
          img.alt = images[i].alt;
          img.id = idNum;
                
          descPrice.innerHTML += images[i].caption + "<br>" + images[i].type + "<br>" + images[i].desc + "<br>" + images[i].price;
          figPic.appendChild(img);
          figPic.appendChild(descPrice);

          document.getElementById("itemscontainer").appendChild(figPic);
          idNum+=1;
        }
    }
};

function showWebDesc(){
  var bio = document.getElementById("bio");

  bio.innerHTML += "<p id='bbio'>" + "Liam Morris is a painter who has been painting since the young age of two months. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod, enim eget maximus lobortis, tellus nunc iaculis lorem, egestas congue diam felis ac orci. Nulla nec justo non sem pretium accumsan. Nullam feugiat eleifend nunc rutrum imperdiet. Maecenas a elementum magna. In id mi eros. Etiam interdum rhoncus felis, sed vehicula ante dignissim ac. Proin et pulvinar mi, ut efficitur tortor. Nullam suscipit rhoncus ultricies. Proin posuere, urna id rutrum rhoncus, lacus massa sollicitudin nisi, a luctus mauris diam commodo lorem.<br>"+"</p>";
  bio.innerHTML += "<p id='bbbio'>" + "Cras velit ante, viverra placerat ipsum eget, rutrum ornare mauris. Cras at orci a orci maximus tincidunt. Suspendisse accumsan vestibulum dui. Suspendisse vitae pellentesque nisl. Nam leo arcu, varius ut sodales nec, sollicitudin a ipsum. Vivamus luctus, dui nec efficitur semper, sapien tortor faucibus turpis, eget lacinia urna sem eget augue. Ut finibus ultricies nibh id semper." + "</p>";
};

function removeBio(){
  var f = document.getElementById("bbio");
  var c = document.getElementById("bbbio");
  f.parentNode.removeChild(f);
  c.parentNode.removeChild(c);
}

window.addEventListener("load", function(){

  if(window.location.href.match('index.html') != null){
    chooseItems('all');
    showWebDesc();

    document.getElementById("t1").addEventListener("click", function(){
      if(document.getElementById("bbio") != null){
        removeBio();
      }
      clearItems();
      chooseItems('all');
      showWebDesc();
    });

    document.getElementById("t2").addEventListener("click", function(){
      document.getElementById("drop").classList.toggle("show");
      
    });

    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

    document.getElementById("tab2C").addEventListener("click", function(){
      clearItems();
      if(document.getElementById("bbio") != null){
        removeBio();
      }
      chooseItems('all');
    });

    document.getElementById("tab2A").addEventListener("click", function(){
      clearItems();
      if(document.getElementById("bbio") != null){
        removeBio();
      }
      chooseItems('abstract');
    });
    
    document.getElementById("tab2B").addEventListener("click", function(){
      clearItems();
      if(document.getElementById("bbio") != null){
        removeBio();
      }
      chooseItems('pour');
    });
  }
  else {
    var elem = document.getElementById("contactForm");
  elem.onsubmit = function validateName() {
    var allAlpha = true;
    var flaggedElem = 0;
    var elem1 = document.getElementById("fname");
    var inputValue = elem1.value.trim();
    inputValue = inputValue.toUpperCase();
    for (var i = 0; i < inputValue.length; i++) {
      if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z") { 
          allAlpha = false; 
          flaggedElem = 1;
      }         
    } 
    if (!allAlpha){
      alert('Please enter a name using only letters');
      elem1.focus();
      return false;
    }
    else{
      return true;
    }
  }

  elem.onsubmit = function validateLname(){
    var allAlpha = true;
    var flaggedElem = 0;
    var elem2 = document.getElementById("lname");
    var inputValue = elem2.value.trim();
    inputValue = inputValue.toUpperCase();
    for (var i = 0; i < inputValue.length; i++) {
      if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z") { 
          allAlpha = false; 
          flaggedElem = 1;
      }         
    } 
    if (!allAlpha){
      alert('Please enter a name using only letters');
      elem.focus();
      return false;
    }
    else{
      return true;
    }
  }

  elem.onsubmit = function validatePhone(){
    var input = document.getElementById("pNum");
    if(parseInt(input) != input){
      alert('Please enter a valid phone number');
      input.focus();
      return false;
    }
    else {
      return true;
    }
  }

  elem.onsubmit = function validatePhone(){
    var input = document.getElementById("pCode");
    var searchFor = /^[a-zA-Z][0-9][a-zA-Z](' ')[0-9][a-zA-Z][0-9]$/;
    if(searchFor.test(input) != true){
      alert('Please enter a valid postal code');
      input.focus();
      return false;
    }
    else {
      return true;
    }
  }
  }

});
