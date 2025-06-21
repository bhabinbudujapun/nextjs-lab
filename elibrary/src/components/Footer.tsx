// import Link from "next/link";
// import React from "react";


function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              &copy; 2025. eLibrary. All rights reserved.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

//     