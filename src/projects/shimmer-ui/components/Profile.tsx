import React from "react";
import Circle from "./Circle";
import Rectangular from "./Rectangular";

export const Card = ({ i }: { i: number }) => {
  return (
    <div className="w-[450px] border-2 rounded border-gray-400 m-1 p-1">
      <div className="flex items-center ml-2">
        <Circle width="50px" height="50px" />
        <div>
          <Rectangular width="200px" height="20px" />
          <Rectangular width="150px" height="15px" />
          <Rectangular width="50px" height="10px" />
        </div>
      </div>
      <Rectangular width="360px" height="10px" />
      <Rectangular width="300px" height="10px" />
      <Rectangular width="350px" height="10px" />
      <Rectangular width="250px" height="10px" />
      {i !== 0 && <Rectangular width="400px" height="200px" />}
      <div className="flex items-center gap-1 justify-between">
        <div className="flex items-center">
          <Circle width="20px" height="20px" />
          <Circle width="20px" height="20px" />
          <Circle width="20px" height="20px" />
          <Rectangular width="80px" height="20px" />
        </div>
        <Rectangular width="130px" height="20px" />
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="flex m-1">
      <div>
        <Circle width="130px" height="130px" />
        <Rectangular width="200px" height="30px" />
        <Rectangular width="300px" height="30px" />
        <div className="flex items-center">
          <Circle width="40px" height="40px" />
          <Rectangular width="300px" height="30px" />
        </div>
        <Rectangular width="200px" height="40px" />
      </div>
      <div>
        {[...Array(4)].map((_, i) => (
          <Card i={i} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
