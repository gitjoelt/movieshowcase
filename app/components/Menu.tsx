import { categories } from "../constants/constants";

export default function Menu({ nav }: { nav: string }) {
  return (
    <ul className="menu menu-horizontal bg-slate-700">
      {categories.map((el, index) => (
        <li key={index}>
          <a className={el === nav ? "active" : ""} href={`?${el}`}>
            {el}
          </a>
        </li>
      ))}
    </ul>
  );
}
