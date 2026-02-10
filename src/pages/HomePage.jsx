import BannerSlider from "../components/BannerSlider";
import AnnouncementBar from "../components/AnnouncementBar";
import OfferCards from "../components/OfferCards";
import CategorySection from "../components/CategorySection";
import FeaturedCollection from "../components/FeaturedCollection.jsx";

const HomePage = () => {
  return (
    <div>
      <AnnouncementBar />
      <BannerSlider />
      <OfferCards />
      <CategorySection />
      <FeaturedCollection />
    </div>
  )
}
export default HomePage