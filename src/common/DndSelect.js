//get product by brand
export const getDndByCategory = (GetSource, GetDestination, category) => {
  if (GetDestination) {
    for (var i = 0; i < GetDestination.length; i++) {
      for (var j = 0; j < GetSource.length; j++) {
        if (GetSource[j].id === GetDestination[i].id) GetSource.splice(j, 1);
      }
    }
  }
  if (category === "全部") return GetSource;
  console.log(GetSource, category);
  return category
    ? GetSource.filter((p) => p.category === category)
    : GetSource;
};
