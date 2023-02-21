import {
  objCategories,
  numCategories,
  placeCategories,
} from "../model/categoryData";

const onClick = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  filterObject: {
    obj: string[];
    num: string[];
    place: string[];
  },
  setFilterObject: React.Dispatch<
    React.SetStateAction<{
      obj: string[];
      num: string[];
      place: string[];
    }>
  >
) => {
  const category = e.currentTarget.dataset.category;
  const value = e.currentTarget.value;
  if (category && value) {
    switch (category) {
      case "obj":
        const targetObjId = objCategories.find(
          (obj) => obj.value === value
        )!.id;
        if (filterObject.obj.some((obj) => obj === targetObjId)) {
          if (targetObjId === "obj-1") {
            return;
          } else {
            setFilterObject((prev) => {
              const objList = prev.obj;
              objList.splice(objList.indexOf(targetObjId), 1);
              if (objList.length) {
                const newObj = { ...prev, obj: objList };
                return newObj;
              } else {
                const newObj = { ...prev, obj: ["obj-1"] };
                return newObj;
              }
            });
          }
        } else {
          setFilterObject((prev) => {
            let objList = prev.obj;
            if (objList.includes("obj-1")) {
              objList = [];
            }
            const targetObjId = objCategories.find(
              (obj) => obj.value === value
            )!.id;
            if (targetObjId === "obj-1") {
              const newObj = { ...prev, obj: ["obj-1"] };
              return newObj;
            } else {
              objList = objList.concat([targetObjId]);
              const newObj = { ...prev, obj: objList };
              return newObj;
            }
          });
        }
        break;
      case "num":
        const targetNumId = numCategories.find(
          (num) => num.value === value
        )!.id;
        if (filterObject.num.some((num) => num === targetNumId)) {
          if (targetNumId === "num-1") {
            return;
          } else {
            setFilterObject((prev) => {
              const numList = prev.num;
              numList.splice(numList.indexOf(targetNumId), 1);
              if (numList.length) {
                const newObj = { ...prev, num: numList };
                return newObj;
              } else {
                const newObj = { ...prev, num: ["num-1"] };
                return newObj;
              }
            });
          }
        } else {
          setFilterObject((prev) => {
            let numList = prev.num;
            if (numList.includes("num-1")) {
              numList = [];
            }
            if (targetNumId === "num-1") {
              const newObj = { ...prev, num: ["num-1"] };
              return newObj;
            } else {
              numList = numList.concat([targetNumId]);
              const newObj = { ...prev, num: numList };
              return newObj;
            }
          });
        }

        break;
      case "place":
        const targetPlaceId = placeCategories.find(
          (place) => place.value === value
        )!.id;
        if (filterObject.place.some((place) => place === targetPlaceId)) {
          if (targetPlaceId === "place-1") {
            return;
          } else {
            setFilterObject((prev) => {
              const placeList = prev.place;
              placeList.splice(placeList.indexOf(targetPlaceId), 1);
              if (placeList.length) {
                const newObj = { ...prev, place: placeList };
                return newObj;
              } else {
                const newObj = { ...prev, place: ["place-1"] };
                return newObj;
              }
            });
          }
        } else {
          setFilterObject((prev) => {
            let placeList = prev.place;
            if (placeList.includes("place-1")) {
              placeList = [];
            }
            if (targetPlaceId === "place-1") {
              const newObj = { ...prev, place: ["place-1"] };
              return newObj;
            } else {
              placeList = placeList.concat([targetPlaceId]);
              const newObj = { ...prev, place: placeList };
              return newObj;
            }
          });
        }
        break;
      default:
        break;
    }
  } else {
    return;
  }
};

export default onClick;
