interface ProfessionalSummaryProps {
  summary: string;
}

export default function ProfessionalSummary({ summary }: ProfessionalSummaryProps) {
  return (
    <section className="mb-6 break-inside-avoid" aria-labelledby="summary-heading">
      <h2
        id="summary-heading"
        className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-blue-700 pb-1 mb-3"
      >
        Professional Summary
      </h2>
      <p className="text-sm text-gray-800 leading-relaxed">{summary}</p>
    </section>
  );
}
