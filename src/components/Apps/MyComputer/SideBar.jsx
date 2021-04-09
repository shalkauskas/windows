import { createUseStyles } from 'react-jss';
import SideCard from './SideCard';
import assets from './assets';
const useStyles = createUseStyles({
  sideBar: {
    width: '180px',
    padding: `10px`,
    flexShrink: 0,
    background: `linear-gradient(rgb(116, 138, 255) 0%, rgb(64, 87, 211) 100%)`,
  },
});
export default function SideBar() {
  const classes = useStyles();
  return (
    <div className={classes.sideBar}>
      <SideCard assets={assets.systemTasks} />
      <SideCard assets={assets.otherPlaces} />
    </div>
  );
}
