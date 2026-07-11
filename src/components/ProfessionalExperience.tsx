import { ExperienceEntry } from '../types/resume';

interface ProfessionalExperienceProps {
  experience: ExperienceEntry[];
}

export default function ProfessionalExperience({ experience }: ProfessionalExperienceProps) {
  if (experience.length === 0) return null;

  return (
    <section className="mb-6" aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-blue-700 pb-1 mb-3"
      >
        Professional Experience
      </h2>

      <div className="space-y-5">
        {experience.map((role) => (
          <article key={`${role.company}-${role.jobTitle}`} className="break-inside-avoid">
            <h3 className="text-base font-bold text-gray-900">{role.jobTitle}</h3>
            <p className="text-sm text-blue-700 font-semibold">
              {role.company}
              {role.location ? `, ${role.location}` : ''}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              {role.startDate} – {role.endDate}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-800 leading-relaxed space-y-1">
              {role.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
