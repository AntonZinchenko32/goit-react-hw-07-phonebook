import { ThreeDots } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import css from './Loader.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Loader = () => {
  return createPortal(
    <div className={css.blur}>
      <div className={css.loader}>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </div>
    </div>,
    modalRoot
  );
};
