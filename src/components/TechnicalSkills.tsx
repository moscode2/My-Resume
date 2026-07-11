import { SkillCategory } from '../types/resume';

interface TechnicalSkillsProps {
  skillCategories: SkillCategory[];
}

export default function TechnicalSkills({ skillCategories }: TechnicalSkillsProps) {
  if (skillCategories.length === 0) return null;

  return (
    <section className="mb-6 break-inside-avoid" aria-labelledby="skills-heading">
      <h2
        id="skills-heading"
        className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-blue-700 pb-1 mb-3"
      >
        Technical Skills
      </h2>
      <div className="space-y-2">
        {skillCategories.map((category) => (
          <p key={category.category} className="text-sm text-gray-800 leading-relaxed">
            <span className="font-semibold text-gray-900">{category.category}: </span>
            {category.skills.join(', ')}
          </p>
        ))}
      </div>
    </section>
  );
}
