import React from "react";
import wink from "../images/wink.png";
import { Card, CardContent, Typography } from "@mui/material";
import Header from "../components/Header";
import "../css/Contact.css";

export default function Contact() {
  return (
    <div>
      <Header></Header>
      <div className="contacts">
        <img className="contact-icon" src={wink} alt="Avatar with Smile"></img>
        <Card sx={{ minWidth: 500, backgroundColor: "#007757" }}>
          <CardContent>
            <Typography variant="h5" color="white" sx={{ fontWeight: "bold" }}>
              Let's Talk!
            </Typography>
            <Typography>Let's connect on LinkedIn!</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
