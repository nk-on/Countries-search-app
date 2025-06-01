interface ListItem {
  title: string | string[];
  data: string | string[];
}
function ListItem({ title, data }:ListItem) {
  return (
    <li>
      {title} <span>{data}</span>
    </li>
  );
}
export default ListItem;
