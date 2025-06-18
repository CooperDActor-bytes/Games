if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement("style");
	msViewportStyle.appendChild(
		document.createTextNode(
			"@-ms-viewport{width:device-width}"
		)
	);
	document.getElementsByTagName("head")[0].
		appendChild(msViewportStyle);
}