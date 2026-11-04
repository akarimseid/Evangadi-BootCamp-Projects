import styles from "./Header.module.css";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router";
import {Search, Bell, User, ChevronDown} from "lucide-react"
import {useState} from "react"

function Header() {

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* logo */}

        <img className={styles.logo} src={logo} alt="Logo" />

        {/* nav links Link */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} href="">
            TV Shows
          </Link>
          <Link className={styles.navLink} href="">
            Movies
          </Link>
          <Link className={styles.navLink} href="">
            Home
          </Link>
          <Link className={styles.navLink} href="">
            New & Popular
          </Link>
          <Link className={styles.navLink} href="">
            My List
          </Link>
          <Link className={styles.navLink} href="">
            Browse by Language
          </Link>
        </nav>

        {/* right side section */}
        <div className={styles.rightSection}>
          {/* search */}
          <div className={styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>

            {isSearchOpen && (
              <input
                type="text"
                placeholder="movies, shows, genres"
                className={styles.searchInput}
              />
            )}
          </div>

          {/* notification */}
          <button className={styles.iconButton}>
            {/* notification icon*/}
            <Bell size={20} />
            <span className={styles.notificationBadge}>4</span>
          </button>

          {/* profile */}
          <div className={styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              {/* user icon */}

              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>
              {/* dropdown icon */}
              <ChevronDown size={20} />
            </button>

            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <link className={styles.profileMenu}> Account</link>
                <link className={styles.profileMenu}> help center</link>
                <hr className={styles.profileMenuDivider} />
                <link className={styles.profileMenu}> Sign out</link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
