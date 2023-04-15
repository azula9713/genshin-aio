export default function FooterHelperContainer() {
  const helpers = ["Algoinde", "SharkH3art", "Almighty Shogun", "yuko1101"];

  return (
    <div className="w-full mb-2 p-2 h-full">
      <p className="text-sm text-slate-400 text-left xl:text-base p-2 border-r-2">
        Big Thanks Goes To
      </p>
      {/* definr a grid in desktop view and list in mobile view */}
      <ul className="grid grid-cols-2 gap-2">
        {helpers.map((helper) => (
          <li key={helper} className="text-white text-left px-2">
            {helper}
          </li>
        ))}
      </ul>
    </div>
  );
}
