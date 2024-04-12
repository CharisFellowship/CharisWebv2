import { StaticImport } from "next/dist/shared/lib/get-img-props";
import "./css/hero.scss";

type Props = {
  imgSrc: string | StaticImport;
  children?: React.ReactNode;
  opacity?: number;
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
        }}
        className="hero-img"
      >
        <div
          style={{
            backgroundColor: `rgba(0,0,0,${props?.opacity})`,
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
