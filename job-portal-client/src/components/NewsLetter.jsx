import { MdEmail } from "react-icons/md";
import { FaRocket } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <MdEmail size={22} className="text-gray-700" />
          Email me for jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quae
          nihil aliquid aperiam corporis, reiciendis dicta nostrum aliquam
          fugiat eaque ex ipsam quo rerum autem laboriosam facilis.
        </p>

        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold hover:bg-button"
          />
        </div>
      </div>

      {/* 2nd part */}

      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket size={20} className="text-gray-700" />
          Get Noticed Faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quae
          nihil aliquid aperiam corporis, reiciendis dicta nostrum aliquam
          fugiat eaque ex ipsam quo rerum autem laboriosam facilis nisi id odio
          excepturi recusandae! Velit id impedit nesciunt officiis non maxime.
        </p>

        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Upload your resume"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold hover:bg-button"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
