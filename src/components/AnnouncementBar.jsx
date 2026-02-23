import { TiTick } from "react-icons/ti";

const AnnouncementBar = () => {
  return (
    <div className="bg-gray-100 text-gray-700">

      <div className="max-w-7xl mx-auto px-4 py-2">

        <div className="
          flex flex-col 
          sm:flex-row 
          items-center 
          justify-between 
          gap-2 
          text-sm
        ">

          <div className="flex items-center gap-2">
            <TiTick />
            <span>Official Revo Shop over 1100 products online</span>
          </div>

          <div className="flex items-center gap-2">
            <TiTick />
            <span>Free shipping and returns for members</span>
          </div>

          <div className="flex items-center gap-2">
            <TiTick />
            <span>Same-day dispatch before 8pm (Mon-Fri)</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default AnnouncementBar;
