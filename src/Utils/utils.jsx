export function formatCash(input) {
  if (!Array.isArray(input) && typeof input !== "string") {
    return input;
  }
  const cashArray = Array.isArray(input) ? input : input.split("");
  if (cashArray.length === 0) {
    return 0;
  }
  return cashArray.reverse().reduce((prev, next, index) => {
    return (index % 3 ? next : next + ".") + prev;
  }, "");
}

export const getQuantity = (RomMin, ColorDefault, DetailItem) => {
  if (DetailItem && DetailItem.DataPricing) {
    const romDetail = DetailItem.DataPricing.find(
      (item) => item.Rom === RomMin
    );
    if (romDetail && romDetail.DetailCR) {
      const colorDetail = romDetail.DetailCR.find(
        (detail) => detail.Color_name === ColorDefault
      );
      if (colorDetail) {
        return colorDetail.Quantity;
      }
    }
  }
  return 0; // Trường hợp không tìm thấy, trả về 0
};
