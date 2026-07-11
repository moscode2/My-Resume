import { MessageCircle, Mail, Linkedin, Github, Globe } from 'lucide-react';
import { PersonalInfo } from '../types/resume';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

export default function Header({ personalInfo }: HeaderProps) {
  const { fullName, title, contact } = personalInfo;
  const waDigits = contact.phone.replace(/\D/g, '');
  const waHref = `https://wa.me/${waDigits}`;
  const linkedinHref = contact.linkedin ? `https://${contact.linkedin.replace(/^https?:\/\//, '')}` : undefined;
  const githubHref = contact.github ? `https://${contact.github.replace(/^https?:\/\//, '')}` : undefined;
  const portfolioHref = contact.portfolio ? `https://${contact.portfolio.replace(/^https?:\/\//, '')}` : undefined;

  return (
    <header className="border-b-2 border-blue-700 pb-4 mb-6">
      <h1 className="text-3xl font-bold text-gray-900 leading-tight">{fullName}</h1>
      <p className="text-base text-blue-700 font-semibold mt-1">{title}</p>
      {contact.location && <p className="text-sm text-gray-700 mt-1">{contact.location}</p>}

      {/*
        Icons here are purely decorative (aria-hidden). The link text itself is the
        real phone number, email address, and profile URL, so this row is fully
        readable by ATS parsers, screen readers, and humans alike.
      */}
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 transition-colors flex items-center gap-1.5"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          <span>{contact.phone}</span>
        </a>

        <a
          href={`mailto:${contact.email}`}
          className="text-blue-700 hover:text-blue-900 transition-colors flex items-center gap-1.5"
        >
          <Mail className="w-4 h-4" aria-hidden="true" />
          <span>{contact.email}</span>
        </a>

        {linkedinHref && (
          <a
            href={linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4" aria-hidden="true" />
            <span>{contact.linkedin}</span>
          </a>
        )}

        {githubHref && (
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            <span>{contact.github}</span>
          </a>
        )}

        {portfolioHref && (
          <a
            href={portfolioHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition-colors flex items-center gap-1.5"
          >
            <Globe className="w-4 h-4" aria-hidden="true" />
            <span>{contact.portfolio}</span>
          </a>
        )}
      </div>
    </header>
  );
}
