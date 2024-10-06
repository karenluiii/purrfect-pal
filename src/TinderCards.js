import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReplayIcon from "@mui/icons-material/Replay";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const db = [
  {
    name: "Twix",
    breed: "Maine Coon",
    gender: "Male",
    characteristics:
      "Affectionate, Athletic, Brave, Curious, Friendly, Funny, Loves, Loyal, Playful, Smart",
    coatLen: "Medium",
    contact: "calicatsanimalrescue@gmail.com",
    url: "https://dbw3zep4prcju.cloudfront.net/animal/3a930208-587d-46c4-9c3c-db914ce670de/image/25f56d1d-b8b3-4b36-a1c5-b91fecfe1b05.jpeg?versionId=fuj0RyWfYVvn2pL3fvL7iLjEbvXWa4MK&bust=1726014758&width=720",
  },
  {
    name: "Dolly",
    breed: "American Shorthair",
    gender: "Female",
    characteristics: "Affectionate, Gentle, Loyal, Playful, Curious, Friendly",
    coatLen: "Short",
    contact: "adopt@kittentalesrescue.org | (209) 617-2306",
    url: "https://dbw3zep4prcju.cloudfront.net/animal/d4e0ba52-bf58-49f0-a3b9-cd8804e5cc3a/image/57727c64-443a-4c40-9f7a-2dbbda8360e3.jpeg?versionId=LoPM7MMsGdOdwiU5zqdMTWOq9qsk_y5X&bust=1724791993&width=720",
  },
  {
    name: "Autumn",
    breed: "Calico Mix",
    gender: "Female",
    characteristics: "Friendly, Loves Kisses, Affectionate",
    coatLen: "Short",
    contact: "sungvillage@gmail.com | (559) 827-9258",
    url: "https://dbw3zep4prcju.cloudfront.net/animal/93f90d58-d275-40f5-93d1-4e3b75e07e1e/image/4fd7e954-a8ff-4e89-86d2-fa683d0f1e03.jpeg?versionId=I5lchfbW5IxA8R484SLMfM1C8z8Yv0o0&bust=1714774749&width=720",
  },
  {
    name: "Sandy",
    breed: "Tabby",
    gender: "Male",
    characteristics:
      "Affectionate, Athletic, Playful, Curious, Friendly, Brave",
    coatLen: "Short",
    contact: "paula_hansen@att.net | (925) 324-0113",
    url: "https://dbw3zep4prcju.cloudfront.net/animal/bb384094-ee12-4d45-976d-1bb0e21fc1df/image/22f5687a-ebc2-4024-885c-786418885689.jpg?versionId=Pzo1JhNPLeYfTpXyKjHjORPsbiJ7QlWY&bust=1719866485&width=720",
  },
];

function TinderCards() {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // Used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);
  const [swipedRightCards, setSwipedRightCards] = useState([]);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  // Set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    // Store favorited cards in a list to access later
    if (direction == "right" && !swipedRightCards.includes(db[currentIndex])) {
      // Add the current card to the swipedRightCards list
      setSwipedRightCards((prev) => [db[currentIndex], ...prev]);
    }
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);

    // Handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card
    }
  };

  // Increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;

    if (newIndex >= childRefs.length || !childRefs[newIndex]?.current) {
      console.log("Invalid newIndex or missing reference");
      return;
    }
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div>
      <div className="left__panel">
        <div className="matches__text">
          <h3>Favorites</h3>
        </div>
        <div className="thumbnail">
          {swipedRightCards.length > 0 ? (
            swipedRightCards.map((pet) => (
              <div className="thumbnailPhoto">
                <p>{pet.name}</p>
                <img src={pet.url} />
                <div className="profile__link">
                  <Link to={`pet/${pet.name}`}>Go to profile</Link>
                </div>
              </div>
            ))
          ) : (
            <p>No favorites</p>
          )}
        </div>
      </div>

      <div className="tinderCards__cardContainer">
        {db.map((pet, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={pet.name}
            onSwipe={(dir) => swiped(dir, pet.name, index)}
            onCardLeftScreen={() => outOfFrame(pet.name, index)}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${pet.url})` }}
              className="card"
            ></div>
            <div className="petName">
              <h3>{pet.name}</h3>
            </div>

            <div className="info__section">
              <h2>About</h2>
              <p>
                <b>Breed:</b> {pet.breed}
              </p>
              <p>
                <b>Gender:</b> {pet.gender}
              </p>
              <p>
                <b>Characteristics:</b> {pet.characteristics}
              </p>
              <p>
                <b>Coat Length:</b> {pet.coatLen}
              </p>
              <p>
                <b>Contact:</b> {pet.contact}
              </p>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <IconButton onClick={() => swipe("left")}>
          <ArrowBackIcon
            fontSize="large"
            className="swipeLeft__button"
            style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          />
        </IconButton>
        <IconButton onClick={() => goBack()}>
          <ReplayIcon
            fontSize="large"
            className="undoSwipe__button"
            style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
          />
        </IconButton>
        <IconButton onClick={() => swipe("right")}>
          <ArrowForwardIcon
            fontSize="large"
            className="swipeRight__button"
            style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          />
        </IconButton>
      </div>
      <div className="textBelow__buttons">
        {lastDirection ? (
          <h2 key={lastDirection} className="infoText">
            You swiped {lastDirection}
          </h2>
        ) : (
          <div className="infoText">
            <div className="infoText__left">
              <ArrowBackIcon fontSize="small" className="swipeLeft__button" />
              <h3>Left arrow: skip</h3>
            </div>
            <div className="infoText__right">
              <ArrowForwardIcon
                fontSize="small"
                className="swipeRight__button"
              />
              <h3>Right arrow: save to favorites</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TinderCards;
