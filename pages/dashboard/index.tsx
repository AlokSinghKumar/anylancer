import { Container, Grid, Paper } from "@mui/material";
import styles        from "@/styles/Dashboard.module.css";
import Layout from "@/components/layout";



function Dashboard () {
    return (
        <Layout>
            <Container maxWidth={false} className={styles.mainContainer}>
                <Grid 
                    container
                    xs             = {12}
                    justifyContent = {"space-between"}
                >
                    <Grid container spacing={ 4 } xs={ 12 } lg={ 8 } >
                        <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                            <Paper className={ styles.paper } elevation={ 6 } style={ { height: "171px", overflow:"hidden"  } }>
                            {/* Showing the balance info while taking care of exceptions  */ }
                            {/* <DisplayCounterCard type="poster" heading="Project Live" value={ projects_live } /> */}

                            </Paper>
                        </Grid>

                        <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                            <Paper className={ styles.paper } elevation={ 6 } style={ { height: "171px", overflow:"hidden"  } }>
                            {/* Showing the rating info while taking care of exceptions */ }
                            {/* <DisplayCounterCard type="poster" heading="Project Hiring" value={ projects_hiring } /> */}
                            </Paper>
                        </Grid>

                        <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                            <Paper className={ styles.paper } elevation={ 6 } style={ { height: "171px", overflow:"hidden"  } }>
                            {/* Showing the rating info while taking care of exceptions */ }
                            {/* <DisplayCounterCard type="seeker" heading="Applied" value={ applications_as_seeker } /> */}
                            </Paper>
                        </Grid>


                        <Grid item xs={ 12 }>
                            <Paper className={ styles.paper } elevation={ 6 }>
                            {/* Sending the projects posted data to child component */ }
                            {/* <ProjectsPostedTable
                                item= "3"
                                content={ contentPosted }
                                total_items={ 5 }
                                showMore={ true }
                            /> */}
                            </Paper>
                        </Grid>

                        <Grid item xs={ 12 } style={ { marginBottom: "25px" } }>
                            <Paper className={ styles.paper } elevation={ 6 } >
                            {/* Sending the projects sought data to child component */ }
                            {/* <ProjectsSoughtTable
                                item="3"
                                content={ contentSought }
                                total_items={ 5 }
                                showMore={ true }
                            /> */}
                            </Paper>
                        </Grid>
                        </Grid>

                </Grid>
            </Container>
        </Layout>
    )
}

export default Dashboard;