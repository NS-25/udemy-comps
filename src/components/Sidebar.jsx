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
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {renderLinks}
    </div>
  );
};

export default Sidebar;
