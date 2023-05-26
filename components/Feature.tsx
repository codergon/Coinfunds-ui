import { ReactNode } from "react";
import Illustrations from "./illustrations";

interface FeatureProps {
  data: {
    title: string;
    subtitle: string;
    illustration: ReactNode;
  };
}

function Feature({ data }: FeatureProps) {
  return (
    <div className="feature">
      <h1 className="feature__title">{data.title}</h1>

      <div className="feature__illustration">{data?.illustration}</div>

      <p className="feature__subtitle">{data.subtitle}</p>
    </div>
  );
}

export default Feature;
