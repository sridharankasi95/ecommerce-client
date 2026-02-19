import { LuSquareUser } from "react-icons/lu";
import { MdDateRange } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";

const BlogCards = ({ blog }) => {
    return (
        <div className="bg-[#f2f2f2] rounded-xl text-center cursor-pointer hover:shadow-lg transition duration-300">
            <div className="group relative p-4">
                <div className="flex items-start align-start absolute top-4 left-4 bg-white rounded-lg px-3 py-1 display-column gap-1">
                    <span className="day" >10</span>
                    <span className="month">Jan</span>
                </div>
                <img src={blog?.image || "https://opencart.smartaddons.com/themes/so_revo3/layout4/image/cache/catalog/demo/blog/2-570x393.jpg"} alt={blog?.name || "Blog Image"} className="mx-auto h-70 w-full" />
            </div>
            <div className="mt-4 ">
                <h3 className="font-semibold flex align-start ">{blog?.name || "Blog Post Title"}</h3>
                <div className="text-sm text-gray-500 mt-2 flex align-center ">
                    <span className="mr-4"> <LuSquareUser className="inline mr-1" /> {blog?.author || "Admin"}</span>
                    <span className="mr-4"> <MdDateRange className="inline mr-1" /> {blog?.date || "Jan 1, 2024"}</span>
                    <span className="mr-4"> <FiMessageCircle className="inline mr-1" /> {blog?.comments || 0} Comments</span>
                </div>
            </div>


        </div>

    );
}
export default BlogCards