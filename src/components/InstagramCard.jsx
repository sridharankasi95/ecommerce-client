
const InstagramCard = ({ instagram }) => {
    return (
        <div className="bg-[#f2f2f2] rounded-xl text-center cursor-pointer hover:shadow-lg transition duration-300">
            <img src={instagram.image} alt={instagram.name} className="mx-auto h-70 w-full" />

        </div>
    );
}
export default InstagramCard