import React, { lazy, Suspense } from 'react';

const FaTwitter = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaTwitter })));
const FaInstagram = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaInstagram })));
const FaFacebook = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaFacebook })));

const Footer = React.memo(() => {
    return(
        <div className="pt-16 mx-auto w-full px-4 md:px-24 lg:px-8 bg-white">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Company
            </span>
          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Category
            </p>
            <ul className="mt-2 space-y-2">
              {["News", "World", "Games", "References"].map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Business
            </p>
            <ul className="mt-2 space-y-2">
              {["Web", "eCommerce", "Business", "Entertainment", "Portfolio"].map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Apples</p>
            <ul className="mt-2 space-y-2">
              {["Media", "Brochure", "Nonprofit", "Educational", "Projects"].map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Cherry</p>
            <ul className="mt-2 space-y-2">
              {["Infopreneur", "Personal", "Wiki", "Forum"].map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2025 Lorem Inc. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <Suspense fallback={<div>Loading...</div>}>
            <FaTwitter />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <FaInstagram />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <FaFacebook />
          </Suspense>
        </div>
      </div>
    </div>
    
    )
})
export default Footer;