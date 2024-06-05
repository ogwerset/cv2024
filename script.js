document.addEventListener("DOMContentLoaded", () => {
    const url = 'https://raw.githubusercontent.com/ogwerset/cv2024/main/MarchlewskiAdam-CV-042024.pdf';
    const pdfViewer = document.getElementById('pdf-viewer');

    pdfjsLib.getDocument(url).promise.then(pdfDoc => {
        for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
            pdfDoc.getPage(pageNum).then(page => {
                const viewport = page.getViewport({ scale: 1.5 });
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                pdfViewer.appendChild(canvas);

                page.render({
                    canvasContext: context,
                    viewport: viewport
                }).promise.then(() => {
                    // Add annotation layer (for links)
                    page.getAnnotations().then(annotations => {
                        annotations.forEach(annotation => {
                            if (annotation.subtype === 'Link' && annotation.url) {
                                const link = document.createElement('a');
                                link.href = annotation.url;
                                link.textContent = annotation.url;
                                link.style.position = 'absolute';
                                link.style.left = `${annotation.rect[0]}px`;
                                link.style.top = `${annotation.rect[1]}px`;
                                link.style.width = `${annotation.rect[2] - annotation.rect[0]}px`;
                                link.style.height = `${annotation.rect[3] - annotation.rect[1]}px`;
                                pdfViewer.appendChild(link);
                            }
                        });
                    });
                });
            });
        }
    }).catch(err => {
        console.error("Error loading PDF: ", err);
    });

    document.getElementById('download-button').addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = url;
        link.download = 'MarchlewskiAdam-CV-042024.pdf';
        link.click();
    });
});
