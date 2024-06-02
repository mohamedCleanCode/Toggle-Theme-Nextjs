import ThemeChanger from "@/components/ThemeChanger";

const Home = () => {
  return (
    <div className="h-[100vh] text-center flex justify-center items-center flex-col gap-10">
      <ThemeChanger />
      <h1>Hello To Toggle Theme!</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        dicta corrupti nam ipsum odit laboriosam at ullam, consequatur
        repudiandae iste adipisci repellendus quod? Facere beatae id
        reprehenderit sint in repudiandae!
      </p>
    </div>
  );
};

export default Home;
