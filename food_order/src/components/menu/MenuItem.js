export default function MenuItem() {
  return (
    <>
      <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl hover:shadow-black-50 transition-all">
        <img src="/pizza.png" alt="pizza" />
        <h4 className="font-semibold text-xl my-3">Pepp</h4>
        <p className="text-gray-500 text-sm">lorem</p>
        <button className="mt-4 bg-primary text-white rounded-full px-4 py-2">
          Add to cart
        </button>
      </div>
    </>
  );
}
