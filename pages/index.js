import { Grid } from "@nextui-org/react";
import CardComponent from "../components/CardComponent";
import Nav from "../components/navbar";
import { gg } from "../db/information";

export default function Home() {
  return (
    <>
      <Nav />
      <Grid.Container gap={2} justify="center">
        {gg.map((el,index) => {
          return (
            <Grid key={index} xs={3}>
              <CardComponent text={el} />
            </Grid>
          );
        })}
      </Grid.Container>
    </>
  );
}
