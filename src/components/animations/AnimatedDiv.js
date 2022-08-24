import { motion } from 'framer-motion';
import classes from './AnimatedDiv.module.css';

const initial = { x: '50%', opacity: 0, filter: 'blur(5px)' };
const animation = { x: '0', opacity: 1, filter: 'blur(0px)' };
const exit = { x: '-50%', opacity: 0, filter: 'blur(5px)' };

const AnimatedDiv = (props) => {
  return (
    <motion.div
      className={classes['animation-setup-div']}
      initial={initial}
      animate={animation}
      exit={exit}
      transition={{ duration: 0.3 }}>
      {props.children}
    </motion.div>
  );
};
export default AnimatedDiv;
