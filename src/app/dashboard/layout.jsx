const { default: Navbar } = require("../ui/dashboard/navbar/Navbar");
const { default: Sidebar } = require("../ui/dashboard/sidebar/Sidebar");
import styles from "../ui/dashboard/dashboard.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>

      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
