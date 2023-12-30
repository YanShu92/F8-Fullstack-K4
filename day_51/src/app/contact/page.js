import Link from "next/link";

export const metadata = {
  title: "Liên hệ",
};
const Contact = () => {
  return (
    <div className="contact-1 py-4 md:py-12">
      <div className="container mx-auto px-4">
        <div className="xl:flex -mx-4">
          <div className="xl:w-10/12 xl:mx-auto px-4">
            <div className="xl:w-3/4 mb-4">
              <h1 className="text-3xl text-medium mb-4">
                Chúng tôi luôn lắng nghe bạn chia sẻ
              </h1>
              <p className="text-xl mb-2">
                Vui lòng nhập đầy đủ thông tin để được tư vấn sớm nhất
              </p>
              <p>
                Liên lạc theo số điện thoại{" "}
                <a
                  href="tel:+090999999"
                  className="text-indigo-600 border-b border-transparent hover:border-indigo-600 transition-colors duration-300"
                >
                  +09 099 99 99
                </a>
              </p>
            </div>
            <div className="md:flex md:-mx-4 mt-4 md:mt-10">
              <div className="md:w-2/3 md:px-4">
                <div className="contact-form">
                  <div className="sm:flex sm:flex-wrap -mx-3">
                    <div className="sm:w-1/2 px-3 mb-6">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                      />
                    </div>
                    <div className="sm:w-1/2 px-3 mb-6">
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                      />
                    </div>
                    <div className="sm:w-1/2 px-3 mb-6">
                      <input
                        type="text"
                        placeholder="E-mail address"
                        className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                      />
                    </div>
                    <div className="sm:w-1/2 px-3 mb-6">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                      />
                    </div>
                    <div className="sm:w-full px-3">
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={4}
                        placeholder="Your message here"
                        className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="text-right mt-4 md:mt-12">
                    <button className="border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                      Gửi tin nhắn
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 md:px-4 mt-10 md:mt-0">
                <div className="bg-indigo-100 rounded py-4 px-6">
                  <h5 className="text-xl font-medium mb-3">Trợ giúp</h5>
                  <p className="text-gray-700 mb-4">
                    Có câu hỏi hay cần trợ giúp? Đừng ngần ngại, hãy liên lạc
                    ngay với chúng tôi{" "}
                    <a
                      href="mailto:"
                      className="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block"
                    >
                      email
                    </a>{" "}
                    or call us at{" "}
                    <a
                      href="tel:"
                      className="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block"
                    >
                      +09 099 99 99
                    </a>
                  </p>
                  <p className="text-gray-700">
                    Bạn có thể chuyển sang{" "}
                    <Link
                      href="/"
                      className="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block"
                    >
                      FAQs
                    </Link>{" "}
                    hoặc{" "}
                    <Link
                      href="/contact"
                      className="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block"
                    >
                      Liên lạc
                    </Link>{" "}
                    để thêm thông tin chi tiết
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
