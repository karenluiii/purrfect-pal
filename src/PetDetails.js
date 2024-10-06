import React from "react";
import { useParams } from "react-router-dom";
import TinderCard from "react-tinder-card";
import "./PetDetails.css";

function PetDetails() {
  const params = useParams();
  let petData = null;

  // Simulate database lookup using id
  if (params.id === "Sandy") {
    petData = {
      name: "Sandy",
      breed: "Tabby",
      gender: "Male",
      characteristics:
        "Affectionate, Athletic, Playful, Curious, Friendly, Brave",
      coatLen: "Short",
      contact: "paula_hansen@att.net | (925) 324-0113",
      url: "https://dbw3zep4prcju.cloudfront.net/animal/bb384094-ee12-4d45-976d-1bb0e21fc1df/image/22f5687a-ebc2-4024-885c-786418885689.jpg?versionId=Pzo1JhNPLeYfTpXyKjHjORPsbiJ7QlWY&bust=1719866485&width=720",
    };
  } else if (params.id === "Autumn") {
    petData = {
      name: "Autumn",
      breed: "Calico Mix",
      gender: "Female",
      characteristics: "Friendly, Loves Kisses, Affectionate",
      coatLen: "Short",
      contact: "sungvillage@gmail.com | (559) 827-9258",
      url: "https://dbw3zep4prcju.cloudfront.net/animal/93f90d58-d275-40f5-93d1-4e3b75e07e1e/image/4fd7e954-a8ff-4e89-86d2-fa683d0f1e03.jpeg?versionId=I5lchfbW5IxA8R484SLMfM1C8z8Yv0o0&bust=1714774749&width=720",
    };
  } else if (params.id === "Dolly") {
    petData = {
      name: "Dolly",
      breed: "American Shorthair",
      gender: "Female",
      characteristics:
        "Affectionate, Gentle, Loyal, Playful, Curious, Friendly",
      coatLen: "Short",
      contact: "adopt@kittentalesrescue.org | (209) 617-2306",
      url: "https://dbw3zep4prcju.cloudfront.net/animal/d4e0ba52-bf58-49f0-a3b9-cd8804e5cc3a/image/57727c64-443a-4c40-9f7a-2dbbda8360e3.jpeg?versionId=LoPM7MMsGdOdwiU5zqdMTWOq9qsk_y5X&bust=1724791993&width=720",
    };
  } else if (params.id === "Twix") {
    petData = {
      name: "Twix",
      breed: "Maine Coon",
      gender: "Male",
      characteristics:
        "Affectionate, Athletic, Brave, Curious, Friendly, Funny, Loves, Loyal, Playful, Smart",
      coatLen: "Medium",
      contact: "calicatsanimalrescue@gmail.com",
      url: "https://dbw3zep4prcju.cloudfront.net/animal/3a930208-587d-46c4-9c3c-db914ce670de/image/25f56d1d-b8b3-4b36-a1c5-b91fecfe1b05.jpeg?versionId=fuj0RyWfYVvn2pL3fvL7iLjEbvXWa4MK&bust=1726014758&width=720",
    };
  }

  return (
    <div>
      <h1 className="title">Pet Details</h1>
      <div className="tinderCards__cardContainer">
        <TinderCard key={petData.name} className="swipe">
          <div
            style={{ backgroundImage: `url(${petData.url})` }}
            className="card"
          ></div>
          <div className="petName">
            <h3>{petData.name}</h3>
          </div>

          <div className="info__section">
            <h2>About</h2>
            <p>
              <b>Breed:</b> {petData.breed}
            </p>
            <p>
              <b>Gender:</b> {petData.gender}
            </p>
            <p>
              <b>Characteristics:</b> {petData.characteristics}
            </p>
            <p>
              <b>Coat Length:</b> {petData.coatLen}
            </p>
            <p>
              <b>Contact:</b> {petData.contact}
            </p>
          </div>
        </TinderCard>
      </div>
    </div>
  );
}

export default PetDetails;
