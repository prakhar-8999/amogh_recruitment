const navigation = [
  {name: "About", navigate: "/"},
  {name: "Blog", navigate: "/"},
  {name: "Team", navigate: "/"},
  {name: "Pricing", navigate: "/"},
  {name: "Contact", navigate: "/"},
  {name: "Terms", navigate: "/"},
];

const FooterNavigation = () => {
  return (
    <>
      <nav className="flex flex-wrap justify-center -mx-5 -my-2">
        {navigation.map((each, index) => (
          <div className="px-5 py-2" key={index}>
            <a
              href={each.navigate}
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              {each.name}
            </a>
          </div>
        ))}
      </nav>
    </>
  );
};

export default FooterNavigation;
