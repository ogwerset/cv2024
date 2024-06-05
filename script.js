document.addEventListener("DOMContentLoaded", () => {
    const url = 'https://raw.githubusercontent.com/ogwerset/cv2024/main/MarchlewskiAdam-CV-042024.pdf';
    const canvas = document.getElementById('pdf-canvas');
    const context = canvas.getContext('2d');
    const textLayerDiv = document.getElementById('pdf-text-layer');

    pdfjsLib.getDocument(url).promise.then(pdfDoc => {
        pdfDoc.getPage(1).then(page => {
            const viewport = page.getViewport({ scale: 1.5 });
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            // Render PDF page into canvas context
            page.render({ canvasContext: context, viewport: viewport });

            // Render interactive text layer
            page.getTextContent().then(textContent => {
                pdfjsLib.renderTextLayer({
                    textContent: textContent,
                    container: textLayerDiv,
                    viewport: viewport,
                    textDivs: []
                });
            });
        });
    }).catch(err => {
        console.error("Error loading PDF: ", err);
    });

    // Download button functionality
    document.getElementById('download-button').addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = url;
        link.download = 'MarchlewskiAdam-CV-042024.pdf';
        link.click();
    });
});
