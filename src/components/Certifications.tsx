import { CertificationEntry } from '../types/resume';

interface CertificationsProps {
  certifications: CertificationEntry[];
}

export default function Certifications({ certifications }: CertificationsProps) {
  if (certifications.length === 0) return null;

  return (
    <section className="mb-6 break-inside-avoid" aria-labelledby="certifications-heading">
      <h2
        id="certifications-heading"
        className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-blue-700 pb-1 mb-3"
      >
        Certifications
      </h2>
      <ul className="space-y-2">
        {certifications.map((cert) => (
          <li key={cert.name} className="text-sm text-gray-800">
            <span className="font-semibold text-gray-900">{cert.name}</span>
            {' — '}
            {cert.issuer}
            <span className="text-gray-600"> ({cert.date})</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
