export default function Recommendations() {
  return (
    <section className="max-w-5xl w-full">
      <h3 className="text-xl font-semibold mb-6">Recommendations</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card
          title="Hydrating Serum"
          description="A lightweight serum that deeply hydrates and boosts moisture."
          color="bg-soft-blue"
        />
        <Card
          title="Balancing Cleanser"
          description="Gentle cleanser that balances oily areas without stripping."
          color="bg-soft-green"
        />
        <Card
          title="Calming Gel"
          description="Soothing gel that reduces redness and lifts the skin."
          color="bg-accent-light"
        />
      </div>
    </section>
  );
}

function Card({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-md text-center">
      <div className={`h-32 ${color} rounded-lg mb-4`} />
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}