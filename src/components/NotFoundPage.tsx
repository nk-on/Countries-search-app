import { Link } from "react-router";
export function NotFoundPage() {
  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1>Something went wrong</h1>
        <Link to={"/"}>
          <button className="w-[125px] h-[40px] bg-[#a9b0db] rounded-[8px]">Go back</button>
        </Link>
      </div>
    </div>
  );
}
