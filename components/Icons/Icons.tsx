type IconsName =
  | "icon-pencil"
  | "icon-cancel"
  | "icon-calendar"
  | "icon-check"
  | "icon-heart"
  | "icon-search"
  | "icon-user"
  | "icon-trash"
  | "icon-eye"
  | "icon-eye-off"
  | "icon-logo"
  | "icon-logo-white"
  | "icon-Star"
  | "icon-burger-menu";

type IconsProps = {
  id: IconsName;
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
  stroke?: string;
};

export const Icons = ({
  id,
  width = 24,
  height = 24,
  className,
  fill,
  stroke,
}: IconsProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      fill={fill}
      stroke={stroke}
    >
      <use href={`/sprite/sprite.svg#${id}`} />
    </svg>
  );
};
