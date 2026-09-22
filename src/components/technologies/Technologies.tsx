import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Itechnology } from "../../types/technology";
import TechnologyCard from "./TachnologyCard";
import YourStack from "./YourStack";

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Itechnology[]>([]);
  
  const [selectedTechnologies,setSelectedTechnologies] = useState <Itechnology[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: Itechnology[]) => {
        setTechnologies(data);
        setIsLoading(false);
      });
  }, []);

  const handleAddToStack = (technology: Itechnology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id,
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack`);
      return;
    }

    setSelectedTechnologies([...selectedTechnologies, technology]);
    toast.success(`${technology.name} added to your stack`);
  };

  const handleRemoveFromStack = (technology: Itechnology) => {
    const restTechnologies = selectedTechnologies.filter(
      (item) => item.id !== technology.id,
    );
    setSelectedTechnologies(restTechnologies);
    toast.info(`${technology.name} removed from your stack`);
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.info("Your stack has been cleared");
  };

  if (isLoading) {
    return (
      <div className="container mx-auto flex justify-center py-20">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <section id="technologies" className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-extrabold">
        Explore the <span className="brand-gradient-text">Technologies</span>
      </h2>
      <p className="mt-2 text-base-content/70">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              isSelected={selectedTechnologies.some(
                (item) => item.id === technology.id,
              )}
              onAddToStack={handleAddToStack}
            />
          ))}
        </div>

        <YourStack
          selectedTechnologies={selectedTechnologies}
          onRemove={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  );
};

export default Technologies;