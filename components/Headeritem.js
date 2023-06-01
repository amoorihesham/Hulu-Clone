function Headeritem({ title, Icon }) {
  return (
    <div className="group flex flex-col items-center font-medium cursor-pointer w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className=" text-gray-300 tracking-widest opacity-0  group-hover:opacity-100 transition-all duration-500 ">
        {title}
      </p>
    </div>
  );
}

export default Headeritem;
