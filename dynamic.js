function getfile(file,callback){
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function(){
		if(htp.readyState===4 && htp.status=="200"){
			callback(htp.responseText);
	}
		}
		htp.send(null);
}
getfile("dynamic.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	education(data.education);
	language(data.languages);
	skills(data.skills);
	achievements(data.ach);
	internship(data.internship);
})
var left=document.querySelector(".left");
function profile(p){
	var pimg=document.createElement("img");
	pimg.src=p.img;
	left.appendChild(pimg);
	var ph3=document.createElement("h3");
	ph3.textContent=p.name;
	left.appendChild(ph3);
	var prno=document.createElement("p");
	prno.textContent=p.roll;
	left.appendChild(prno);
	var pins=document.createElement("p");
	pins.textContent=p.institute;
	left.appendChild(pins);
	var plc=document.createElement("p");
	plc.textContent=p.place;
	left.appendChild(plc);
}
var right=document.querySelector(".right");
function career(c){
	var chead=document.createElement("h2");
	chead.textContent=c.cHead;
	right.appendChild(chead);
	var chr=document.createElement("hr")
	right.appendChild(chr);
	var cinfo=document.createElement("p");
	cinfo.textContent=c.info;
	right.appendChild(cinfo);
}
function education(e){
	var he=document.createElement("h3");
	he.innerHTML="Educational Details";
	right.appendChild(he);
	var etable=document.createElement("table");
	etable.border="1";
	var etr1="<tr><td>S.no</td><td>Degree</td><td>Institute</td><td>Year Of Pass</td></tr>";
	var etr2="";
	for(i=0;i<e.length;i++){
		etr2=etr2+"<tr><td>"+e[i].Sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].yop+"</td></tr>";
	}
	etable.innerHTML=etr1+etr2;
	right.appendChild(etable);
}
function language(l){
	var lhe=document.createElement("h3");
	lhe.innerHTML="Languages Known";
	right.appendChild(lhe);
	var lang=document.createElement("ul");
	var lan="";
	for(i=0;i<l.length;i++){
		lan=lan+"<li>"+l[i].lang+"</li>";
	}
	lang.innerHTML=lan;
	right.appendChild(lang);
}
function skills(s){
	var hs=document.createElement("h3");
	hs.innerHTML="Skills";
	right.appendChild(hs);
	var skil=document.createElement("ul");
	var skl="";
	for(i=0;i<s.length;i++){
		skl=skl+"<li>"+s[i].sk+"</li>";
	}
	skil.innerHTML=skl;
	right.appendChild(skil);
}
function achievements(a){
	var ahs=document.createElement("h3");
	ahs.innerHTML="Achievements";
	right.appendChild(ahs);
	var ah=document.createElement("p");
	ah.innerHTML="Attended workshops on:";
	right.appendChild(ah);
	var achi=document.createElement("ul");
	var ac="";
	for(i=0;i<a.length;i++){
		ac=ac+"<li>"+a[i].ws+"</li>";
	}
	achi.innerHTML=ac;
	right.appendChild(achi);
}
function internship(i){
	var ihs=document.createElement("h3");
	ihs.innerHTML="Internships";
	right.appendChild(ihs);
	var pin=document.createElement("p");
	pin.textContent=i.in;
	right.appendChild(pin);
}
