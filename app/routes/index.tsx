import { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "azado" };
};

export default function Index() {
  return (
    <div className="p-8 mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
      <h1 className="text-center text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
        {'The '}
        <span className="text-amber-300">azado</span>
        {' way to '}
        <span className="text-amber-300">grill</span>
        {'.'}
      </h1>
    </div>
  );
}
