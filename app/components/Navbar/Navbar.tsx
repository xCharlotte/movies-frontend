export default function Navbar() {
  return (
    <header className="bg-white p-5 border border-b-gray-200">
      <nav className="container mx-auto text-lg">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex">
            <p>Charlie Movies</p>
          </div>
          <div className="flex">
            <ul className="pt-4 text-base text-gray-600 flex md:pt-0">
              <li>
                <a className="md:p-4 py-2 hover:text-gray-900" href="/movies">
                  Films
                </a>
              </li>
              <li>
                <a className="md:p-4 py-2 hover:text-gray-900" href="/profile">
                  Profiel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}