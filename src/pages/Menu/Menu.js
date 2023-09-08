import React from "react";
import Layout from "../../components/Layout/Layout";
import { Menu_List } from "../../data/data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Styles from "./Menu.module.css";

export default function Menu() {
  return (
    <Layout>
      <Box
        sx={{
          mt: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Menu_List.map((menu) => {
          return (
            <Card sx={{ maxWidth: "390px", m: 2 }}>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"} >
                  {menu.name}
                </Typography>
                <Typography variant="body2" sx={{ height:'120px', p:1}}>{menu.description}</Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "goldenrod", p: 1, fontWeight: "bolder", }}
                  align='center'
                >
                  {menu.price}/-
                </Typography>
                <CardActionArea>
                  <button className={Styles.btn}>Order Now</button>
                </CardActionArea>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Layout>
  );
}
