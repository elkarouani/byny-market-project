import { Link } from "react-router-dom";
import CartIcon from "../Icons/CartIcon";
import CloseIcon from "../Icons/CloseIcon";
import HomeIcon from "../Icons/HomeIcon";
import SignOutIcon from "../Icons/SignOutIcon";

interface NavigationMenuProps {
  isMenuOpen: boolean;
  setMenuOpenState: (state: boolean) => void;
}

interface toggleMainMenuProps {
  isMenuOpen: boolean;
  setMenuOpenState: (state: boolean) => void;
}

export const toggleMainMenu = (props: toggleMainMenuProps) => {
  const { isMenuOpen, setMenuOpenState } = props;
  if (!isMenuOpen) return setMenuOpenState(!isMenuOpen);

  document.querySelector('.layout__menu--container')?.classList.replace(
    'animate-fade-in-left', 'animate-fade-out-left');
  setTimeout(() => {
    document.querySelector('.layout__menu--container')?.classList.replace(
      "animate-fade-out-left", "animate-fade-in-left");
    setMenuOpenState(!isMenuOpen);
  }, 500);
}

export default function NavigationMenu(props: NavigationMenuProps) {
  const { isMenuOpen, setMenuOpenState } = props;

  return (
    <div>
      <div
        className="layout__menu--cover"
        onClick={() => props.isMenuOpen && toggleMainMenu({ isMenuOpen, setMenuOpenState })}
      ></div>

      <div className="layout__menu--container animate-fade-in-left">
        <ul className="layout__menu--navigation">
          <li className="cursor-pointer">
            <Link to="/" className="flex items-center space-x-2">
              <HomeIcon />
              <span>Home</span>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="cart" className="flex items-center space-x-2">
              <CartIcon />
              <span>Cart</span>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="signin" className="flex items-center space-x-2">
              <SignOutIcon />
              <span>Sign out</span>
            </Link>
          </li>
        </ul>
        <div
          className="h-fit text-white cursor-pointer"
          onClick={() => toggleMainMenu({ isMenuOpen, setMenuOpenState })}
        >
          <CloseIcon />
        </div>
      </div>
    </div>
  )
}