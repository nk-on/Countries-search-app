interface DataContainer {
  title:string,
  data:string | undefined | string[] | number
}
export default function DataContainer({ title, data }:DataContainer) {
  return (
    <div className="flex flex-row">
      <h3 className="font-bold">{title}:</h3>
      <span>{data}</span>
    </div>
  );
}