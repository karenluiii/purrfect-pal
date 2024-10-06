import React from "react";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="paula_hansen@att.net"
        message="Feel free to contact me to adopt Sandy :D"
        timestamp="20 seconds ago"
        profilePic="https://static.vecteezy.com/system/resources/previews/022/664/807/non_2x/cat-face-silhouettes-cat-face-svg-black-and-white-cat-vector.jpg"
      />
      <Chat
        name="sungvillage@gmail.com"
        message="I'm so glad you've shown interest in Autumn!"
        timestamp="20 seconds ago"
        profilePic="https://thumbs.dreamstime.com/b/cute-cat-face-outline-icon-vector-illustration-148856151.jpg"
      />
      <Chat
        name="adopt@kittentalesrescue.org"
        message="Are you interested in adopting this pet?"
        timestamp="6 hours ago"
        profilePic="https://k40lasercutter.com/wp-content/uploads/2024/06/Free-Peeking-Cat-SVG-Black-and-White-SVG-Vector-File-for-Laser-Cutting-2.jpg"
      />
      <Chat
        name="calicatsanimalrescue@gmail.com"
        message="Hi, would you like to adopt Twix?"
        timestamp="2 days ago"
        profilePic="https://png.pngtree.com/element_our/20200703/ourmid/pngtree-hand-painted-black-cat-back-image_2299457.jpg"
      />
    </div>
  );
}

export default Chats;
