export const Footer = () => {
  return (
    <div className="text-center my-6 text-sm text-gray-400 space-y-4">
      <p>
        Developed with ❤️ by{" "}
        <a
          href="https://devlopersabbir.github.io" // Link to your documentation/about page
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline font-medium"
        >
          Sabbir Hossain Shuvo
        </a>
      </p>
      {/* Buy Me A Coffee Button */}
      <div>
        <a
          href="https://buymeacoffee.com/devlopersabbir"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-full transition-colors duration-200 shadow-md"
        >
          <img
            src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
            alt="Buy Me A Coffee"
            height={20}
            width={20}
            className="w-5 h-5"
          />
          <span>Buy Me A Coffee</span>
        </a>
      </div>
    </div>
  );
};
