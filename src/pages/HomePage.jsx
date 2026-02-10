import BannerSlider from "../components/BannerSlider";
import AnnouncementBar from "../components/AnnouncementBar";
import OfferCards from "../components/OfferCards";

const HomePage = () => {
  return (
    <div>
      <AnnouncementBar />
      <BannerSlider />
      <OfferCards />
      <h1>This Home Page</h1>
    </div>
  )
}
export default HomePage