import MenuIcon from "../../assets/outlineIcon/menuIcon";
import DarkModeToggle from "../common/darkModeToggle";
import DropdownNotification from "../common/dropDownNotification";
import GetLogo from "../common/getLogo";

const WANavbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-bg ">
      <div className="px-3  lg:px-5 lg:pl-3 h-16">
        <div className="h-full flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-text rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 0 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
            <a href="#" className="flex ms-2 md:me-24">
              <GetLogo className="h-8 w-8 me-3" />

              {/* <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-text">
                TotalAds
              </span> */}
            </a>
          </div>
          <div className="flex items-center">
            <div className="mr-2">
              <DropdownNotification />
            </div>
            <div className="mr-2">
              <DarkModeToggle className="relative top-0 right-0" />
            </div>
            <div className="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  className="h-10 border w-10 rounded-lg p-2 blur-1 bg-bg-200 hover:bg-bg-300 transition-all "
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <GetLogo className="w-6 h-6 rounded-full" />
                </button>
              </div>
              <div
                className="z-50 hidden my-4 text-base list-none bg-bg-200 divide-y divide-gray-100 rounded shadow dark:divide-gray-600"
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p className="text-sm text-text " role="none">
                    Neil Sims
                  </p>
                  <p
                    className="text-sm font-medium text-text truncate "
                    role="none"
                  >
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-text-200 hover:bg-bg-100"
                      role="menuitem"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-text-200 hover:bg-bg-100"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default WANavbar;
