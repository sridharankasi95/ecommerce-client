import { TiTick } from "react-icons/ti";

const AnnouncementBar = () => {
  return (
    <div className="flex items-center justify-center text-gray-700 text-center py-2 px-10 gap-10">
    <div className="w-1/3 flex justify-start items-center">
        <TiTick className="mr-2" /> Official Revo Shop over 1100 products online
    </div>
        <div className="w-1/3 flex justify-center items-center">
        <TiTick className="mr-2" /> Free shipping and returns for members
    </div>
        <div className="w-1/3 flex justify-end items-center">
       <TiTick className="mr-2" /> Same-day dispatch before 8pm (Mon-Fri)
    </div>
    </div>
  );
}
export default AnnouncementBar;