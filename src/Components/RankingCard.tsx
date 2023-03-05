import Image from "next/image";
import { arrowRoundDownIcon } from "@/assets";

function RankingCard() {
  return (
    <div className="mx-auto px-4 xl:w-[70rem] xl:p-0">
      <div className="-mt-96 mb-6 rounded-lg bg-white p-6 shadow-md sm:shadow-none xl:-mt-28 xl:mb-12 xl:flex xl:gap-20">
        <div>
          <p className="mb-3 text-base xl:w-[27rem]">
            Our referrals are routed to the top performing agents in our
            network. Rankings are based on numerous factors, including:
          </p>
          <ul className="mb-8 pl-2 text-sm xl:columns-2 xl:p-0">
            <li>
              <span className="text-sold-orange-0">+</span> Transaction
              statistics
            </li>
            <li>
              <span className="text-sold-orange-0">+</span> Responsiveness
            </li>
            <li>
              <span className="text-sold-orange-0">+</span> Customer
              Satisfaction
            </li>
            <li>
              <span className="text-sold-orange-0">+</span> Portal Updates
            </li>
          </ul>
        </div>
        <div className="bg-sold-gray-2 p-5">
          <div className="mb-3 flex xl:gap-5">
            <strong className="w-60 text-lg font-bold">
              Your average rank in the markets you serve is:
            </strong>
            <div className="flex items-center">
              <strong className="text-4xl font-bold text-sold-orange-1">
                25
              </strong>
              <Image
                className="mt-4"
                src={arrowRoundDownIcon}
                alt="Arrow round down icon"
              />
            </div>
            <button
              className="ml-auto hidden rounded bg-sold-orange-0 p-3 text-base font-bold text-white xl:inline"
              type="button"
            >
              Learn More
            </button>
          </div>
          <p className="mb-4 pr-1 text-xs text-sold-gray-3 xl:w-[30rem]">
            Your ranking will directly affect the number of referrals you
            receive. Learn about our{" "}
            <em className="not-italic text-sold-orange-0">
              Guaranteed Display
            </em>{" "}
            program to help improve your ranking.
          </p>
          <button
            className="w-full rounded bg-sold-orange-0 py-3.5 text-base font-bold text-white xl:hidden"
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
