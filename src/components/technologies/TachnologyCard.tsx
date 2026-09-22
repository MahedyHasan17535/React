import { FaStar } from "react-icons/fa";
import type { Itechnology } from "../../types/technology";

interface ITechnologyCardProps {
  technology: Itechnology;
  isSelected: boolean;
  onAddToStack: (technology: Itechnology) => void;
}

const TechnologyCard = ({
  technology,
  isSelected,
  onAddToStack,
}: ITechnologyCardProps) => {
  return (
    <div
      className={`flex flex-col rounded-2xl border bg-base-100 p-5 shadow-sm transition-shadow hover:shadow-md ${
        isSelected ? "border-2 border-[var(--brand-accent)]" : "border border-base-300"
      }`}
    >
      <div className="mb-4 flex items-start justify-between">
        <img src={technology.icon} alt={technology.name} className="h-9 w-9" />
        <span className="badge badge-ghost badge-sm">{technology.badge}</span>
      </div>

      <h3 className="text-lg font-bold">{technology.name}</h3>
      <p className="mt-1 text-sm text-base-content/70">
        {technology.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-base-content/70">
        <span className="badge badge-outline badge-sm">
          {technology.category}
        </span>
        <span>{technology.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-base-content">
          <FaStar className="text-warning" />
          {technology.rating}
        </span>
      </div>

      <button
        onClick={() => onAddToStack(technology)}
        disabled={isSelected}
        className={`btn mt-5 w-full rounded-xl border ${
          isSelected
            ? "border-[var(--brand-accent)] bg-transparent text-[var(--brand-accent)] hover:bg-transparent"
            : "btn-neutral border-transparent"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;