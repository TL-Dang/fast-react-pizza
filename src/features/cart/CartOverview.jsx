import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-750 text-stone-250 flex items-center justify-between px-4 py-4 text-sm uppercase sm:px-6 md:text-base">
      <p className="text-stone-350 space-x-6 font-semibold sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
