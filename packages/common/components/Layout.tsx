import { css } from '@emotion/css';

const Layout = ({ children }: { children: any }) => {
  return (
    <div
      className={css({
        color: 'green',
      })}
    >
      <div>HEADER</div>
      {children}
    </div>
  );
};

export default Layout;
