import classes from "./Home.module.scss";

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.Container}>
        <div class={classes.TextTitle}>Hello, I'm</div>
        <div class={classes.TextName}>Maryam Payenda</div>

        <div class={classes.TextField}>
          Junior fullstack
          <span> Web developer</span>
        </div>
        <div className={classes.Crow}>|</div>
      </div>
    </div>
  );
};

export default Home;
