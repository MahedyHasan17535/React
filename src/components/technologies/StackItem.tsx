import { HiX } from "react-icons/hi";
import type { Itechnology } from "../../types/technology";

interface IStackItemProps {
  technology: Itechnology;
  onRemove: (technology: Itechnology) => void;
}

const StackItem = ({ technology, onRemove }: IStackItemProps) => {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-base-300 px-3 py-2">
      <div className="flex items-center gap-3">
        <img src={technology.icon} alt={technology.name} className="h-7 w-7" />
        <div>
          <p className="text-sm font-semibold">{technology.name}</p>
          <p className="text-xs text-base-content/60">{technology.category}</p>
        </div>
      </div>

      <button
        onClick={() => onRemove(technology)}
        aria-label={`Remove ${technology.name} from stack`}
        className="text-base-content/50 hover:text-error"
      >
        <HiX />
      </button>
    </div>
  );
};

export default StackItem;