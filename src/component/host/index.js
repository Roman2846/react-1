import "./index.css";

import Heading from "../heading";

import icon from "./icon.svg";

export default function Host({ name, rate, time, info, phone }) {
  return (
    <div className="host">
      <img height={80} width={80} src={icon} alt="Icon" />
      <Heading>Господар – {name}</Heading>
      <div className="host__block">
        <span className="host__value">{phone}</span>
        <span className="host__value">{time}</span>
        <span className="host__value">{rate}% відсотків швидкості відгуку</span>
      </div>

      <span>{info}</span>
    </div>
  );
}
