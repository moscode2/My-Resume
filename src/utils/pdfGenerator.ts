import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async () => {
  try {
    // Get the resume container element
    const element = document.getElementById('resume-content') as HTMLElement;

    if (!element) {
      console.error('Resume element not found');
      return;
    }

    // Hide the download toolbar temporarily so it doesn't appear in the export
    const toolbar = document.querySelector('.print\\:hidden') as HTMLElement;
    if (toolbar) {
      toolbar.style.visibility = 'hidden';
    }

    // Store all links before generating canvas
    const links: Array<{
      url: string;
      x: number;
      y: number;
      width: number;
      height: number;
    }> = [];

    // Get element position for calculations
    const elementRect = element.getBoundingClientRect();
    
    // Collect all links with their positions
    const allLinks = element.querySelectorAll('a[href]');
    allLinks.forEach((link) => {
      const rect = link.getBoundingClientRect();
      const href = link.getAttribute('href');
      
      if (href) {
        links.push({
          url: href,
          x: rect.left - elementRect.left,
          y: rect.top - elementRect.top,
          width: rect.width,
          height: rect.height
        });
      }
    });

    // Configure html2canvas options for better quality
    const canvas = await html2canvas(element, {
      scale: 2, // Higher resolution
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: element.scrollWidth,
      height: element.scrollHeight,
      logging: false,
    });

    // Show the download toolbar again
    if (toolbar) {
      toolbar.style.visibility = 'visible';
    }

    // Calculate PDF dimensions (A4 size)
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    // Create PDF with proper settings
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    let position = 0;
    let pageNumber = 1;

    // Add the first page
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
    
    // Calculate scale factor for link positioning
    const scaleX = imgWidth / element.scrollWidth;
    const scaleY = imgHeight / element.scrollHeight;

    // Add links to the first page
    links.forEach((link) => {
      const linkY = link.y * scaleY;
      
      // Only add links that are on the current page
      if (linkY >= 0 && linkY <= pageHeight) {
        const x = link.x * scaleX;
        const y = linkY;
        const width = link.width * scaleX;
        const height = link.height * scaleY;
        
        // Add the link annotation
        pdf.link(x, y, width, height, { url: link.url });
      }
    });

    heightLeft -= pageHeight;

    // Add additional pages if content is longer than one page
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pageNumber++;
      
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      
      // Add links for this page
      links.forEach((link) => {
        const linkY = link.y * scaleY + position;
        
        // Only add links that are visible on the current page
        if (linkY >= (pageNumber - 1) * pageHeight && linkY <= pageNumber * pageHeight) {
          const x = link.x * scaleX;
          const y = linkY - (pageNumber - 1) * pageHeight;
          const width = link.width * scaleX;
          const height = link.height * scaleY;
          
          // Add the link annotation
          pdf.link(x, y, width, height, { url: link.url });
        }
      });
      
      heightLeft -= pageHeight;
    }

    // Download the PDF
    pdf.save('Moses_Onyango_Resume.pdf');
    
    console.log(`PDF generated successfully with ${links.length} active links`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('There was an error generating the PDF. Please try again.');
  }
};