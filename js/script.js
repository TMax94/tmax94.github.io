window.onload = function(){
	var getNavi = document.getElementById('navigation');

	var mobile = document.createElement("span");
	mobile.setAttribute("id","mobile-navigation");
	getNavi.parentNode.insertBefore(mobile,getNavi);

	document.getElementById('mobile-navigation').onclick = function(){
		var a = getNavi.getAttribute('style');
		if(a){
			getNavi.removeAttribute('style');
			document.getElementById('mobile-navigation').style.backgroundImage='url(images/menu_mobile.png)';
		} else {
			getNavi.style.display='block';
			document.getElementById('mobile-navigation').style.backgroundImage='url(images/menu_close.png)';
		}
	};
	
	var getElm = getNavi.getElementsByTagName("LI");
	for(var i=0;i<getElm.length;i++){
		if(getElm[i].children.length>1){
			var smenu = document.createElement("span");
			smenu.setAttribute("class","mobile-submenu");
			smenu.setAttribute("OnClick","submenu("+i+")");
			getElm[i].appendChild(smenu);
		};
	};

};

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "../xml/iconlist.xml", true);
  xmlhttp.send();
}

function myFunction(xml) {
  var i;	
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Name</th><th>ID</th><th>Tags</th><th>Category</th><th>Subcategory</th><th>Solution</th><th>SVG-Version</th></tr>";
  var x = xmlDoc.getElementsByTagName("icon");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue +
    "</td><td>" +
    
    x[i].getElementsByTagName("TAGS")[0].childNodes[0].nodeValue +
    "</td><td>" +
    
    x[i].getElementsByTagName("CATEGORY")[0].childNodes[0].nodeValue +
    "</td><td>" +
    
    x[i].getElementsByTagName("SUBCATEGORY")[0].childNodes[0].nodeValue +
    "</td><td>" +
    
    x[i].getElementsByTagName("SOLUTION")[0].childNodes[0].nodeValue +
    "</td><td>" +
    
    x[i].getElementsByTagName("SVGVERSION")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("iconlisttable").innerHTML = table;
}
