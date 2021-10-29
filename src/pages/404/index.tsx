import {Robot404} from '../../components';

import { useStyles } from "./styles";

export function Error404() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Robot404 className={classes.img} />
    </div>
  );
}
