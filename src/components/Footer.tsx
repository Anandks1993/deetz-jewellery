export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p>
          © {new Date().getFullYear()} Deetz Jewellery. All rights reserved.
        </p>

        {/* Right */}
        {/* <div className="flex gap-6">
          <a href="#" className="hover:text-gray-800">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-800">
            Terms
          </a>
          <a href="#" className="hover:text-gray-800">
            Contact
          </a>
        </div> */}
      </div>
    </footer>
  );
}
