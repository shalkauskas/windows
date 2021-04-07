import { createUseStyles } from 'react-jss';

export default function DropDownMenuItem(props) {
  const useStyles = createUseStyles({
    dropdownLabel: {
      // padding: '0 20px 0 20px',
      display: 'grid',
      gridTemplateColumns: '15px auto 20px 55px',
      color: props.disabled && `rgba(140, 140, 140, 0.71)`,
      '&:hover': {
        backgroundColor: `rgb(22, 96, 232)`,
        color: !props.disabled && `rgb(255, 255, 255)`,
      },
      '& a': {
        color: 'inherit',
        textDecoration: 'none',
        userSelect: 'none',
      },
    },
  });
  const classes = useStyles(props);

  return (
    <div className={classes.dropdownLabel} onClick={props.onExit}>
      <span
        style={{
          textAlign: 'right',
          marginRight: '3px',
          fontSize: '19px',
        }}
      >
        {props.prepend}
      </span>
      <span> {props.children}</span>
      <span />
      <span>{props.helper}</span>
    </div>
  );
}
