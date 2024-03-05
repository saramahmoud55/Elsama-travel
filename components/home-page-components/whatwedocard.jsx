const WhatWeDoCard = ({ iconSrc, iconAlt, title, desc }) => {
  return (
    <div className="bg-white rounded-lg w-80 h-72 p-3 pt-1 flex flex-col gap-4">
      <div className="bg-blue-500 w-fit p-4 rounded-lg ">
        <img src={iconSrc} alt={iconAlt} width={50} />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-md">{desc}</p>
    </div>
  );
};

export default WhatWeDoCard;
