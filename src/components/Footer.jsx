function Footer() {
  return (
    <footer className="bg-pink-200 text-black py-6 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-2">Crumbl Cookies</h2>
          <p className="mb-4">Delicious cookies, baked fresh daily!</p>

          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.facebook.com/crumblcookies"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/crumblcookies"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/crumblcookies"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://www.tiktok.com/@crumblcookies"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              TikTok
            </a>
          </div>

          <p className="text-sm mb-2">
            Contact us:{" "}
            <a href="mailto:info@crumblcookies.com" className="underline">
              info@crumblcookies.com
            </a>
          </p>
          <p className="text-sm mb-2">Phone: (555) 123-4567</p>
          <p className="text-sm mb-4">123 Cookie Lane, Sweet City, CA 90210</p>

          <p className="text-sm">© 2024 Crumbl Cookies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
