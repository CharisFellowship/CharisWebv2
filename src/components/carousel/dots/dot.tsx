import { FC } from "react";
import { getDotHeight, getDotSizeClass } from "./util";

type Props = {
  size: "sm" | "md" | "lg";
  isHighlighted?: boolean;
  bgColor?: string;
}


/**
 * Renders a dot component that is used to indicate the current slide.
 *
 * @return {JSX.Element} The dot component as a React element.
 */
const Dot: FC<Props> = ({ size, isHighlighted, bgColor }) => {

  const dotSizeClass = getDotSizeClass(size, isHighlighted);

  return (
    <div style={{ backgroundColor: bgColor }} className={`rounded-full ${dotSizeClass}`}/>
  );
};

Dot.defaultProps = {
  size: "md",
  isHighlighted: false,
  bgColor: "white",
}

export default Dot;
