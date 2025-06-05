const Footer = () => {
  const date = new Date();
  return (
    <footer className="p-2 mt-auto text-center border-t border-teal-100">
      <p className="text-sm">{date.getFullYear()} Copyright &copy; All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
