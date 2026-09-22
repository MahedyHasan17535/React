import type { Itechnology } from "../../types/technology";
import StackItem from "./StackItem";

interface IYourStackProps {
  selectedTechnologies: Itechnology[];
  onRemove: (technology: Itechnology) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: IYourStackProps) => {
  return (
    <div className="h-fit rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-lg font-bold">Your Stack</h3>
      <p className="mb-4 text-sm text-base-content/60">
        {selectedTechnologies.length} Technology Selected
      </p>

      {selectedTechnologies.length === 0 ? (
        <div className="rounded-xl border border-dashed border-base-300 py-8 text-center text-sm text-base-content/50">
          Your stack is empty.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {selectedTechnologies.map((technology) => (
            <StackItem
              key={technology.id}
              technology={technology}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}

      {selectedTechnologies.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="btn btn-outline btn-error mt-5 w-full rounded-xl"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;