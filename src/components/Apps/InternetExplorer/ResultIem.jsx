import React from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  wrapperItem: {
    display: 'flex',
    fontFamily: 'Tahoma',
    fontSize: '16px',
    margin: '1.5rem',
    paddingBottom: '1rem',
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2rem',
    flexGrow: 1,
    justifyContent: 'flex-start',
    '& p': {
      textAlign: 'left',
      marginTop: '1rem',
      fontFamily: 'Arial',
    },
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    textDecoration: 'none',
    '& cite': {
      maxWidth: '400px',
      color: '#202124',
      fontStyle: 'normal',
      fontSize: '14px',
      whiteSpace: `nowrap`,
      overflow: `hidden`,
      textOverflow: `ellipsis`,
    },
    '& h3': {
      color: `#1a0dab`,
      fontSize: '20px',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
});
export default function Gif(props) {
  const classes = useStyles();
  const { gif } = props;
  return (
    <div className={classes.wrapperItem}>
      <img src={gif.images.fixed_width.url} alt="gif" />
      <div className={classes.description}>
        <a href={gif.source} className={classes.link}>
          <cite>{gif.source}</cite>
          <h3>
            {gif.title} - {gif.source_tld}
          </h3>
        </a>

        <p>The title pretty much summs it up: {gif.title}</p>
      </div>
    </div>
  );
}
