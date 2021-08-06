import { css } from '@emotion/css';
import CommonDemo from '@common/components/CommonDemo';

const Demo = () => (
  <>
    <h1
      className={css({
        color: 'red',
        fontSize: 20,
      })}
    >
      demo
    </h1>
    <CommonDemo />
  </>
);

export default Demo;
