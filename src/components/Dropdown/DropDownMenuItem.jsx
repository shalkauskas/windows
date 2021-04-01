import { createUseStyles } from 'react-jss';

export default function DropDownMenuItem(props) {
  const useStyles = createUseStyles({
    dropdownLabel: {
      padding: '0 30px 0 20px',
      dsiplay: 'flex',
      color: props.disabled && `rgba(140, 140, 140, 0.71)`,
      '&:hover': {
        backgroundColor: `rgb(22, 96, 232)`,
        color: !props.disabled && `rgb(255, 255, 255)`,
      },
    },
  });
  const classes = useStyles(props);

  return (
    <div className={classes.dropdownLabel}>
      {props.children}
      {props.helper}
    </div>
  );
}
