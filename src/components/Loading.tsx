function Loading() {
  return (
    <div className="w-[100%] h-[100%]  flex justify-center items-center">
      <div className="flex flex-col items-center">
        <video id="Loading-animation" autoPlay>
          <source src="./AnimationLoading.webm" type="video/webm"></source>
        </video>
        <h1>Loading</h1>
      </div>
    </div>
  );
}

export default Loading;
