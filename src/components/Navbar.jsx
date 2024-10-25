function Navbar() {
  return (
    <div className="flex justify-around p-3 border-b border-black/20">
      <img src="/logo.jpg" alt="logo" className="h-14 w-14" />
      <ul className="flex gap-5 items-center font-semibold tracking-wide">
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}

export default Navbar;
