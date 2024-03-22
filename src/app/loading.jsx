const Loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <div
        className=" border-4 border-red-500 
      border-r-transparent border-l-transparent
      animate-spin rounded-full
      "
      >
        <div className="w-[96px] h-[96px] bg-transparent"></div>
      </div>
    </div>
  );
};

export default Loading;
