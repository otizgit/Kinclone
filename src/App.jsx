import { Icon } from "@iconify/react/dist/iconify.js";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import kintoLogo from "../src/assets/kinto.svg";
import coinMarket from "../src/assets/coinmarket.png";
import coin from "../src/assets/coin.png";
import coinGecko from "../src/assets/coingecko.png";
import cryptone from "../src/assets/cryptone.png";
import cryptwo from "../src/assets/cryptwo.png";
import gate from "../src/assets/gate.png";
import { useState } from "react";

function App() {
  const data = [
    {
      name: "3 Jul",
      amt: 2000,
    },
    {
      name: "8 Jul",
      amt: 2210,
    },
    {
      name: "13 Jul",
      amt: 290,
    },
    {
      name: "18 Jul",
      amt: 300,
    },
    {
      name: "23 Jul",
      amt: 451,
    },
  ];

  const [isConnected, setConnected] = useState(false);
  const address = "0xA2968399Cfc9A24E954Fb049dE1A8833a4a4Ec97";

  return (
    <main className="pb-6">
      <header className="bg-black py-4 px-20 flex items-center mb-12 justify-end">
        {/* <div className="flex gap-2 items-center">
          <img src="/public/kinto.png" className="w-14" alt="kinto logo" />
          <h1 className="text-white text-[1.8rem] font-medium">KINTO</h1>
        </div> */}
        <button
          onClick={() => setConnected(true)}
          className="uppercase px-6 py-2 font-semibold rounded-full bg-white"
        >
          {isConnected
            ? address.slice(0, 6) + "..." + address.slice(-4)
            : "Connect Wallet"}
        </button>
      </header>
      <section className="px-20 flex justify-between items-end mb-10">
        <div className="flex items-center gap-6">
          <a target="_blank" href="https://engen.kinto.xyz/explore/k">
            <img src={kintoLogo} alt="kinto logo" className="w-30" />
          </a>
          <div>
            <h1 className="text-[2.5rem] font-bold flex items-center gap-5">
              KINTO{" "}
              <span className="text-gray-400 font-medium text-[1.2rem]">K</span>
            </h1>
            <p className="mb-2 text-[0.9rem] text-gray-700 font-medium">
              K is the governance token of the Kinto network
            </p>
            <div className="flex items-center gap-2">
              <button className="flex gap-1 items-center font-medium uppercase bg-[#ECEBE9] text-[0.75rem] px-2 py-1 rounded-full">
                <Icon icon="streamline-plump:web" className="text-[0.8rem]" />
                <p>Website</p>
              </button>
              <div className="px-2 py-1 bg-[#D0CCC8] rounded-full font-medium text-[0.75rem]">
                L2
              </div>
              <div className="px-2 py-1 bg-[#D0CCC8] rounded-full font-medium uppercase text-[0.75rem]">
                governance
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div>
            <h3 className="text-[0.8rem] mb-1">View in Explorers:</h3>
            <div className="flex items-center gap-1">
              <button>
                <img src={coinMarket} alt="coin gecko" className="w-8" />
              </button>
              <button>
                <img src={coinGecko} alt="coin market" className="w-8" />
              </button>
              <button>
                <img src={coin} alt="coin" className="w-8" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-[0.8rem] mb-1">Buy $K on:</h3>
            <div className="flex items-center gap-1">
              <button>
                <img src={kintoLogo} alt="kinto logo" className="w-8" />
              </button>
              <button>
                <img src={cryptone} alt="logo" className="w-8" />
              </button>
              <button>
                <img src={cryptwo} alt="logo" className="w-8" />
              </button>
              <button>
                <img src={gate} alt="logo" className="w-8" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-20 flex gap-6 justify-center mb-10 border-y-[0.1em] border-gray-200 py-6">
        <div className="px-7 border-r-[0.1em] border-gray-200">
          <h2 className="text-gray-400 text-[0.8rem] font-medium">
            Exit Price
          </h2>
          {isConnected ? (
            <p className="text-[2.5rem] font-semibold">$5.47</p>
          ) : (
            <p className="text-[2.5rem] font-semibold">$0.00</p>
          )}
        </div>
        <div className="px-7 border-r-[0.1em] border-gray-200">
          <h2 className="text-gray-400 text-[0.8rem] font-medium">
            Market Cap
          </h2>
          <p className="text-[2.5rem] font-semibold">$14.40M</p>
        </div>
        <div className="px-7 border-r-[0.1em] border-gray-200">
          <h2 className="text-gray-400 text-[0.8rem] font-medium">FDV</h2>
          <p className="text-[2.5rem] font-semibold">$8.42M</p>
        </div>
        <div className="px-7 border-r-[0.1em] border-gray-200">
          <h2 className="text-gray-400 text-[0.8rem] font-medium">
            Circulating Supply
          </h2>
          <p className="text-[2.5rem] font-semibold">$1.84M</p>
        </div>
        <div className="px-7">
          <h2 className="text-gray-400 text-[0.8rem] font-medium">Holders</h2>
          <p className="text-[2.5rem] font-semibold">51.40K</p>
        </div>
      </section>

      <section className="px-20 flex items-start gap-5 justify-between">
        <div className="h-[300px] w-full flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              {/* <Legend /> */}
              <Line
                type="monotone"
                dataKey="amt"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="w-[370px]">
          <h1 className="mb-3 text-gray-600 text-[1.1rem] font-medium">
            Withdraw K
          </h1>
          <div className="p-2 py-3 mb-4 border-[0.1em] border-gray-300 bg-gray-100 rounded-md">
            <div className="flex justify-between items-center gap-4 pb-3 border-b-[0.1em] border-gray-300 mb-3">
              <div className="flex gap-2 items-center">
                <img src={kintoLogo} alt="logo" className="w-10" />
                <div>
                  <h1 className="font-bold text-[0.8rem]">KINTO</h1>
                  <p className="text-gray-500 text-[0.8rem]">K</p>
                </div>
              </div>
              <div>
                {isConnected ? (
                  <div>
                    <h1 className="font-bold text-[0.8rem]">- 325.20K</h1>
                    <p className="font-bold text-[0.8rem] text-gray-400">
                      $1790.87
                    </p>
                  </div>
                ) : (
                  <div>
                    <h1 className="font-bold text-[0.8rem]">0</h1>
                    <p className="font-bold text-[0.8rem] text-gray-400">
                      $0.00
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-around">
              <div className="px-6 border-r-[0.1em] border-gray-300">
                <h1 className="text-[0.8rem] mb-6 text-gray-600 font-medium">
                  Withdraw
                </h1>
                {isConnected ? (
                  <p className="font-medium text-[0.8rem]">325.20 K</p>
                ) : (
                  <p className="font-medium text-[0.8rem]">0</p>
                )}
              </div>
              <div className="px-6 border-r-[0.1em] border-gray-300">
                <h1 className="text-[0.8rem] mb-6 text-gray-600 font-medium">
                  Swap Value
                </h1>
                {isConnected ? (
                  <p className="font-medium text-center text-[0.8rem] text-red-400">
                    $1790.87
                  </p>
                ) : (
                  <p className="font-medium text-center text-[0.8rem] text-red-400">
                    $0.00
                  </p>
                )}
              </div>
              <div className="px-6">
                <h1 className="text-[0.8rem] mb-3 text-gray-600 font-medium">
                  Rewards
                </h1>
                <div className="grid place-items-center w-8 h-8 rounded-full bg-black">
                  <p className="text-[0.8rem] text-white">K</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button className="w-full bg-[#D0CCC8] text-[0.8rem] py-2 font-bold text-white rounded-full">
              Deposit
            </button>
            <button className="w-full bg-[#D0CCC8] text-[0.8rem] py-2 font-bold text-white rounded-full">
              Withdraw
            </button>
          </div>
          {isConnected && (
            <div>
              <div className="flex gap-2 mt-2 mb-1">
                <Icon
                  icon="line-md:loading-alt-loop"
                  className="text-[1.3rem] text-red-500"
                />
                <p className="text-[0.8rem] text-red-400 font-semibold">
                  5/7 days of processing left
                </p>
              </div>
              <div className="flex gap-2 mt-1 mb-1">
                <Icon
                  icon="line-md:loading-alt-loop"
                  className="text-[1.3rem] text-red-500"
                />
                <p className="text-[0.8rem] text-red-400 font-semibold">
                  Swapping K to USDC
                </p>
              </div>
            </div>
          )}
          <p className="text-[0.8rem] text-center text-gray-500 mt-2 font-semibold">
            Withdrawal now takes 5-7 days due to verification process
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
