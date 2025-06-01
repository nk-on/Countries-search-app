interface ListItem {
  title: string | string[];
  data: string | string[];
}
function ListItem({ title, data }:ListItem) {
  return (
    <li className="flex dark:text-[#fff]">
      <p className="font-bold">{title} </p>:<span>{data}</span>
    </li>
  );
}
export default ListItem;
