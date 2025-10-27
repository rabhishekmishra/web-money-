import Login from "@/components/Login";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full bg-[url('/bgmain.jpg')] bg-cover bg-center">
        <Login />
      </div>
    </>
  );
}
