type Props = {color?:string,width?:number};

const SearchIcon = ({color,width}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 22"
      strokeWidth={width?width:1.5}
      stroke={color?color:"currentColor"}
      className="size-4 absolute left-3 text-gray-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
};

export default SearchIcon;
