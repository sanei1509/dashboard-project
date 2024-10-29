import Link from 'next/link';
import styles from '@/app/ui/dashboard/sidenav.module.css';
import AcmeLogo from '../acme-logo';
import NavLinks from './nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className={styles.sideNavContainer}>
      <Link className={styles.logoLink} href="/">
        <div className={styles.logoContainer}>
          <AcmeLogo />
        </div>
      </Link>
      <div className={styles.navContent}>
        <NavLinks />
        <div className={styles.placeholder}></div>
        <form>
          <button className={styles.signOutButton}>
            <PowerIcon className={styles.powerIcon} />
            <div className={styles.signOutText}>Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}