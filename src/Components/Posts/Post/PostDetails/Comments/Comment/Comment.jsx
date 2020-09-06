import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    margin: "0 auto",
    marginBottom: "20px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Comment = (props) => {
  const { name } = props.comment;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comment;
