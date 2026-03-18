

interface Props {
  active: string;
  setActive: (value: any) => void;
};




export default function NewsFilter({ active, setActive }: Props) {
    const filters = ["Todas as categorias", "Negócios", "Economia", "Desporto", "Sociedade", "Cultura", "Nacionais", "Internacionais"];

  return (
    <div className="flex justify-center justify-between  items-center overflow-x-auto no-scrollbar gap-2 rounded-full w-full lg:w-[80%]  border-1 border-slate-400/70">

      {filters.map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
            active === item
              ? "bg-black text-white"
              : "text-secondary"
          }`}
        >
          {item}
        </button>
      ))}

    </div>
  );
}