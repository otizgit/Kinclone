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

function App() {
  return (
    <main className="px-20 py-6">
      <header className="flex justify-between items-end mb-10">
        <div className="flex items-center gap-6">
          <div className="w-30 h-30 rounded-full bg-black"></div>
          <div>
            <h1 className="text-[2.5rem] font-bold flex items-center gap-5">
              KINTO{" "}
              <span className="text-gray-400 font-medium text-[1.2rem]">K</span>
            </h1>
            <p className="mb-2 text-[0.9rem] text-gray-700 font-medium">
              K is the governance token of the Kinto network
            </p>
            <div className="flex items-center gap-2">
              <button className="flex gap-1 items-center font-medium uppercase bg-gray-200 text-[0.75rem] px-2 py-1 rounded-full">
                <Icon icon="streamline-plump:web" className="text-[0.8rem]" />
                <p>Website</p>
              </button>
              <div className="px-2 py-1 bg-gray-300 rounded-full text-[0.8rem]">
                L2
              </div>
              <div className="px-2 py-1 bg-gray-300 rounded-full font-medium uppercase text-[0.8rem]">
                governance
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div>
            <h3 className="text-[0.8rem] font-medium">View in Explorers:</h3>
            <div className="flex items-center gap-1">
              <Icon icon="token:crypto-com" className="text-[2rem]" />
              <Icon icon="token:crypto-com" className="text-[2rem]" />
              <Icon icon="token:crypto-com" className="text-[2rem]" />
            </div>
          </div>
          <div>
            <h3 className="text-[0.8rem] font-medium">Buy $K on:</h3>
            <div className="flex items-center gap-1">
              <Icon icon="token:crypto-com" className="text-[2rem]" />
              <Icon icon="token:crypto-com" className="text-[2rem]" />
              <Icon icon="token:crypto-com" className="text-[2rem]" />
            </div>
          </div>
        </div>
      </header>

      <section className="flex gap-6 justify-evenly mb-10 px-18 border-y-[0.1em] border-gray-200 py-6">
        <div className="border-r-[0.1em] border-gray-200 px-7 flex-1">
          <h2 className="text-gray-400 text-[0.9rem] font-medium">Price</h2>
          <p className="text-[2.5rem] font-bold">$0.84</p>
        </div>
        <div className="border-r-[0.1em] border-gray-200 px-7 flex-1">
          <h2 className="text-gray-400 text-[0.9rem] font-medium">
            Market Cap
          </h2>
          <p className="text-[2.5rem] font-bold">$14.40M</p>
        </div>
        <div className="border-r-[0.1em] border-gray-200 px-7 flex-1">
          <h2 className="text-gray-400 text-[0.9rem] font-medium">FDV</h2>
          <p className="text-[2.5rem] font-bold">$8.42M</p>
        </div>
        <div className="border-r-[0.1em] border-gray-200 px-7 flex-1">
          <h2 className="text-gray-400 text-[0.9rem] font-medium">
            Circulating Supply
          </h2>
          <p className="text-[2.5rem] font-bold">$1.84M</p>
        </div>
        <div>
          <h2 className="text-gray-400 text-[0.9rem] font-medium">Holders</h2>
          <p className="text-[2.5rem] font-bold">51.40K</p>
        </div>
      </section>

      <section className="flex items-start justify-between">
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

        <div className="w-[400px]">
          <h1 className="mb-3 text-gray-600 text-[1.1rem] font-medium">Withdraw K</h1>
          <div className="p-2 py-3 mb-4 border-[0.1em] border-gray-300 bg-gray-100 rounded-md">
            <div className="flex justify-between items-center gap-4 pb-3 border-b-[0.1em] border-gray-300 mb-3">
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 rounded-full bg-black"></div>
                <div>
                  <h1 className="font-bold text-[0.8rem]">KINTO</h1>
                  <p className="text-gray-500 text-[0.8rem]">K</p>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-[0.8rem]">325.30K</h1>
                <p className="font-bold text-[0.8rem] text-gray-400">
                  $1790.78
                </p>
              </div>
            </div>

            <div className="flex justify-around">
              <div>
                <h1 className="text-[0.8rem] mb-6 text-gray-600 font-medium">
                  Deposited
                </h1>
                <p className="text-[0.8rem]">325.20 K</p>
              </div>
              <div>
                <h1 className="text-[0.8rem] mb-6 text-gray-600 font-medium">
                  Current Value
                </h1>
                <p className="text-[0.8rem]">325.20 K</p>
              </div>
              <div>
                <h1 className="text-[0.8rem] mb-6 text-gray-600 font-medium">
                  Rewards
                </h1>
                <div className="grid place-items-center w-8 h-8 rounded-full bg-black">
                  <p className="text-[0.8rem] text-white">K</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button className="w-full bg-gray-400 text-[0.8rem] py-2 font-bold text-white rounded-full">
              Deposit K
            </button>
            <button className="w-full bg-gray-400 text-[0.8rem] py-2 font-bold text-white rounded-full">
              Withdraw
            </button>
          </div>
          <p className="text-[0.8rem] text-center text-gray-500 mt-2 font-semibold">
            Withdraw taked 5-7 days due to verification process
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
