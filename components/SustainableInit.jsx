import { Link, Routes, Route } from "react-router-dom";

export function SustainableInit() {
  return (
    <>
      <div className="sustainable-init">
        <img src="src/assets/SustainabilityPledge.png" alt="" />
        <button className="sustainability-letter">
          <Link to="/sustainability-pledge" className="sustainability-letter">
            Read Letter
          </Link>
        </button>
      </div>
    </>
  );
}
