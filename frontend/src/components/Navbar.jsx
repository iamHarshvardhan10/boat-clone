import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <nav className="navbar__container">
      <div className="top__header">
        <p className="header__text">
          Get additional 5% off on Prepaid Orders | Code:{" "}
          <span className="text__color">BOATHEAD</span> |{" "}
          <a href="">Shop Now</a>
        </p>
      </div>
      <div className="main__header">
        <div className="logo__bar">
          <img src={assets.logo} alt="logo" />

          <ul>
            <li>Categories</li>
            <li>boAt Personalisation</li>
            <li>Corporate Orders</li>
            <li>Gifiting Store</li>
            <li>More</li>
          </ul>
        </div>

        <div className="search__bar">
          <div class="flex items-center pl-4 gap-2 border-gray-500/30 h-[41px] rounded-full overflow-hidden max-w-md w-[300px] search">
            <img src={assets.search_icons} alt="" className="bg-[#eff4f7]" />
            <input
              type="text"
              placeholder="Search"
              class="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm bg-[#eff4f7]"
            />
          </div>
          <div className="userProfile">
            <img src={assets.userProfile} alt="" />
          </div>
          <div className="bag">
            <img src={assets.bag} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
