import { BackdropStyles } from '../../../styles/blog/globalStyles';

const Backdrop = props =>
  props.show ? <BackdropStyles onClick={props.clicked}></BackdropStyles> : null;

export default Backdrop;
