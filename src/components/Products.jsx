export default function Products({
  id,
  name,
  href,
  image,
  imageAlt,
  price,
  color,
}) {
  return (
    <div className="bg-white">
      <div className=" max-w-2xl px-4  py-5 lg:max-w-7xl lg:px-8 ">
        <div className="">
          <div
            key={id}
            className="group relative border-2 border-black/50 p-4 rounded-lg shadow-md"
          >
            <div className="aspect-h-1 aspect-w-1 w-64  rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
              <img
                src={image}
                alt={imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-lg "
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{color}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-gray-900">{price}</p>
                <button className="px-1 py-1  hover:bg-gray-800  hover:text-white transition ease-in  uppercase rounded-md border-2 text-[14px] border-gray-900 focus:outline-none ">
                  Add To Cart
                </button>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
