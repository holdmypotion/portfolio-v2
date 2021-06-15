import { BackdropStyles } from '../../../styles/blog/globalStyles';

const Backdrop = props =>
  props.show ? (
    <BackdropStyles
      style={{ opacity: show ? '0' : '0' }}
      onClick={props.clicked}
    ></BackdropStyles>
  ) : null;

export default Backdrop;
