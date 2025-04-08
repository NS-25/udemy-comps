import Link from "./Link";

const Sidebar = () => {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buutons" },
  ];

  const renderLinks = links.map(() => {
    return (
      <Link key={Link.label} to={links.path}>
        {links.label}
      </Link>
    );
  });
  return <div>{renderLinks}</div>;
};

export default Sidebar;
