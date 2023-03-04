import Image from "next/image";
import salesIcon from "../assets/img/sales-icon.svg";

function EarningOverview() {
  return (
    <div className="mb-7 rounded-lg bg-white px-6 pt-4 pb-8">
      <p className="mb-3.5 h-12 text-sm">
        In your zips over the last 18 months, we’ve originated:
      </p>
      <div className="columns-2">
        <div className="flex flex-col">
          <Image className="mb-3" src={salesIcon} alt="Sales icon" />
          <span className="mb-1.5 text-3xl">$20M</span>
          <small className="text-xs text-sold-gray-1">in sales</small>
        </div>
        <div className="flex flex-col">
          {/**
           * Todo change to the proper icon
           */}
          <Image className="mb-3" src={salesIcon} alt="Sales icon" />
          <span className="mb-1.5 text-3xl">$500K</span>
          <small className="text-xs text-sold-gray-1">
            in Commissions (est)
          </small>
        </div>
      </div>
    </div>
  );
}

export default EarningOverview;
