import React from "react";

function Footer() {
  return (
    <div className="col-span-12 min-h-[100px] rounded-lg shadow">
      <footer className="bg-gray-200 text-center dark:bg-neutral-600 lg:text-left">
        <div className="container p-6">
          <div className="grid gap-x-4 md:grid-cols-2">
            {/* About Us section */}
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                About Us
              </h5>
              <p className="mb-3 text-neutral-800 dark:text-neutral-200">
                Motilal Nehru National Institute of Technology (MNNIT) Allahabad
                is an institute of national importance providing excellence in
                education and research.
              </p>
            </div>

            {/* Topics section */}
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                Topics
              </h5>
              <ul className="mb-0 list-none">
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Advancements in Diagnostic Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Global Healthcare Monitoring
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Nanotechnology in Diagnostics
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    AI and ML in Healthcare
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="bg-slate-400 p-4 text-center text-white dark:bg-neutral-700 dark:text-neutral-200">
          © 2024 Copyright :
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="https://www.mnnit.ac.in/"
          >
            " MNNIT Allahabad "
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
