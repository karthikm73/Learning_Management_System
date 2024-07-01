import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Typed from 'typed.js';
import Logo from '../components/common/Logo';
// import Counter from '../utils/Counter';
// // import Counter from '../utils/Counter';

const navigation = [
  { name: 'Hero', href: '/user' },
  { name: 'Explore', href: '/explore' },
  { name: 'Teach', href: '/tutor' },
  { name: 'contact', href: '/contact' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Where knowledge blooms and wisdom flourishes. ",
        "Where learning becomes an adventure, Theora leads the way.",
        "Unlock the secrets of the universe with Theora. ",
        "Unleash the power of knowledge with Theora.",
        "Experience the joy of discovery with Theora.",
        "Theora: Empowering minds to reach new heights.",
        "Theora: Where ideas come to life and minds thrive.",
        "Theora: Nurturing minds to create a brighter tomorrow.",
        "Theora: Unlocking the potential of every mind.",
        "Enlighten your mind with Theora's limitless knowledge.",
        "Explore the wonders of the world with Theora."
      ],
      typeSpeed: 70,
      backDelay: 700,
      smartBackspace: true,
      backSpeed: 20,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
<div className="bg-white background-animation" style={{ height: "100vh" }}>
<header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <div className="-m-1.5 p-1.5 ">
              <span className="sr-only">LMS</span>
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="logo"
              /> */}
              <Logo size='1.3' />
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/signin" className="text-sm font-semibold leading-6 text-gray-900">
              Sign in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/signin"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 lg:px-8">

        <div className="mx-auto max-w-2xl py-6 pt-6 sm:pt-24 lg:pt-28">

          <div className="text-center mt-24">
            <h1 className="text-3xl font-bold tracking-tight nexa-font text-gray-900 sm:text-6xl">
              LMS
            </h1>
            <p className="mt-3 text-lg leading-8 text-gray-600 typed-js-color">
              {/* typed.js */}
              <span className='font-semibold' ref={el} />

            </p>
            <p className="mt-11 text-lg leading-8 text-gray-600">
              Embark on an adventure of learning, where every discovery enriches the mind and empowers the soul to reach new heights.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 ">
              <Link
                to="/user"
                className="rounded-md  bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Unleash Potential
              </Link>
              <Link to="/user#about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
