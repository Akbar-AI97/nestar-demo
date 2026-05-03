import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

// BROWSER COMPONENT
const PropertyList: NextPage = () => {
  console.log("PROPERTY LIST COMPONENT - PAGES ROUTER"); // logs in browser's console
  return (
    <>
      <Container>PROPERTY LIST</Container>
    </>
  );
};

export default withLayoutBasic(PropertyList);
