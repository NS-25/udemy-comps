import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";
const Link = ({ to, children, className }) => {
  const { navigate, currrentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currrentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  return (
    <div>
      <a className={classes} href={to} onClick={handleClick}>
        {children}
      </a>
    </div>
  );
};

export default Link;
