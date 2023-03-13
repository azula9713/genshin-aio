import { useRecoilState } from "recoil";
import { selectedElementAtom } from "../../atoms/SelectedItems.atoms";
import elementalImageFilter from "../../static/ElementalImagePicker";

export default function ElementalPicker() {
  const elements = [
    "Anemo",
    "Geo",
    "Electro",
    "Dendro",
    "Hydro",
    "Pyro",
    "Cryo",
  ];

  const [selectedElement, setSelectedElement] =
    useRecoilState(selectedElementAtom);

  return (
    <div className="flex items-center justify-between py-3 px-4 my-3">
      {elements.map((element, index) => (
        <div
          key={index}
          onClick={() => {
            if (selectedElement !== element) {
              setSelectedElement(element);
            } else {
              setSelectedElement("all");
            }
          }}
        >
          <img
            src={elementalImageFilter[element]}
            alt={element}
            className="w-[28px]"
            style={{
              filter:
                selectedElement === element || selectedElement === "all"
                  ? "none"
                  : "grayscale(100%)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
