function Footer() {
  return (
    <footer className="bg-black/90 text-white py-10 rounded-tl-3xl rounded-tr-3xl">
      <div className="container mx-auto flex flex-wrap justify-around">
        {/* About Section */}
        <div className="w-full md:w-1/4 mb-6">
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-gray-400">
            Synergy is committed to providing smart, sustainable energy
            solutions that make a positive impact on the environment. Our
            mission is to empower every household with technology that optimizes
            energy usage.
          </p>
        </div>

        <img src="/public/logo.jpg" className="h-24 w-24 rounded-full" />

        {/* Contact Section */}
        <div className="w-full md:w-1/4 mb-6">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400">Email: support@synergy.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <p className="text-gray-400">Address: 123 Synergy Blvd, Green City</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Synergy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
