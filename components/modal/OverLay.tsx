import PropTypes from "prop-types";
//======================================================
import styles from "./Modal.module.scss";
//======================================================

interface Props {
  children: React.ReactNode;
}

export default function Overlay({ children }: Props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
};
