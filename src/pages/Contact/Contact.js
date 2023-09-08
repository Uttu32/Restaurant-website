import React,{useEffect, useState} from "react";
import Layout from "../../components/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Styles from "./Contact.module.css";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

export default function Contact() {
  return (
    <Layout>
      <Box
        sx={{
          my: 10,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
            "@media (max-width:600px)": {
              my: 5,
              ml: -10,
              fontSize: "25px",
            },
          },
        }}
      >
        <Typography variant="h4" align='center'>Contact to my Restaurant</Typography>
        <p style={{ marginLeft:"-35px",marginRight:"20px" }}>
          We are available 24*7. Holiday and festive season discounts.
          Special arrangement for Birthday patry, Marriage Reception,Teacher's
          day celebration and many more. A special decoration will be done by
          our team. Book our restuarant and make your parties memorable.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
            my: 5,
            ml: 5,
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{ display: "flex", alignItem: "center", gap: "0.5rem" }}
                >
                  <SupportAgentIcon
                    sx={{ color: "red", pt: 1, fontSize: "30px" }}
                  />
                  <p className={Styles.Text_Support}>
                    1800-7000-123 (tollfree)
                  </p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ display: "flex", alignItem: "center", gap: "0.5rem" }}
                >
                  <MailIcon
                    sx={{ color: "skyblue", pt: 1, fontSize: "30px" }}
                  />
                  <p>MyRestaurant@helpcenter.com </p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ display: "flex", alignItem: "center", gap: "0.5rem" }}
                >
                  <CallIcon sx={{ color: "green", pt: 1, fontSize: "30px" }} />
                  <p> 9352496597</p>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}
