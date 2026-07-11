interface CoreCompetenciesProps {
  competencies: string[];
}

export default function CoreCompetencies({ competencies }: CoreCompetenciesProps) {
  if (competencies.length === 0) return null;

  return (
    <section className="mb-6 break-inside-avoid" aria-labelledby="competencies-heading">
      <h2
        id="competencies-heading"
        className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-blue-700 pb-1 mb-3"
      >
        Core Competencies
      </h2>
      <ul className="text-sm text-gray-800 leading-relaxed list-disc list-inside space-y-1">
        {competencies.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
