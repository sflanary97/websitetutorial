import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import PostPreview from './PostPreview';
import postdata from '../data/PostData';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  gridlist: {
    flexGrow: 1,
    postion: 'relative',
  },
}));


export default function PostList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridlist}>
        {postdata.map(post =>
          (
            <PostPreview img={post.img} title={post.title} date={post.date} info={post.info}>
            </PostPreview>
          )
        )
        }
      </GridList>
    </div>
  );
}
