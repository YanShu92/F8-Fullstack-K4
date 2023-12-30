import Image from "next/image";
import Mindmap from "./assets/images/so-do-tu-duy.jpeg";
const Page = () => {
  return (
    <div className="bg-indigo-100 py-6 md:py-12">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-medium mb-2">
            Bản đồ tư duy
            <hr />
            Nâng tầm tư duy theo cách của bạn
          </h1>
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6">
            Hoàn toàn miễn phí
          </button>
          <div className="mt-4">
            <Image alt="Sơ đồ tư duy" width={1200} height={630} src={Mindmap} />
          </div>
        </div>
        <div className="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">
          <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
            <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3" />
            <h5 className="text-xl font-medium uppercase mb-4">Dễ sử dụng</h5>
            <p className="text-gray-600">Cứ nhìn vào là biết sử dụng</p>
          </div>
          <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
            <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3" />
            <h5 className="text-xl font-medium uppercase mb-4">
              Không giới hạn
            </h5>
            <p className="text-gray-600">Tạo vô giới hạn mindmap</p>
          </div>
          <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
            <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3" />
            <h5 className="text-xl font-medium uppercase mb-4">
              Quản lý và chia sẻ
            </h5>
            <p className="text-gray-600">
              Chia sẻ tận hưởng những moment đẹp nhất
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
