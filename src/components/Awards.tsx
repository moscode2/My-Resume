import { AwardEntry } from '../types/resume';

interface AwardsProps {
  awards: AwardEntry[];
}

export default function Awards({ awards }: AwardsProps) {
  if (awards.length === 0) return null;

  return (
    <section className="mb-6 break-inside-avoid" aria-labelledby="awards-heading">
      <h2
        id="awards-heading"
        className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-blue-700 pb-1 mb-3"
      >
        Awards &amp; Recognition
      </h2>
      <ul className="space-y-2">
        {awards.map((award) => (
          <li key={award.title} className="text-sm text-gray-800">
            <span className="font-semibold text-gray-900">{award.title}</span>
            {' — '}
            {award.issuer}
            <span className="text-gray-600"> ({award.date})</span>
            {award.description && <span className="block text-gray-700 mt-0.5">{award.description}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
