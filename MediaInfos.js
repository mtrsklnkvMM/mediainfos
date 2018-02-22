require(["esri/dijit/PopupRenderer","dojo/_base/connect","dojo/_base/kernel","dojo/dom-class", "dojo/dom-construct", "dojo/dom-style"], function(ll,q,k,e,p,t)
{
	if( typeof esri.dijit._PopupRenderer.prototype._showImage == 'function' )
	{
		
		esri.dijit._PopupRenderer.prototype._showImage = function(b)
		{
			
			var maxWidth = typeof(b.maxW) != "undefined" ? b.maxW : "200"
			var maxHeight = typeof(b.maxH) != "undefined" ? b.maxH : "150"
			
			e.add(this._mediaFrame, "image");
            var c = t.get(this._gallery, "height"),
                a;
			t.set(this._gallery, "height", maxHeight + "px")
			t.set(this._gallery, "width", maxWidth + "px")
			
            b.linkURL && (a = p.create("a", {
                href: b.linkURL,
                target: this._preventNewTab(b.linkURL) ? "" : "_blank"
            }, this._mediaFrame));
            p.create("img", {
                className: "esriPopupMediaImage",
                src: b.sourceURL,
				style: "max-width:"+maxWidth+"px!important;max-height:"+maxHeight+"px!important"
            }, a || this._mediaFrame);
            var f = k.query(".esriPopupMediaImage", this._mediaFrame)[0],
                d = this,
                g;
            g = q.connect(f, "onload", function() {
                q.disconnect(g);
                g = null;
                d._imageLoaded(f,
                    c)
            })
		}
	}
});
