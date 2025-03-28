type Props = { color?: string };

function Clock({ color }: Props) {
  return (
    <div>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 0C2.6916 0 0 2.6916 0 6C0 9.3084 2.6916 12 6 12C9.3084 12 12 9.3084 12 6C12 2.6916 9.3084 0 6 0ZM6 10.8C3.3534 10.8 1.2 8.6466 1.2 6C1.2 3.3534 3.3534 1.2 6 1.2C8.6466 1.2 10.8 3.3534 10.8 6C10.8 8.6466 8.6466 10.8 6 10.8Z"
          fill={color?color:"#555555"}
        />
        <path
          d="M6.60039 3H5.40039V6.2484L7.37619 8.2242L8.22459 7.3758L6.60039 5.7516V3Z"
          fill={color?color:"#555555"}
        />
      </svg>
    </div>
  );
}

export default Clock;
