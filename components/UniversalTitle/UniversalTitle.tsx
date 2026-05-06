import css from "./UniversalTitle.module.css";

interface UniversalTitleProps {
  title: string;
  input?: boolean;
}

const UniversalTitle = ({ title, input }: UniversalTitleProps) => {
  return (
    <h2 className={input ? css.titleWIthInput : css.universalTitle}>{title}</h2>
  );
};

export default UniversalTitle;
