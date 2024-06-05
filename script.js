<div id="adobe-dc-view"></div>
<script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
<script type="text/javascript">
	document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
		var adobeDCView = new AdobeDC.View({clientId: "1593701048e640609653adf30ddb1c2d", divId: "adobe-dc-view"});
		adobeDCView.previewFile({
			content:{location: {url: "https://raw.githubusercontent.com/ogwerset/cv2024/main/MarchlewskiAdam-CV-042024.pdf"}},
			metaData:{fileName: "MarchlewskiAdam-CV-062024"}
		}, {});
	});
</script>
