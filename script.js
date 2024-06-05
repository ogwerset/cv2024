document.addEventListener("DOMContentLoaded", () => {
    const url = 'https://raw.githubusercontent.com/ogwerset/cv2024/main/MarchlewskiAdam-CV-042024.pdf';
    const canvas = document.getElementById('pdf-canvas');
    const context = canvas.getContext('2d');

    pdfjsLib.getDocument(url).promise.then(pdfDoc => {
        pdfDoc.getPage(1).then(page => {
            const viewport = page.getViewport({ scale: 1.5 });
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            page.render({ canvasContext: context, viewport: viewport });
        });
    }).catch(err => {
        console.error("Error loading PDF: ", err);
    });
});
