import Head from "next/head";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { EarningOverview, RankingCard } from "@/Components";
import happyFaceIcon from "../assets/img/happy-face-icon.svg";
import sadFaceIcon from "../assets/img/sad-face-icon.svg";

const monserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>SOLD.com Partner</title>
        <meta name="description" content="SOLD.com partner website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${monserrat.variable} font-sans`}>
        <section className=" bg-sold-gray-0 px-4 pt-8 pb-96">
          <div className="mb-12">
            <h1 className="mb-3.5 text-2xl font-bold text-white">
              SOLD.com Difference
            </h1>
            <p className="text-sm text-white">
              Unlike other lead sources and portals, we don’t focus on worthless
              metrics like impressions or even leads. SOLD.com shows you how
              many clients actually cross the finish line and buy or sell a
              home.
              <span className="mt-5 block pr-2">
                After all, isn’t that the metric that matters most?
              </span>
            </p>
          </div>
          <EarningOverview />
        </section>
        <RankingCard />
        <p className="relative mx-auto mb-8 w-80 px-4 text-base font-bold">
          Since you joined our network, here’s what we’ve been up to in your zip
          codes:
          <span className="absolute right-0 bottom-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-sold-gray-4 text-center text-xs text-white">
            i
          </span>
          <div className="absolute top-0 -left-3 h-8 w-4 rounded bg-sold-orange-0"></div>
        </p>
        <section className="mb-12 flex flex-wrap gap-8 px-4">
          <div className="grow rounded border border-sold-gray-5 py-11 shadow-sm">
            <div className="px-11">
              {/**
               * Todo change to the proper icon
               */}
              <Image
                className="mb-4"
                src={happyFaceIcon}
                alt="Happy face icon"
              />
              <h2 className="mb-12 text-4xl">Opportunity</h2>
            </div>
            <div className="divide-y divide-dashed divide-sold-gray-6 px-11">
              <div className="flex justify-between py-5 first:pt-0 last:pb-0">
                <span className="w-44 text-base">
                  SOLD.com <span className="block">Leads</span>
                </span>
                <span className="text-3xl font-bold text-sold-blue-0">500</span>
              </div>
              <div className="py-5 first:pt-0 last:pb-0">
                <div className="mb-4 flex justify-between">
                  <span className="w-44 text-base">
                    Customers that we told about you
                  </span>
                  <span className="text-2xl font-bold text-sold-blue-0">
                    100
                  </span>
                </div>
                <div className="flex items-center justify-between gap-12">
                  <progress
                    className="h-1 w-36 rounded-sm bg-sold-gray-5"
                    id="customers"
                    value="32"
                    max="100"
                  ></progress>
                  <span className="text-xs text-sold-blue-0">(XX%)</span>
                </div>
              </div>
              <div className="flex justify-between py-5 first:pt-0 last:pb-0">
                <span className="w-44 text-base">
                  Appointments set with you
                </span>
                <span className="text-2xl font-bold text-sold-blue-0">30</span>
              </div>
            </div>
          </div>
          <div className="grow rounded border border-sold-gray-5 pt-11 shadow-sm">
            <div className="px-11">
              <Image
                className="mb-4"
                src={happyFaceIcon}
                alt="Happy face icon"
              />
              <h2 className="mb-12 text-4xl">Wins</h2>
            </div>
            <div className="divide-y divide-dashed divide-sold-gray-6 px-11">
              <div className="flex justify-between py-5 first:pt-0 last:pb-0">
                <span className="w-44 text-base">Your signed agreements</span>
                <span className="text-3xl font-bold text-sold-green-0">15</span>
              </div>
              <div className="flex justify-between py-5 first:pt-0 last:pb-0">
                <span className="w-44 text-base">Your closings</span>
                <span className="text-2xl font-bold text-sold-green-0">10</span>
              </div>
            </div>
            <div className="bg-sold-gray-2 p-9">
              <div className="divide-y divide-sold-gray-6 text-end">
                <div className="py-4 first:pt-0 last:pb-0">
                  <span className="mb-3 block text-base">
                    Your closed volume
                  </span>
                  <span className="text-2xl text-sold-green-0">$3,000,000</span>
                </div>
                <div className="py-4 first:pt-0 last:pb-0">
                  <span className="mb-3 block text-base">
                    Your commission (est)
                  </span>
                  <span className="text-2xl text-sold-green-0">$500,000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grow rounded border border-sold-gray-5 pt-11 shadow-sm">
            <div className="px-11">
              <Image className="mb-4" src={sadFaceIcon} alt="Sad face icon" />
              <h2 className="mb-12 text-4xl">Losses</h2>
            </div>
            <div className="divide-y divide-dashed divide-sold-gray-6 px-11">
              <div className="flex justify-between py-5 first:pt-0 last:pb-0">
                <span className="w-44 text-base">
                  Appointments that signed with another agent
                </span>
                <span className="text-3xl font-bold text-sold-orange-0">
                  15
                </span>
              </div>
              <div className="flex justify-between py-5 first:pt-0 last:pb-0">
                <span className="w-44 text-base">Lost closings</span>
                <span className="text-2xl font-bold text-sold-orange-0">
                  10
                </span>
              </div>
            </div>
            <div className="bg-sold-gray-2 p-9">
              <div className="divide-y divide-sold-gray-6 text-end">
                <div className="py-4 first:pt-0 last:pb-0">
                  <span className="mb-3 block text-base">Lost volume</span>
                  <span className="text-2xl text-sold-orange-0">
                    $3,000,000
                  </span>
                </div>
                <div className="py-4 first:pt-0 last:pb-0">
                  <span className="mb-3 block text-base">
                    Lost commission (est)
                  </span>
                  <span className="text-2xl text-sold-orange-0">$500,000</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <p className="mb-4 px-4 text-center text-xl font-bold">
          Unsatisfied with these stats? We can help you improve them.
        </p>
        <button
          className="mx-auto mb-16 block rounded bg-sold-orange-0 py-3 px-4 text-base font-bold text-white"
          type="button"
        >
          Schedule A Call
        </button>
      </main>
    </>
  );
}
