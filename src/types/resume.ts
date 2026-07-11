export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export interface PersonalInfo {
  fullName: string;
  title: string;
  contact: ContactInfo;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceEntry {
  jobTitle: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  techStack: string[];
  link?: string;
  linkLabel?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location?: string;
  graduationDate: string;
  coursework?: string[];
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  date: string;
}

export interface AwardEntry {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  professionalSummary: string;
  coreCompetencies: string[];
  technicalSkills: SkillCategory[];
  professionalExperience: ExperienceEntry[];
  projects: ProjectEntry[];
  education: EducationEntry[];
  certifications: CertificationEntry[];
  awards: AwardEntry[];
}
