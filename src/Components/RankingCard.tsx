import Image from "next/image";
import arrowRoundDownIcon from "../assets/img/arrow-round-down-icon.svg";

function RankingCard() {
  return (
    <div className="px-4 ">
      <div className="-mt-96 mb-6 rounded-lg bg-white p-6 shadow-md">
        <p className="mb-3 text-base">
          Our referrals are routed to the top performing agents in our network.
          Rankings are based on numerous factors, including:
        </p>
        <ul className="mb-8 list-inside pl-2 text-sm">
          <li>
            <span className="text-sold-orange-0">+</span> Transaction statistics
          </li>
          <li>
            <span className="text-sold-orange-0">+</span> Responsiveness
          </li>
          <li>
            <span className="text-sold-orange-0">+</span> Customer Satisfaction{" "}
          </li>
          <li>
            <span className="text-sold-orange-0">+</span> Portal Updates
          </li>
        </ul>
        <div className="bg-sold-gray-2 p-5">
          <div className="mb-3 flex">
            <p className="w-52 text-lg font-bold">
              Your average rank in the markets you serve is:
            </p>
            <div className="flex items-center">
              <span className="text-4xl text-sold-orange-1">25</span>
              <Image
                className="mt-4"
                src={arrowRoundDownIcon}
                alt="Arrow round down icon"
              />
            </div>
          </div>
          <p className="mb-4 pr-1 text-xs text-sold-gray-3">
            Your ranking will directly affect the number of referrals you
            receive. Learn about our{" "}
            <span className="text-sold-orange-0">Guaranteed Display</span>{" "}
            program to help improve your ranking.
          </p>
          <button
            className="w-full rounded bg-sold-orange-0 py-3.5 text-base font-bold text-white"
            type="button"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default RankingCard;
