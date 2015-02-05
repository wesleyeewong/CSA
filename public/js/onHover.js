function mouseOver(a) {
	switch(a) {
		case "president":
			document.getElementById("prez").style.zIndex="10";
			document.getElementById("prez").style.transform="scale(1.1,1.1)";
			document.getElementById("prez").style.boxShadow="-15px 15px 15px black";
			break;

		case "IntVicePres":
			document.getElementById("IvPrez").style.zIndex="10";
			document.getElementById("IvPrez").style.transform="scale(1.1,1.1)";
			document.getElementById("IvPrez").style.boxShadow="-15px 15px 15px black";
			break;

		case "ExtVicePres":
			document.getElementById("EvPrez").style.zIndex="10";
			document.getElementById("EvPrez").style.transform="scale(1.1,1.1)";
			document.getElementById("EvPrez").style.boxShadow="-15px 15px 15px black";
			break;

		case "Sec":
			document.getElementById("secretary").style.zIndex="10";
			document.getElementById("secretary").style.transform="scale(1.1,1.1)";
			document.getElementById("secretary").style.boxShadow="-15px 15px 15px black";
			break;

		case "Tre":
			document.getElementById("treasurer").style.zIndex="10";
			document.getElementById("treasurer").style.transform="scale(1.1,1.1)";
			document.getElementById("treasurer").style.boxShadow="-15px 15px 15px black";
			break;
	}
}

function mouseOut(a) {
	switch(a) {
		case "president":
			document.getElementById("prez").style.zIndex=null;
			document.getElementById("prez").style.transform=null;
			document.getElementById("prez").style.boxShadow=null;
			break;

		case "IntVicePres":
			document.getElementById("IvPrez").style.zIndex=null;
			document.getElementById("IvPrez").style.transform=null;
			document.getElementById("IvPrez").style.boxShadow=null;
			break;

		case "ExtVicePres":
			document.getElementById("EvPrez").style.zIndex=null;
			document.getElementById("EvPrez").style.transform=null;
			document.getElementById("EvPrez").style.boxShadow=null;
			break;

		case "Sec":
			document.getElementById("secretary").style.zIndex=null;
			document.getElementById("secretary").style.transform=null;
			document.getElementById("secretary").style.boxShadow=null;
			break;

		case "Tre":
			document.getElementById("treasurer").style.zIndex=null;
			document.getElementById("treasurer").style.transform=null;
			document.getElementById("treasurer").style.boxShadow=null;
			break;
	}
}