'use client'




export default function Home() {


  return (
    <>
    <div className="flex flex-col justify-center bg-gradient-to-br from-cyan-700 to-rblack  items-center w-full h-screen">
      <h2 className="absolute top-5 text-4xl font-robotaur">GSAP</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          <a className="p-4  font-dualityregular bg-zinc-500 text-white rounded hover:bg-zinc-600 transition" href="https://gsap-tests.vercel.app/HarryPotter" target="_blank">DAILY PROPHET 🔗</a>
          <a className="p-4 font-extrabold font-mono bg-green-500 text-white rounded hover:bg-green-600 transition" href="https://gsap-tests.vercel.app/Ben10" target="_blank">Ben10 🔗</a>
          <a className="p-4  font-robotaur bg-blue-500  text-white rounded hover:bg-blue-600 transition" href="https://gsap-tests.vercel.app/KaijuNo8" target="_blank">KaijuNo8 🔗</a>
      </div>
    </div>
    </>
  );
}
