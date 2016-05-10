var radius = 100;
var dtr = Math.PI/180;
var d=200;

var mcList = [];
var active = false;
var lasta = 1;
var lastb = 1;
var distr = true;
var tspeed=5;
var size=250;

var mouseX=0;
var mouseY=0;

var howElliptical=1;

var aA=null;
var oDiv=null;

window.onload=function ()
{
	var i=0;
	var oTag=null;
	
	oDiv=document.getElementById('tagbox');
	
	aA=oDiv.getElementsByTagName('a');
	
	for(i=0;i<aa.length;i++) {="" otag="{};" otag.offsetwidth="aA[i].offsetWidth;" otag.offsetheight="aA[i].offsetHeight;" mclist.push(otag);="" }="" sinecosine(="" 0,0,0="" );="" positionall();="" odiv.onmouseover="function" ()="" active="true;" };="" odiv.onmouseout="function" odiv.onmousemove="function" (ev)="" var="" oevent="window.event" ||="" ev;="" mousex="oEvent.clientX-(oDiv.offsetLeft+oDiv.offsetWidth/2);" mousey="oEvent.clientY-(oDiv.offsetTop+oDiv.offsetHeight/2);" =5;="" setinterval(update,="" 30);="" function="" update()="" a;="" b;="" if(active)="" a="(-Math.min(" math.max(="" -mousey,="" -size="" ),="" size="" )="" radius="" *="" tspeed;="" b="(Math.min(" -mousex,="" else="" 0.98;="" lasta="a;" lastb="b;" if(math.abs(a)<="0.01" &&="" math.abs(b)<="0.01)" return;="" c="0;" sinecosine(a,b,c);="" for(var="" j="0;j<mcList.length;j++)" rx1="mcList[j].cx;" ry1="mcList[j].cy*ca+mcList[j].cz*(-sa);" rz1="mcList[j].cy*sa+mcList[j].cz*ca;" rx2="rx1*cb+rz1*sb;" ry2="ry1;" rz2="rx1*(-sb)+rz1*cb;" rx3="rx2*cc+ry2*(-sc);" ry3="rx2*sc+ry2*cc;" rz3="rz2;" mclist[j].cx="rx3;" mclist[j].cy="ry3;" mclist[j].cz="rz3;" per="d/(d+rz3);" mclist[j].x="(howElliptical*rx3*per)-(howElliptical*2);" mclist[j].y="ry3*per;" mclist[j].scale="per;" mclist[j].alpha="per;" doposition();="" depthsort();="" depthsort()="" i="0;" atmp="[];" for(i="0;i<aA.length;i++)" atmp.push(aa[i]);="" atmp.sort="" (="" (vitem1,="" vitem2)="" if(vitem1.cz="">vItem2.cz)
			{
				return -1;
			}
			else if(vItem1.cz</aa.length;i++)>