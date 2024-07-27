import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="min-h-84vh w-full"
        style={{
          backgroundImage: "url('/images/home_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto text-center py-36">
          <div className="bg-black bg-opacity-50 p-10 rounded-lg inline-block">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to FarmToTable
            </h1>
            <p className="text-xl text-white mb-8">
              At FarmFresh, we are committed to promoting sustainable
              agriculture and supporting local farmers. Our platform connects
              consumers directly with farmers, ensuring fair prices and
              high-quality produce. Join us in making a difference in your
              community!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-slate-300 to-slate-400 w-full">
        <div className="container mx-auto py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            OUR SERVICES
          </h1>
          <p className="text-lg text-white">
            At FarmFresh, we offer a range of services dedicated to promoting
            sustainable agriculture and supporting local farmers. Explore how we
            can help you buy and sell fresh, organic produce while fostering
            community support and agricultural education.
          </p>
        </div>
      </div>
      <div className="h-auto my-7 flex items-center justify-center gap-6 w-full flex-wrap text-black">
        <div className="w-[46%]  flex justify-end">
          {" "}
          <div className="flex h-80 w-72 flex-col items-center justify-center gap-5 rounded-2xl border-4 border-gray-400 p-3 bg-slate-200">
            <h1 className="text-3xl font-medium">BUY</h1>
            <p className="text-center">
              Buy fresh, organic fruits, vegetables, and grains directly from
              farmers at fair prices, supporting local agriculture.
            </p>
            <button className="rounded bg-green-550 px-4 py-2 font-bold text-white hover:bg-green-555 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              <Link href="/buy">Buy Now</Link>
            </button>
          </div>
        </div>
        <div className="w-[46%]  flex justify-start">
          <div className="flex h-80 w-72 flex-col items-center justify-center gap-5 rounded-2xl border-4 border-gray-400 p-3 bg-slate-200">
            <h1 className="text-3xl font-medium">SELL</h1>
            <p className="text-center">
              Sell your fresh, organic produce directly to consumers at fair
              prices, promoting sustainability and community support.
            </p>
            <button className="rounded bg-blue-550 px-4 py-2 font-bold text-white hover:bg-blue-550 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <Link href="/sell">Sell Now</Link>
            </button>
          </div>
        </div>
        <div className="w-[46%]  flex justify-end">
          <div className="flex h-80 w-72 flex-col items-center justify-center gap-5 rounded-2xl border-4 border-gray-400 p-3 bg-slate-200">
            <h1 className="text-center text-2xl font-medium">
              PLANT THE SEEDS OF KNOWLEDGE
            </h1>
            <p className="text-center">
              By embracing continuous learning in agriculture, you can cultivate
              sustainable practices and achieve higher yields, ensuring a
              prosperous future for generations to come.
            </p>
            <button className="rounded bg-yellow-550 px-4 py-2 font-bold text-white hover:bg-yellow-550 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
              <Link href="/info">Acknowledge</Link>
            </button>
          </div>
        </div>
        <div className="w-[46%]  flex justify-start">
          <div className="flex h-80 w-72 flex-col items-center justify-center gap-3 rounded-2xl border-4 border-gray-400 p-3 bg-slate-200">
            <h1 className="text-center text-2xl font-medium">
              PROTECT YOUR CROPS
            </h1>
            <p className="text-center">
              Utilize advanced weather forecasting to safeguard your crops from
              adverse conditions. Our innovative approach ensures your fields
              stay productive and resilient against unpredictable weather.
            </p>
            <button className="rounded bg-red-550 px-4 py-2 font-bold text-white hover:bg-red-550 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              <Link href="/crop-safety"></Link>Discover How
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
