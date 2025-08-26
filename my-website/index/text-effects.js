// <![CDATA[
var speed=100; // speed of wobbling, lower is faster
var height=2; // height of wobbling in pixels
var alink="http://www.mf2fm.com/rv"; // page to link text to (set to ="" for no link)

/****************************
*    Wobbly Text Effect     *
*(c) 2003-6 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
var wobtxt, wobble, wobcnt=0;
window.onload=function() { if (document.getElementById) {
var i, wobli;
wobble=document.getElementById("wobble");
wobtxt=wobble.firstChild.nodeValue;
while (wobble.childNodes.length) wobble.removeChild(wobble.childNodes[0]);
for (i=0; i<wobtxt.length; i++) {
    wobli=document.createElement("span");
    wobli.setAttribute("id", "wobb"+i);
    wobli.style.position="relative";
    wobli.appendChild(document.createTextNode(wobtxt.charAt(i)));
    if (alink) {
    wobli.style.cursor="pointer";
    wobli.onclick=function() { top.location.href=alink; }
    }
    wobble.appendChild(wobli);
}
setInterval("wobbler()", speed);
}}

function wobbler() {
for (var i=0; i<wobtxt.length; i++) document.getElementById("wobb"+i).style.top=Math.round(height*Math.sin(i+wobcnt))+"px"
wobcnt++;
}
// ]]>
            
// <![CDATA[
var news=Array("Click on the PC to enter");
var cursor="_"; // set cursor
var delay=12; // seconds between each news item

/***************************\
* News Ticker Text Effect   *
*(c)2004-14 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
\***************************/
var newsp, cursp, flash, item=0;

if (typeof('addRVLoadEvent')!='function') function addRVLoadEvent(funky) {
var oldonload=window.onload;
if (typeof(oldonload)!='function') window.onload=funky;
else window.onload=function() {
    if (oldonload) oldonload();
    funky();
}
}

addRVLoadEvent(teleprint);

function teleprint () { if (document.getElementById) {
var span=document.getElementById("news");
while (span.childNodes.length) span.removeChild(span.childNodes[0]);
delay*=1000;
newsp=document.createElement("span");
cursp=document.createElement("span");
cursp.appendChild(document.createTextNode(String.fromCharCode(160)+cursor));
span.appendChild(newsp);
span.appendChild(cursp);
ticker();
}}

function ticker() {
var i;
while (newsp.childNodes.length) newsp.removeChild(newsp.childNodes[0]);
newsp.appendChild(document.createTextNode(news[item].substring(0,1)));
for (i=1; i<news[item].length; i++) setTimeout('newsp.firstChild.nodeValue="'+news[item].substring(0, i+1)+'"', 100*i);
if (news[item].indexOf("www")!=-1) setTimeout('linkit('+item+')', 100*i);
setTimeout('flash=setInterval("cursp.style.visibility=(cursp.style.visibility==\'visible\')?\'hidden\':\'visible\'", 234)', 100*i)
setTimeout('clearInterval(flash)', delay);
setTimeout('cursp.style.visibility="visible"', delay);
setTimeout('ticker()', delay);
item=++item%news.length;
}

function linkit(q) {
var a,p,e,l;
p=news[q].indexOf("www");
e=news[q].indexOf(" ", p);
if (e==-1) e=news[q].length;
l=news[q].substring(p, e);
while (newsp.childNodes.length) newsp.removeChild(newsp.childNodes[0]);
newsp.appendChild(document.createTextNode(news[q].substring(0, p)));
a=document.createElement("a");
a.href="http://"+l;
a.appendChild(document.createTextNode(l));
newsp.appendChild(a);
newsp.appendChild(document.createTextNode(news[q].substring(e)));
}
// ]]>