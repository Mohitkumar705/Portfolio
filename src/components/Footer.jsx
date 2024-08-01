import {
  FaSquareGithub,
  FaLinkedin,
  FaSquareInstagram,
  FaTwitter,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://github.com/Mohitkumar705" target="_blank">
                <FaSquareGithub className="text-2xl cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohit-kumar-363965237" target="_blank">
                <FaLinkedin className="text-2xl cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/itz_mohit_kumar_70" target="_blank">
                <FaSquareInstagram className="text-2xl cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/itz_mohit_kumar_70" target="_blank">
                <FaTwitter className="text-2xl cursor-pointer" />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Mohit</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
