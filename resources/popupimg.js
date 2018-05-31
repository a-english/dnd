window.onload = initAll;

function initAll()
{
	for(i=0; i<document.links.length; i++)
	{
		if(document.links[i].className == "popout")
		{
		document.links[i].onclick = myNewWindow;
		}
	}
}

function myNewWindow()
{
var littleWindow = 
	window.open(this.href, "ltWin", 
	"toolbar=no, location=no, status=yes, menubar=no, scrollbars=yes, ");
	/*width=768px, height=576px, left=500px, top=300px*/
littleWindow.focus();
return false;
}
