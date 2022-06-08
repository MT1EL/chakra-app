import "./App.css";

import { Box } from "@chakra-ui/react";

import {
  WithSubnavigation,
  About,
  Speakers,
  MeetUps,
  Agenda,
  Tickets,
  Sponsors,
  Contact,
} from "./imports";

function App() {
  return (
    <Box fontFamily="PixelSplitter" overflow="hidden">
      <WithSubnavigation />
      <About />
      <Speakers />
      <MeetUps />
      <Agenda />
      <Tickets />
      <Sponsors />
      <Contact />
    </Box>
  );
}

export default App;
