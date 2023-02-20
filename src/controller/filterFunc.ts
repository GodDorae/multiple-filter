import sampleData from "../model/sampleData";

interface IFilterObject {
  obj: string[];
  num: string[];
  place: string[];
}

const filterFunc = (filterObject: IFilterObject) => {
  if (filterObject.obj.includes("obj-1")) {
    if (filterObject.place.includes("place-1")) {
      if (filterObject.num.includes("num-1")) {
        return sampleData; // 1
      } else {
        return sampleData.filter(
          (singleData) => filterObject.num.includes(singleData.num.id)
        ); // 2
      }
    } else {
      if (filterObject.num.includes("num-1")) {
        return sampleData.filter((singleData) =>
          filterObject.place.includes(singleData.place.id)
        ); // 3
      } else {
        return sampleData
          .filter((singleData) =>
            filterObject.place.includes(singleData.place.id)
          )
          .filter((singleData) => filterObject.num.includes(singleData.num.id)); // 4
      }
    }
  } else {
    if (filterObject.place.includes("place-1")) {
      if (filterObject.num.includes("num-1")) {
        return sampleData.filter((singleData) =>
          filterObject.obj.includes(singleData.obj.id)
        ); // 5
      } else {
        return sampleData
          .filter((singleData) => filterObject.obj.includes(singleData.obj.id))
          .filter((singleData) => filterObject.num.includes(singleData.num.id)); // 6
      }
    } else {
      if (filterObject.num.includes("num-1")) {
        return sampleData
          .filter((singleData) => filterObject.obj.includes(singleData.obj.id))
          .filter((singleData) =>
            filterObject.place.includes(singleData.place.id)
          ); // 7
      } else {
        return sampleData
          .filter((singleData) => filterObject.obj.includes(singleData.obj.id))
          .filter((singleData) =>
            filterObject.place.includes(singleData.place.id)
          )
          .filter((singleData) => filterObject.num.includes(singleData.num.id)); // 8
      }
    }
  }
};

export default filterFunc;
