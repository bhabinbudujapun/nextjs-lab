import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 border-gray-100 dark:border-gray-800">
          <div className="sm:flex sm:justify-between item-center">
            <div>
              <Link href={"/"}>
                <div className="flex items-center gap-1">
                  <span className="text-xl font-bold tracking-tight text-primary-500">
                    eLibrary
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <button className="h-10 rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100 hover:bg-primary-100 active:border-primary-200 active:bg-primary-200">
                Sign in
              </button>
              <button className="h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:bg-primary-700">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
