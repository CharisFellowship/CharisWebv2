/**
 * Function to get the height class based on the size parameter.
 *
 * @param { "sm" | "md" | "lg" | string } size - The size parameter to determine the height class.
 * @return {string} The height class corresponding to the size parameter.
 */
export const getDotHeight = (size: "sm" | "md" | "lg" | string ) => {
  switch(size){
    case "sm":
      return "h-2";
    case "md":
      return "h-3";
    case "lg":
      return "h-4";
    default:
      return "h-2";
  }
}

/**
 * Function to get the width class based on the size and highlight(ed) status of the dot.
 *
 * @param { "sm" | "md" | "lg" | string } size - The size parameter to determine the width class.
 * @param {boolean} isHighlighted - Flag to indicate if the dot is highlighted.
 * @return {string} The width class corresponding to the size and highlight status.
 */
export const getDotWidth = ( size: "sm" | "md" | "lg" | string, isHighlighted?: boolean) => {
  switch(size){
    case "sm":
      return isHighlighted ? "w-5" : "w-2";
    case "md":
      return isHighlighted ? "w-6" : "w-3";
    case "lg":
      return isHighlighted ? "w-7" : "w-4";
    default:
      return isHighlighted ? "w-5" : "w-2";
  }
}

export const getDotSizeClass = (size: "sm" | "md" | "lg" | string, isHighlighted?: boolean) => {
  return `${getDotHeight(size)} ${getDotWidth(size, isHighlighted)}`
}


