const imageVideoSrc = [
  {
    "id": 1,
    "image": "/images/viewers-disney.png",
    "video": "/videos/1564674844-disney.mp4"
  },
  {
    "id": 2,
    "image": "/images/viewers-pixar.png",
    "video": "/videos/1564676714-pixar.mp4"
  },
  {
    "id": 3,
    "image": "/images/viewers-marvel.png",
    "video": "/videos/1564676115-marvel.mp4"
  },
  {
    "id": 4,
    "image": "/images/viewers-starwars.png",
    "video": "/videos/1608229455-star-wars.mp4"
  },
  {
    "id": 5,
    "image": "/images/viewers-national.png",
    "video": "/videos/1564676296-national-geographic.mp4"
  }
]


const Viewers = () => {
  return (
    <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-5">
      {
        imageVideoSrc.map(src =>
          <div key={src.id} style={{
            marginTop: '-20px',
            paddingTop: '56.25%',
            marginBottom: '20px',
            transition: `all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s`,
            border: `0px solid grey`,
            '& video:hover': {
              position: 'fixed'
            }
          }}
            className="transform rounded-sm overflow-hidden cursor-pointer relative hover:scale-105 hover:border-white">
            <img className="w-full inset-0 absolute z-10 transition-opacity duration-500 ease-in-out"
              src={src.image} alt="" />
            <video className="absolute top-0 z-0 w-full opacity-0"
              autoPlay={true}
              loop={true}
              playsInline={false}>
              <source src={src.video} type="video/mp4" />
            </video>
          </div>
        )
      }
    </div>
  );
};

export default Viewers;
