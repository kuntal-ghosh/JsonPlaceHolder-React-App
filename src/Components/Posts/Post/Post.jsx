import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
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

function Post(props) {
  const { id, title, body } = props.post;
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
          {/* Word of the Day */}
        </Typography>
        <Typography variant="h5" component="h2">
          {/* be{bull}nev{bull}o{bull}lent */}
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {/* adjective */}
        </Typography>
        <Typography variant="body2" component="p">
          {/* well meaning and kindly. */}
          {body}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={`/posts/${id}`}
          style={{ outline: "none", textDecoration: "none" }}
        >
          {props.showDetailButton && <Button size="small">Details</Button>}
        </Link>
      </CardActions>
    </Card>
  );
}

export default Post;
