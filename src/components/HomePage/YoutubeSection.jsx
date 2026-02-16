const YoutubeSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-12">

      <h2 className="text-2xl font-bold mb-6 text-center">
        Watch Our Latest Collection
      </h2>

      <div className="relative w-full overflow-hidden rounded-xl shadow-lg"
           style={{ paddingTop: "56.25%" }}>

        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Ek-TnnOCHfI&t=8s"
          title="YouTube video"
          allowFullScreen
        ></iframe>

      </div>

    </div>
  );
};

export default YoutubeSection;
