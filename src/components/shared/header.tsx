export const Header = () => {
  return (
    <div className="flex items-center space-x-3">
      <img
        src="/icons/favicon-32x32.png"
        width={32}
        height={32}
        alt="App logo"
      />
      <div className="font-logo font-bold text-4xl text-gray-800">
        Random Kana
      </div>
    </div>
  );
};
