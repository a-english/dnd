#!/usr/bin/perl

print "Content-type: text/html\n\n";

$STR=10;
$DEX=19;
$CON=11;
$INT=14;
$CHA=17;
$WIS=10;
print "<html lang='en'>
<head>
     <title>Lady Drake</title>
	 <link rel='stylesheet' href='../style.css'>
</head>
<body>
	
<table class='attributes'>
<tr><td>Strength</td><td>$STR</td></tr>
</table>


<div class='footer'>
	<cite> 
	<p>Made by Ace English, 2017.<br>ace.trumps@gmail.com<br>
        DnD is trademark of Wizards of the Coast, Inc. and is used according to the terms of the <a href="../ogl.html">Open Game License.</a>
	</p>
	</cite>
</div>

</body>
</html>";