interface props {
  keyWord1?: string;
  keyWord2?: string;
  title: string;
  body: string;
}

const InfoSection: React.FC<props> = ({ keyWord1, keyWord2, title, body }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center gap-8 p-8 md:p-20 py-20 bg-white">
      <div className="flex flex-1 flex-col text-primary ">
        <h2 className="text-5xl md:text-6xl font-bold">{keyWord1}</h2>
        <h2 className="text-5xl md:text-6xl font-bold">{keyWord2}</h2>
      </div>
      <div className="flex flex-1 flex-col text-black">
        <p className="text-2xl font-bold mb-4">{title}</p>
        <p className="text-md font-medium">{body}</p>
      </div>
    </div>
  );
};

export default InfoSection;
