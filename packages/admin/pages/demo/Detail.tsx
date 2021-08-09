import { css } from '@emotion/css';

const Demo = () => (
  <>
    <h2
      className={css({ "&>span": { color: "#CCC" } })}
    >
      <span>
        demo detail
      </span>
    </h2>
  </>
);

export default Demo;
