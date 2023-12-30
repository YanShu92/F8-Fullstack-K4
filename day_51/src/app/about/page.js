import Image from "next/image";

import image1 from "../assets/images/about.jpg";
export const metadata = {
  title: "Giới thiệu",
};
const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">
            Về Chúng tôi
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            repudiandae, accusamus veniam numquam esse ullam nam enim dolorum
            hic delectus labore, deleniti laudantium debitis quia soluta ab!
            Unde, provident aperiam.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <Image
            className="w-full h-full"
            src={image1}
            alt="People"
            width={800}
            height={450}
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eum,
            eius laboriosam minus explicabo nihil minima ratione recusandae
            accusamus ipsam placeat hic, libero modi deserunt harum optio quos
            quis quod!
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image
                className="md:block hidden"
                width={157}
                height={180}
                src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                alt="Alexa featured Image"
              />
              <Image
                className="md:hidden block"
                width={157}
                height={180}
                src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                alt="Alexa featured Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                Mỹ Dung
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image
                width={157}
                height={180}
                className="md:block hidden"
                src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                alt="Olivia featured Image"
              />
              <Image
                width={157}
                height={180}
                className="md:hidden block"
                src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                alt="Olivia featured Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                Hồng Hạnh
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image
                width={157}
                height={180}
                className="md:block hidden"
                src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                alt="Liam featued Image"
              />
              <Image
                width={157}
                height={180}
                className="md:hidden block"
                src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                alt="Liam featued Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                Cao Khánh
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image
                width={157}
                height={180}
                className="md:block hidden"
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="Elijah featured image"
              />
              <Image
                width={157}
                height={180}
                className="md:hidden block"
                src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                alt="Elijah featured image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                Đức Nhân
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
