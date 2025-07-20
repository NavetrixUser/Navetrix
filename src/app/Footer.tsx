import FooterQuickLinks from "./FooterQuickLinks";

export default function Footer({ currentYear }: { currentYear: number }) {
  return (
    <footer className="w-full bg-[#1B1F3B] text-white px-4 sm:px-6 md:px-8 py-10 md:py-12 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="space-y-1 mb-4">
              <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight drop-shadow-lg whitespace-nowrap">
                NAVETRIX <span className="font-light">Technologies</span>
              </h2>
            </div>
          </div>
          <p className="text-gray-300 text-base leading-relaxed mb-6 drop-shadow">
            Empowering freshers and businesses through real-world tech internships, expert-led training, and innovative software solutions.
          </p>
          <div className="flex items-center gap-2 text-gray-200 text-base font-semibold mb-2 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#00C9A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
            </svg>
            <a href="mailto:info@navetrix.com" className="underline hover:text-[#00C9A7]">info@navetrix.com</a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <div className="text-xl font-bold mb-4 text-white tracking-tight drop-shadow">Quick Links</div>
          <FooterQuickLinks />
        </div>
        {/* Socials */}
        <div>
          <div className="text-xl font-bold mb-4 text-white tracking-tight drop-shadow">Socials</div>
          <ul className="flex gap-6 items-center mt-2">
            <li>
              <a href="https://www.facebook.com/people/Navetrix-Technologies/61578175604800/" aria-label="Facebook" className="hover:text-[#00C9A7] transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-7 h-7 drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/navetrixtechnologies" aria-label="LinkedIn" className="hover:text-[#00C9A7] transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-7 h-7 drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/navetrixtechnologies" aria-label="Instagram" className="hover:text-[#00C9A7] transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-7 h-7 drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.634 2.2 15.25 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07c-1.28.058-2.15.24-2.91.51-.8.28-1.48.66-2.15 1.33-.67.67-1.05 1.35-1.33 2.15-.27.76-.452 1.63-.51 2.91C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.24 2.15.51 2.91.28.8.66 1.48 1.33 2.15.67.67 1.35 1.05 2.15 1.33.76.27 1.63.452 2.91.51C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.15-.24 2.91-.51.8-.28 1.48-.66 2.15-1.33.67-.67 1.35-1.05 2.15-1.33.76-.27 1.63-.452 2.91-.51C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@NavetrixTechnologies" aria-label="YouTube" className="hover:text-[#00C9A7] transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-7 h-7 drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.379 3.5 12 3.5 12 3.5s-7.379 0-9.391.566A2.994 2.994 0 0 0 .502 6.186C0 8.2 0 12 0 12s0 3.8.502 5.814a2.994 2.994 0 0 0 2.107 2.12C4.621 20.5 12 20.5 12 20.5s7.379 0 9.391-.566a2.994 2.994 0 0 0 2.107-2.12C24 15.8 24 12 24 12s0-3.8-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs mt-12">
        &copy; {currentYear} Navetrix Technologies. All rights reserved.
      </div>
    </footer>
  );
}
