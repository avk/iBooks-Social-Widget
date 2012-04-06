window.onload = function() {
	// Twitter link
	var tw = document.getElementsByClassName('twitter-share-button')[0];
	var qs = [];
	if (tw.getAttribute("data-url")) qs.push("url=" + encodeURIComponent(tw.getAttribute("data-url")));
	if (tw.getAttribute("data-text")) qs.push("text=" + encodeURIComponent(tw.getAttribute("data-text")));
	if (tw.getAttribute("data-via")) qs.push("via=" + encodeURIComponent(tw.getAttribute("data-via")));
	if (tw.getAttribute("data-related")) qs.push("related=" + encodeURIComponent(tw.getAttribute("data-related")));
	tw.setAttribute("href", "https://twitter.com/share?" + qs.join("&"));
	
	// Facebook link
	var fb = document.getElementsByClassName('facebook-share-button')[0];
	fb.onclick = function() {
		var d = document,
				f= 'https://www.facebook.com/share',
				l = d.location, 
				e = encodeURIComponent,
				p = '.php?src=bm&v=4&i=1333535145&u=' + e(fb.getAttribute("data-url")) + '&t='+ e(d.title);
		if (!window.open(f+'r'+p,'_blank','toolbar=0,status=0,resizable=1,width=626,height=436')) l.href= f+p
	};
	
	// Google+ link
	var gp = document.getElementsByClassName('google-share-button')[0];
	gp.onclick = function() {
		var u = 'https://plusone.google.com/_/+1/confirm?hl=en&url=' + encodeURIComponent(gp.getAttribute("data-url"));
		window.open(u,'_blank','toolbar=0,status=0,resizable=1,width=475,height=325');
	};
}