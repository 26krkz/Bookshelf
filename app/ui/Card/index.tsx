"use client";
import * as React from "react";
import { Card as MuiCard } from "@mui/material/";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import type { Card } from "@/app/types";

export default function Card(props: Card) {
  const { title, author, onClick } = props;
  return (
    <MuiCard>
      <CardActionArea onClick={onClick}>
        <div>
          <p>{title}</p>
          <p>{author}</p>
        </div>
        <CardMedia component="img" height="300" image="./dummy-image.jpeg" alt="本の画像" />
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </MuiCard>
  );
}
