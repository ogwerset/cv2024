<div id="adobe-dc-view"></div>
<script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
<script type="text/javascript">
	document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
		var adobeDCView = new AdobeDC.View({clientId: "77235daa884c4083b4d894813e5d325a", divId: "adobe-dc-view"});
		adobeDCView.previewFile({
			content:{location: {url: "https://raw.githubusercontent.com/ogwerset/cv2024/main/MarchlewskiAdam-CV-042024.pdf"}},
			metaData:{fileName: "MarchlewskiAdam-CV-062024"}
		}, {});
	});
</script>
