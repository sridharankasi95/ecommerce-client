import BannerSlider from "../components/BannerSlider";
import AnnouncementBar from "../components/AnnouncementBar";
import OfferCards from "../components/OfferCards";
import CategorySection from "../components/CategorySection";
import FeaturedCollection from "../components/FeaturedCollection.jsx";
import ProductSlider from "../components/ProductSlider.jsx";
import YoutubeSection from "../components/HomePage/YoutubeSection.jsx";

const HomePage = () => {
  return (
    <div>
      <AnnouncementBar />
      <BannerSlider />
      <OfferCards />
      <CategorySection />
      <FeaturedCollection />
      <ProductSlider />
      <YoutubeSection />
    </div>
  )
}
export default HomePage