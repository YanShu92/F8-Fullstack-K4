import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faCode, faWrench } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Tính năng",
};
const Features = () => {
  return (
    <div className="feature-1 py-6 md:py-12">
      <div className="container px-4 mx-auto">
        <div className="flex -mx-4">
          <div className="px-4 text-center md:w-10/12 xl:w-8/12 mx-auto">
            <h1 className="mb-4 text-4xl font-medium">Tính năng</h1>
            <p className="mb-4 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates tempora distinctio dolores? Aperiam aliquid architecto
              quam provident cupiditate quidem quia voluptates sapiente rerum
              consectetur, fugit magnam libero dicta esse illum!
            </p>
            <button className="border-2 border-solid border-indigo-600 rounded py-2 px-12 text-xl text-indigo-600 hover:bg-indigo-600 hover:text-white mt-4 transition-color duration-300">
              Thêm chi tiết
            </button>
          </div>
        </div>
        <div className="md:flex md:-mx-4 mt-12 md:pt-4">
          <div className="px-4 md:w-1/3 mt-6 md:mt-0">
            <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
              <div className="text-xl p-4 w-16 h-16 mx-auto">
                <FontAwesomeIcon icon={faBolt} className="text-green-600" />
              </div>
              <h5 className="text-xl font-medium mb-4">Fresh Design</h5>
              <p className="text-gray-600 mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores alias, eaque blanditiis fugiat eius dolores!
              </p>
            </div>
          </div>
          <div className="px-4 md:w-1/3 mt-6 md:mt-0">
            <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
              <div className="text-xl p-4 w-16 h-16 mx-auto">
                <FontAwesomeIcon icon={faCode} className="text-blue-600" />
              </div>
              <h5 className="text-xl font-medium mb-4">Clean Code</h5>
              <p className="text-gray-600 mb-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                fugiat fugit possimus rem repellendus laborum.
              </p>
            </div>
          </div>
          <div className="px-4 md:w-1/3 mt-6 md:mt-0">
            <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
              <div className="text-xl p-4 w-16 h-16 mx-auto">
                <FontAwesomeIcon icon={faWrench} className="text-orange-600" />
              </div>
              <h5 className="text-xl font-medium mb-4">Perfect Tool</h5>
              <p className="text-gray-600 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                quaerat cumque reprehenderit est esse! Minus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
