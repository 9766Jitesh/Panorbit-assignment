import React, { useEffect, useState } from "react";
import { BsChatRight } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useContext } from "react";
import { AppContest} from "../contextApi/contextApi";
import "./chat.css"


const Chat = () => {
  const { data, loading, error, getAllData } = useContext(AppContest); // getting data from contest api
  const [hide, setHide] = useState(false);

  useEffect(() => {
    getAllData();
  }, []);

  // -------- loading ---------
  if (loading) {
    return <h3 style={{ color: "teal" }}>Loading....</h3>;
  }

  // --------- error ---------
  if (error) {
    return <h3 style={{ color: "red" }}>server error....</h3>;
  }
  return (
    <div
      className="chat-container"
      style={{ marginTop: hide ? "-270px" : "20px" }}
    >
      <div onClick={() => setHide(!hide)} className="chat">
        <div>
          <BsChatRight />
          <p>Chat</p>
        </div>
        {hide ? <FiChevronDown /> : <FiChevronUp />}
      </div>
      {hide ? (
        <div className="users-list">
          {/* --------- Data maping ------ */}
          {data &&
            data.map((el) => (
              <div key={el.id}>
                <div className="profile">
                  <img src={el.profilepicture} alt="profile image" />
                  <p>{el.name}</p>
                </div>
                <hr />
              </div>
            ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chat;
