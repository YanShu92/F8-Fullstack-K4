import Image from "next/image";
export const metadata = {
  title: "Giá",
};
const Price = () => {
  return (
    <div className="max-w-6xl mx-auto pt-10 pb-36 px-8">
      <div className="max-w-md mx-auto mb-14 text-center">
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
          <span className="text-indigo-600">Flexible</span> Plans
        </h1>
        <p className="text-xl text-gray-500 font-medium">
          Chọn một plan phát triển cho mình
        </p>
      </div>
      <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
        <div className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <img
              src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
              alt=""
              width={80}
              height={80}
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold">Cơ bản</span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  $ 
                </span>
                <span className="text-3xl font-bold">9 </span>
              </span>
              <span className="text-gray-500 font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <Image
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                alt="Demo"
                width={18}
                height={18}
              />
              <span className="ml-3">
                Get started with <span className="text-black">messaging</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                alt="Demo"
                width={18}
                height={18}
              />
              <span className="ml-3">
                Flexible <span className="text-black">team meetings</span>
              </span>
            </li>
            <li className="flex text-lg">
              <Image
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                alt="Demo"
                width={18}
                height={18}
              />
              <span className="ml-3">
                <span className="text-black">5 TB</span> cloud storage
              </span>
            </li>
          </ul>
          <a
            href="#/"
            className="flex justify-center items-center bg-green-600 rounded-xl py-5 px-4 text-center text-white text-xl"
          >
            Chọn Plan
            <Image
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
              alt="Demo"
              width={18}
              height={18}
            />
          </a>
        </div>
        <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
          <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
            <Image
              src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
              alt=""
              className="rounded-3xl w-20 h-20"
              width={80}
              height={80}
            />
            <div className="ml-5">
              <span className="block text-3xl font-semibold text-white">
                Pro
              </span>
              <span>
                <span className="font-medium text-xl align-top">$ </span>
                <span className="text-3xl font-bold text-white">39.9 </span>
              </span>
              <span className="font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-10 font-medium text-xl">
            <li className="flex mb-6">
              <Image
                src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                alt="Demo"
                width={18}
                height={18}
              />
              <span className="ml-3">
                All features in <span className="text-white">Cơ bản</span>
              </span>
            </li>
            <li className="flex mb-6">
              <Image
                src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                alt="Demo"
                width={18}
                height={18}
              />
              <span className="ml-3">
                Flexible <span className="text-white">call scheduling</span>
              </span>
            </li>
            <li className="flex">
              <Image
                src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                alt="Demo"
                width={18}
                height={18}
              />
              <span className="ml-3">
                <span className="text-white">15 TB</span> cloud storage
              </span>
            </li>
          </ul>
          <a
            href="#/"
            className="flex justify-center items-center bg-orange-600 rounded-xl py-6 px-4 text-center text-white text-2xl"
          >
            Chọn Plan
            <Image
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
              alt="Demo"
              width={18}
              height={18}
            />
          </a>
        </div>
        <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <Image
              src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
              alt=""
              className="rounded-3xl w-20 h-20"
              width={80}
              height={80}
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold">Premium</span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  $ 
                </span>
                <span className="text-3xl font-bold">69.9 </span>
              </span>
              <span className="text-gray-500 font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <Image
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                alt="Demo"
                width={18}
                height={18}
              />
              <span className="ml-3">
                All features in <span className="text-black">Pro</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                alt="Demo"
                width={18}
                height={18}
              />
              <span className="ml-3">
                Growth <span className="text-black">oriented</span>
              </span>
            </li>
            <li className="flex text-lg">
              <Image
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                alt="Demo"
                width={18}
                height={18}
              />
              <span className="ml-3">
                <span className="text-black">Unlimited</span> cloud storage
              </span>
            </li>
          </ul>
          <a
            href="#/"
            className="flex justify-center items-center bg-blue-600 rounded-xl py-5 px-4 text-center text-white text-xl"
          >
            Chọn Plan
            <Image
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
              alt="Demo"
              width={18}
              height={18}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Price;
