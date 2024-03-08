import "./icon.css"
export default function IconSwitch({ icon, onSwitch }) {
  return <div className="icon__container"><span className="material-icons" onClick={onSwitch}>{icon}</span></div>;
}
