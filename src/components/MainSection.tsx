import SkinTypeSelector from "./sections/SkinTypeSelector";
import SelectorCard from "./ui/SelectorCard";

export default function MainSection() {
  const concerns = ["Dryness", "Oiliness", "Acne", "Redness", "Wrinkles", "Dark Spots", "Rough Skin", "Wrinkles", "Lack of Elasty", "Blackheads"];

  return (
    <div className="flex flex-wrap justify-center">
      <SelectorCard step={1} title={"Tell us your skin type!"}>
        <SkinTypeSelector />
      </SelectorCard>
      <SelectorCard step={2} title={"Tell us your skin concerns!"}>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {concerns.slice(0,9).map((c, i) => (
            <span
            key={i}
            className="cursor-pointer animate-bubble bg-white text-sm px-3 py-1 rounded-full border border-white/30 backdrop-blur-sm mx-2"
            >
              {c}
            </span>
          ))}
        </div>
      </SelectorCard>

      {/* for now dupe */}
      <SelectorCard step={3} title={"Tell us ingredients you like!"}>
        <div className="flex flex-wrap justify-center gap-2 mb-6 text-white">
          {concerns.slice(0,9).map((c, i) => (
            <span
            key={i}
            className="animate-bubble bg-blue-400 text-sm px-3 py-1 rounded-full border border-white/30 backdrop-blur-sm mx-2"
            >
              {c}
            </span>
          ))}
        </div>
      </SelectorCard>
    </div>
  );
}