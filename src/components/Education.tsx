import { EducationEntry } from '../types/resume';

interface EducationProps {
  education: EducationEntry[];
}

export default function Education({ education }: EducationProps) {
  if (education.length === 0) return null;

  return (
    <section className="mb-6 break-inside-avoid" aria-labelledby="education-heading">
      <h2
        id="education-heading"
        className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-blue-700 pb-1 mb-3"
      >
        Education
      </h2>

      <div className="space-y-3">
        {education.map((entry) => (
          <article key={entry.degree}>
            <h3 className="text-base font-bold text-gray-900">{entry.degree}</h3>
            <p className="text-sm text-blue-700 font-semibold">
              {entry.institution}
              {entry.location ? `, ${entry.location}` : ''}
            </p>
            <p className="text-sm text-gray-600">Graduated: {entry.graduationDate}</p>
            {entry.coursework && entry.coursework.length > 0 && (
              <p className="text-sm text-gray-800 mt-1">
                <span className="font-semibold">Relevant Coursework: </span>
                {entry.coursework.join(', ')}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
