import React from "react";

function Footer() {
  return (
    <div className="col-span-12 min-h-[100px] rounded-lg shadow">
      <footer className="bg-gray-200 text-center dark:bg-neutral-600 lg:text-left">
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
