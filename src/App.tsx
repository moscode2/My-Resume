import { resumeData } from './data/resumeData';
import { generatePDF } from './utils/pdfGenerator';
import Header from './components/Header';
import ProfessionalSummary from './components/ProfessionalSummary';
import CoreCompetencies from './components/CoreCompetencies';
import TechnicalSkills from './components/TechnicalSkills';
import ProfessionalExperience from './components/ProfessionalExperience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Awards from './components/Awards';

function App() {
  const handleDownloadPDF = () => {
    generatePDF();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 print:bg-white print:py-0">
      {/* Toolbar - hidden on print/PDF export */}
      <div className="max-w-[210mm] mx-auto mb-4 px-4 print:hidden">
        <button
          type="button"
          onClick={handleDownloadPDF}
          className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded"
        >
          Download PDF
        </button>
      </div>

      {/* Resume page: fixed A4 dimensions, single column, print-ready */}
      <main
        id="resume-content"
        className="resume-page bg-white mx-auto shadow-md print:shadow-none"
      >
        <Header personalInfo={resumeData.personalInfo} />

        <ProfessionalSummary summary={resumeData.professionalSummary} />
        <CoreCompetencies competencies={resumeData.coreCompetencies} />
        <TechnicalSkills skillCategories={resumeData.technicalSkills} />
        <ProfessionalExperience experience={resumeData.professionalExperience} />
        <Projects projects={resumeData.projects} />
        <Education education={resumeData.education} />
        <Certifications certifications={resumeData.certifications} />
        <Awards awards={resumeData.awards} />
      </main>
    </div>
  );
}

export default App;
