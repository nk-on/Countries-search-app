function Loading() {
  return (
    <div className="w-[100%] h-[100%] mt-[25%] flex  justify-center items-center dark:text-[#fff]">
      <div className="flex flex-col h-[100%] items-center">
        <video id="Loading-animation" autoPlay>
          <source src="./AnimationLoading.webm" type="video/webm"></source>
        </video>
        <h1>Loading</h1>
      </div>
    </div>
  );
}

export default Loading;
