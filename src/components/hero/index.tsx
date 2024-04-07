import { StaticImport } from "next/dist/shared/lib/get-img-props";
import * as stylex from "@stylexjs/stylex";
import "./css/hero.scss";

type Props = {
  imgSrc: string | StaticImport;
  children?: React.ReactNode;
  opacity?: number;
  overlayOverrideStyle?: stylex.StyleXStylesWithout<{ height: unknown; width: unknown }>;
  imageOverrideStyle?: stylex.StyleXStylesWithout<{
    height: unknown;
    width: unknown;
    backgroundImage: string;
  }>;
} & typeof defaultProps;

const defaultProps = {
  opacity: 0.3,
};

function Hero(props: Props) {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${props.imgSrc})`,
          ...stylex.props(props?.imageOverrideStyle),
        }}
        className="hero-img"
      >
        <div
          style={{
            backgroundColor: `rgba(0,0,0,${props?.opacity})`,
            ...stylex.props(props?.overlayOverrideStyle),
          }}
          className="hero-overlay"
        >
          {props?.children}
        </div>
      </div>
    </section>
  );
}

Hero.defaultProps = defaultProps;

export default Hero;
