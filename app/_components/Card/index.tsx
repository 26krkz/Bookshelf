"use client";
import * as React from "react";
import { Card as MuiCard } from "@mui/material/";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import type { Card } from "@/app/types";

export default function Card({ card }: { card: Card }) {
  const { title, author } = card;
  return (
    <MuiCard>
      <div>
        <p>{title}</p>
        <p>{author}</p>
      </div>
      <CardMedia component="img" height="300" image="./dummy-image.jpeg" alt="本の画像" />
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions> */}
      {/* buttonの中にbuttonがある。useModalの中身を変更する */}
    </MuiCard>
  );
}
