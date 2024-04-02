/*
* Caio Augusto
* Trabalho de Química/IFMG
*/

var on_show_mode = false
var size = 100;
var actual_element = ""
const FUNCS = {
  "Sr":{
    start: function(){
      linkButton("sr-youtube", "YouTube", 3, "#f00", "https://youtu.be/d5ztPGrsgNQ", 2.5)
      linkButton("sr-fonte", "Fonte", 9, "#36f", "https://tabelaperiodica.org", 2.5)
    },
    end: function(){
      document.getElementById("sr-youtube").remove()
      document.getElementById("sr-fonte").remove()
    }
  },
  "Pt": {
    start: function(){
      linkButton("pt-fonte", "Fonte", 3, "#36f", "https://brasilescola.uol.com.br", 2.5)
    },
    end: function(){
      document.getElementById("pt-fonte").remove()
    }
  },
  "Ni": {
    start: function(){
      linkButton("ni-fonte", "Fonte", 3, "#36f", "https://pt.m.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal", 2.5)
    },
    end: function(){
      document.getElementById("ni-fonte").remove()
    }
  },
  "Fe": {
    start: function(){
      linkButton("fe-fonte", "Fonte", 3, "#36f", "https://brasilescola.uol.com.br/quimica/ferro.htm", 2.5)
    },
    end: function(){
      document.getElementById("fe-fonte").remove()
    }
  }
}

let black = document.createElement("canvas")
black.style.background = "black"
black.style.position = "fixed"
black.style.width = "100%"
black.stylr.height = "100%"
black.style.top = "0%"
black.style.left = "0%"

let ff = document.createElement("img")
ff.src = "Ex.png"
ff.maxWidth = "100%"
ff.maxHeight = "100%"
ff.margin = "auto"
document.body.onclick = ()=>{
  ff.remove()
  black.remove()
  document.body.onclick = ()=>{}
}
function linkButton(id, text, b, c, link, f){
  let button = document.createElement("button")
  button.id = id
  button.textContent = text
  button.link = link
  with(button.style){
    position = "fixed"
    right = "3%"
    bottom = b+"vw"
    width = "20%"
    height = "5vw"
    //borderRadius = "30%"
    border = "15%"
    borderColor = c
    backgroundColor = "#000"
    color = "#fff"
    fontSize = f + "vw"
  }
  
  button.onclick = function(e){
    window.open(e.target.link)
  }
  
  document.body.appendChild(button)
}
function elementClick(event) {
  if(on_show_mode) return;
  on_show_mode = true
  
  actual_element = event.target.id
  let dark = document.createElement("canvas")
    
    dark.id = "dark"
    dark.style.position = "fixed"
    dark.style.background = "linear-gradient(#0000, #000)"
    dark.style.top = "0px"
    dark.style.left = "0px"
    dark.style.width = "100%"
    dark.style.height = "100%"
    
  let back = document.createElement("img")
  
    back.src = "seta.png"
    back.style.position = "fixed"
    back.style.top = "3%"
    back.style.left = "3vh"
    back.style.width = "7%"
    back.onclick = (e)=>{
      document.getElementById("image").remove()
      document.getElementById("dark").remove()
      e.target.remove()
      on_show_mode = false
   
      //document.body.removeChild(e.target)
      //document.body.removeChild(document.getElementById('image'))
      //document.body.removeChild(document.getElementById('dark'))
      if(FUNCS[actual_element] != undefined)
        FUNCS[actual_element].end()
    }
  
	let image = document.createElement("img")
	image.src = event.target.id + ".png"
	image.style.position = "fixed"
	  
	  image.id = "image"
	  image.style.maxWidth = "50%"
	  image.style.maxHeight = "50%"
	  image.style.height = "auto"
	  image.style.width = "auto"
	  image.style.top = "0"
	  image.style.left = "0"
	  image.style.bottom = "0"
	  image.style.right = "0"
	  image.style.margin = "auto"
	  
	  
	  //image.style.transform = "translateX(-50%)"
	document.body.appendChild(dark)
	document.body.appendChild(image)
	document.body.appendChild(back)
	size = 50
	
	if(FUNCS[event.target.id] != undefined)
	  FUNCS[event.target.id].start()
}
setInterval(()=>{
  if(size < 99){
    size = (size + 100)/2
    document.getElementById("image").style.maxHeight = size + "%"
    document.getElementById("image").style.maxWidth = size + "%"
  } else {
    size = 100
  }
}, 100)
function createButton(id, x, y, ady) {

	let button = document.createElement("button");
	button.id = id;
	button.style.position = "absolute";
	button.style.top = `${ady + 8.1 + y * 5.5}vw`;
	button.style.left = `${7.2 + x * 4.76}%`;
	button.style.background = "#0000";
	button.style.width = "4.67%";
	button.style.height = "5.37vw";
  button.style.border = "none"
  
	button.addEventListener("click", elementClick);

	document.body.appendChild(button);
}

const elements = [
	['H', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'He'],
	['Li', 'Be', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'B', 'C', 'N', 'O', 'F', 'Ne'],
	['Na', 'Mg', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'],
	['K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr'],
	['Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe'],
	['Cs', 'Ba', 0, 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn'],
	['Fr', 'Ra', 0, 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Ng', 'Fl', 'Mc', 'Lv', 'Ts', 'Og'],
	[0, 0, 0, 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu'],
	[0, 0, 0, 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr']
];

for (var i = 0; i < 9; i++) {
	for (var j = 0; j < 18; j++) {

		if (elements[i][j] == 0) continue;
    if(i < 7)
		  createButton(elements[i][j], j, i, 0)
		else
		  createButton(elements[i][j], j, i, 2.3)

	}
}
