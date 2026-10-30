import styles from "./Header.module.css";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router";
import {Search, Bell, User, ChevronDown} from "lucide-react"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* logo */}

        <img className= {styles.logo} src={logo} alt="Logo" />

        {/* nav links Link */}
        <nav className= {styles.nav}>
          <Link className= {styles.navLink} href="">TV Shows</Link>
          <Link className= {styles.navLink}href="">Movies</Link>
          <Link className= {styles.navLink} href="">Home</Link>
          <Link className= {styles.navLink}href="">New & Popular</Link>
          <Link className={styles.navLink}href="">My List</Link>
          <Link className= {styles.navLink}href="">Browse by Language</Link>
        </nav>

        {/* right side section */}
        <div className= {styles.rightSection}>
          <div className= {styles.searchContainer}>
            <button className={styles.searchButton}>
              <Search size={20}/>
            </button>
          </div>

           {/* notification */}
          <button className={styles.iconButton}>
            {/* notification icon*/}
            <Bell/>
            <span>4</span>
          </button>

          {/* profile */}
          <div>
            <button>
              {/* user icon */}
              <User/>
              {/* dropdown icon */}
              <ChevronDown/>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
