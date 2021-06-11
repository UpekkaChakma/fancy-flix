import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Videos from "./Video";
import Footer from "./Footer";

const Home = () => {

  return (
    <main className=" mx-8">
      <ImgSlider />
      <Videos />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
      <Footer />
    </main>
  );
};

export default Home;
