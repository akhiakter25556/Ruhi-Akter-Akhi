import jsPDF from 'jspdf';

export const generateResumePDF = (data) => {
    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - 2 * margin;
    let yPosition = margin;

    // Color scheme
    const primaryColor = [30, 64, 175]; // Blue
    const accentColor = [37, 99, 235]; // Light Blue
    const textColor = [0, 0, 0];
    const lightGrayColor = [100, 100, 100];

    const addNewPageIfNeeded = (minimumRequired) => {
        if (yPosition + minimumRequired > pageHeight - margin) {
            doc.addPage();
            yPosition = margin;
        }
    };

    const addSectionTitle = (title) => {
        addNewPageIfNeeded(20);
        doc.setFontSize(14);
        doc.setTextColor(...primaryColor);
        doc.text(title, margin, yPosition);
        yPosition += 8;

        doc.setDrawColor(...accentColor);
        doc.setLineWidth(0.5);
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 8;
    };

    // Header Section
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(26);
    doc.setTextColor(...primaryColor);
    doc.text(data.name, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 10;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(14);
    doc.setTextColor(...accentColor);
    doc.text(data.title, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 12;

    // Contact Information
    doc.setFontSize(9);
    doc.setTextColor(...textColor);
    const contactText = `✉ ${data.email} | 📱 ${data.phone} | 📍 ${data.address}`;
    const splitContact = doc.splitTextToSize(contactText, contentWidth);
    doc.text(splitContact, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += splitContact.length * 4 + 4;

    const linkedInGithub = `🔗 LinkedIn: ${data.linkedin.split('/').pop()} | GitHub: ${data.github.split('/').pop()}`;
    const splitLinks = doc.splitTextToSize(linkedInGithub, contentWidth);
    doc.text(splitLinks, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += splitLinks.length * 4 + 8;

    // Decorative line
    doc.setDrawColor(...accentColor);
    doc.setLineWidth(1);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 10;

    // Career Objective
    addSectionTitle('CAREER OBJECTIVE');
    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    const objectiveText = doc.splitTextToSize(data.objective, contentWidth);
    doc.text(objectiveText, margin, yPosition);
    yPosition += objectiveText.length * 5 + 8;

    // Technical Skills
    addSectionTitle('TECHNICAL SKILLS');
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...textColor);

    const skillsEntries = Object.entries(data.skills);
    skillsEntries.forEach(([key, value]) => {
        addNewPageIfNeeded(8);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...primaryColor);
        const skillLabel = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        doc.text(`${skillLabel}:`, margin, yPosition);

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...textColor);
        const skillText = doc.splitTextToSize(value, contentWidth - 10);
        doc.text(skillText, margin + 5, yPosition);
        yPosition += skillText.length * 4 + 6;
    });

    // Projects
    addSectionTitle('FEATURED PROJECTS');
    data.projects.forEach(project => {
        addNewPageIfNeeded(20);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(...primaryColor);
        doc.text(`${project.id}. ${project.title}`, margin, yPosition);
        yPosition += 6;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(...accentColor);
        doc.text(`🛠 ${project.tech}`, margin + 5, yPosition);
        yPosition += 5;

        doc.setTextColor(...textColor);
        const descText = doc.splitTextToSize(project.description, contentWidth - 10);
        doc.text(descText, margin + 5, yPosition);
        yPosition += descText.length * 4 + 4;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.text(`🔗 Live: ${project.liveUrl} | 💻 GitHub: ${project.githubUrl}`, margin + 5, yPosition);
        yPosition += 8;
    });

    // Education
    addSectionTitle('EDUCATION');
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...textColor);
    doc.text(data.education.school, margin, yPosition);
    yPosition += 6;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...lightGrayColor);
    doc.text(`Graduated: ${data.education.graduationDate}`, margin, yPosition);
    yPosition += 10;

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(...lightGrayColor);
    doc.text(
        `Generated from ${data.name}'s Professional Portfolio`,
        pageWidth / 2,
        pageHeight - 10,
        { align: 'center' }
    );

    // Save the PDF
    doc.save(`${data.name.replace(' ', '_')}_Resume.pdf`);
};
