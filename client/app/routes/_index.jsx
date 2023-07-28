import Navbar from "../components/Navbar";

export const meta = () => {
  return [
    { title: "Tasty Pages" },
    { name: "description", content: "Welcome to Tasty Pages!" },
  ];
};
export default function Index() {
  return (
    <div className="bg-[#e3d6eb] w-screen h-screen">
      <div>
        <Navbar />
      </div>
      <div>
        <h1 className="relative top-48 font-title">Tasty Pages</h1>
      </div>
    </div>
  );
}
