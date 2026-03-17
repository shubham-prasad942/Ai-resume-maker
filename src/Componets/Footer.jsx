// Footer component
const Footer = () => {
  return (
    <div className="border-t border-gray-200 py-10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <h1 className="text-xl sm:text-2xl font-bold mb-2">
              <i className="ri-file-text-line bg-primary text-white rounded px-1 py-1.5"></i>{" "}
              Resume
              <span className="text-primary ">AI</span>
            </h1>
            <p className="text-gray-600">
              Create professional resumes <br /> with the power of AI
            </p>
          </div>

          {/* Product links */}
          <div>
            <h2 className=" font-semibold mb-2">Product</h2>
            <ul className="text-gray-600 space-y-1">
              <li>Features</li>
              <li>Templates</li>
              <li>Pricing</li>
              <li>Examples</li>
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h2 className=" font-semibold mb-2">Resources</h2>
            <ul className="text-gray-600 space-y-1">
              <li>Blog</li>
              <li>Career Tips</li>
              <li>Resume Guide</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h2 className="font-semibold mb-2">Company</h2>
            <ul className="text-gray-600 space-y-1">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          © 2025 ResumeAI. All rights reserved. <br />
          Made with by Shubham & Team
        </div>
      </div>
    </div>
  );
};

export default Footer;
