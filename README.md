# mediainfos
Allows the user to specify 2 more properties to the mediaInfos property for esri/dijit/PopupTemplate:
maxW (max-width)
maxH (max-height)
The idea is to let users modify the size of the image thumbnail within the popup:

var template = new PopupTemplate({
 (...)
            mediaInfos: [{
						title: 'Taken: {DateTime_}',
						type: 'image',
						value: {
							maxW: "700",
							maxH: "700",
							sourceURL: 'https://...',
							linkURL: 'https://...'
						}
			}]
            
})