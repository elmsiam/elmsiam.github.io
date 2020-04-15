/** Add any JavaScript you need to this file. */

const images = [
    {
      caption: 'Everyday Lizardman',
      type: 'Abstract',
      alt: 'Lizardman',
      src:
        './images/p1.png',
      desc: '15.5x12 inch painting on a wooden canvas',
      height: '600',
      price: '$40.00 CAD'
    },
    {
      caption: 'Lava Marble',
      type: 'pour',
      alt: 'Lava',
      src:
        './images/p2.png',
      desc: '9x12 inch painting on a cotton canvas board',
      height: '800',
      price: '$20.00 CAD'
    },
    {
      caption: 'Inverted Clouds',
      type: 'abstract',
      alt: 'Clouds',
      src:
        './images/p3.png',
      desc: '9x12 inch painting on a cotton canvas board',
      height: '800',
      price: '$20.00 CAD'
    },
    {
      caption: 'Box Pattern',
      type: 'abstract',
      alt: 'Box',
      src:
        './images/p4.png',
      desc: '15.5x12 inch painting on a wooden canvas',
      height: '600',
      price: '$25.00 CAD'
    },
    {
      caption: 'Sand String',
      type: 'pour',
      alt: 'Sand',
      src:
        './images/p5.png',
      desc: '5x7 inch painting on a cotton canvas board',
      height: '800',
      price: '$10.00 CAD'
    },
    {
      caption: 'Round Waves',
      type: 'abstract',
      alt: 'Waves',
      src:
        './images/p6.png',
      desc: '8x10 inch painting on a wooden canvas',
      height: '600',
      price:'$15.00 CAD'
    },
    {
      caption: 'Lizard Cave',
      type: 'pour',
      alt: 'Cave',
      src:
        './images/p7.png',
      desc: '9x12 inch painting on a cotton canvas board',
      height: '800',
      price:'$20.00 CAD'
    },
    {
      caption: 'Fish and Mud',
      type: 'abstract',
      alt: 'Fish',
      src:
        './images/p8.png',
      desc: '9x12 inch painting on a cotton canvas board',
      height: '600',
      price: '$20.00 CAD'
    },
    {
      caption: 'Busy Bubbles',
      type: 'abstract',
      alt: 'Bubbles',
      src:
        './images/p9.png',
      desc: '8x10 inch painting on a wooden canvas',
      height: '800',
      price: '$15.00 CAD'
    },
    {
      caption: 'Galaxy Hearts',
      type: 'pour',
      alt: 'Hearts',
      src:
        './images/p10.png',
      desc: '5x7 inch painting on a cotton canvas board',
      height: '800',
      price: '$10.00 CAD'
    }
];


function clearItems(){
    //clear item elements from item listings
    var imgnum = document.images.length;
    for (var i of imgnum) { 
        var d = document.getElementById(i);
        d.parentNode.removeChild(d);
    }
};

function chooseItems (itemType){
    var idNum = 0;

    if(itemType == 'abstract'){
        //show only abstract paintings
        for (var i in images) {
            if(images[i].type=='abstract'){
                //var figPic = document.createElement("figure");
                //var descPrice = document.createElement("figcaption");
                var img = document.createElement("img");
                img.src = images[i].src;
                img.alt = images[i].alt;
                img.id = idNum;
                
                //descPrice.innerHTML += images[i].caption + "<br>" + images[i].desc + "<br>" + images[i].price;
                //figPic.appendChild(img);
                //figPic.appendChild(descPrice);

                document.getElementById("itemscontainer").appendChild(img);
                idNum+=1; 
            }
        }
    }
    else if (itemType == 'pour'){
        //show only pour paintings
        for (var i in images) {
            if(images[i].type=='pour'){
                //var figPic = document.createElement("figure");
                //var descPrice = document.createElement("figcaption");
                var img = document.createElement("img");
                img.src = images[i].src;
                img.alt = images[i].alt;
                img.id = idNum;
                
                //descPrice.innerHTML += images[i].caption + "<br>" + images[i].desc + "<br>" + images[i].price;
                //figPic.appendChild(img);
                //figPic.appendChild(descPrice);

                document.getElementById("itemscontainer").appendChild(img);
                idNum+=1;
            }
        }
    }
    else {
    //show all items
        for (var i in images) {
          //var figPic = document.createElement("figure");
          //var descPrice = document.createElement("figcaption");
          var img = document.createElement("img");
          img.src = images[i].src;
          img.alt = images[i].alt;
          img.id = idNum;
                
          //descPrice.innerHTML += images[i].caption + "<br>" + images[i].desc + "<br>" + images[i].price;
          //figPic.appendChild(img);
          //figPic.appendChild(descPrice);

          document.getElementById("itemscontainer").appendChild(img);
          idNum+=1;
        }
    }
};

function showWebDesc(){
  var bio = document.getElementById("bio");

  bio.innerHTML += "<p>" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non orci sed arcu porttitor tempus vel in dui. Praesent euismod, enim eget maximus lobortis, tellus nunc iaculis lorem, egestas congue diam felis ac orci. Nulla nec justo non sem pretium accumsan. Nullam feugiat eleifend nunc rutrum imperdiet. Maecenas a elementum magna. In id mi eros. Etiam interdum rhoncus felis, sed vehicula ante dignissim ac. Proin et pulvinar mi, ut efficitur tortor. Nullam suscipit rhoncus ultricies. Proin posuere, urna id rutrum rhoncus, lacus massa sollicitudin nisi, a luctus mauris diam commodo lorem." + "</p>";
  bio.innerHTML += "<p><br>" + "Cras velit ante, viverra placerat ipsum eget, rutrum ornare mauris. Cras at orci a orci maximus tincidunt. Suspendisse accumsan vestibulum dui. Suspendisse vitae pellentesque nisl. Nam leo arcu, varius ut sodales nec, sollicitudin a ipsum. Vivamus luctus, dui nec efficitur semper, sapien tortor faucibus turpis, eget lacinia urna sem eget augue. Ut finibus ultricies nibh id semper." + "</p><br><br>";
};

function removeBio(){
  //var f = document.getElementById("bio");
  //f.parentNode.removeChild(f);
}

window.addEventListener("load", function(){

    chooseItems('all');
    showWebDesc();

    document.getElementById("hT").addEventListener("click", function(){
      clearItems();
      showWebDesc();
    });

    document.getElementById("tab2C").addEventListener("click", function(){
      clearItems();
      removeBio();
      chooseItems('all');
    });

    document.getElementById("tab2A").addEventListener("click", function(){
      clearItems();
      removeBio();
      chooseItems('abstract');
    });
    
    document.getElementById("tab2B").addEventListener("click", function(){
      clearItems();
      removeBio();
      chooseItems('pour');
    });

    document.getElementById("CT").addEventListener("click", function(){
      
    });

});
