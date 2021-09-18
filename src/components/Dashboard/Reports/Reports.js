import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Header from './../Header';
import BarChartIcon from '@material-ui/icons/BarChart';
import PageHeader from '../../PageHeader';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import ActiveExpireChart from './ActiveExpireChart';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Reports() {
  const classes = useStyles();
  console.log("blaa")
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>            
              <PageHeader
                title="Grovi Usage Reports "
                subTitle="Grovi Official"
                icon={<BarChartIcon  fontSize="large" />}
              />
            </Grid>
            <Grid itemxs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <ActiveExpireChart/>
              </Paper>
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <ActiveExpireChart/>
            </Grid>
        </Grid>
        </Container>
      </main>
    </div>
  );
}