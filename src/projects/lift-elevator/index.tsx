// App.js
import React, { useEffect, useState } from "react";
import "./style.scss";
import Floor from "./components/Floor";
import Elevator from "./components/Elevator";

const LiftElevator = () => {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [stack, setStack] = useState<number[]>([])
  const floors = [5, 4, 3, 2, 1];

  const callElevator = (floor: number) => {
    stack.push(floor)
    setStack(stack)
    setCurrentFloor(floor)
  };

  return (
    <div className="relative w-[200px] h-[500px] border border-black">
      {floors.map((floor) => (
        <Floor key={floor} floorNumber={floor} callElevator={callElevator} />
      ))}
      <Elevator
        currentFloor={currentFloor}
        floors={floors}
        callElevator={callElevator}
      />
    </div>
  );
};

export default LiftElevator;

// import React, { useState } from "react";
// import "./style.scss";
// import { Button, Input } from "common/Components";

// const LiftElevator = () => {
//   const [noOfFloors, setNoOfFloors] = useState<number>(5);
//   const [activeFloor, setActiveFloor] = useState<number>(1);
//   const handleFloorClick = (floor: number) => {
//     setActiveFloor(floor);
//   };
//   return (
//     <div className="lift-elevator-wrapper">
//       <div className="font-bold text-center m-2 text-2xl"> Lift Elevator</div>

//       <div>
//         <label className="font-semibold">
//           No of floors :
//           <Input
//             type="number"
//             min={5}
//             max={15}
//             value={noOfFloors}
//             onChange={(e) => setNoOfFloors(Number(e.target.value))}
//           />
//         </label>
//       </div>
//       <div className="flex gap-2 m-4">
//         {[...Array(noOfFloors)].map((_, i) => {
//             const floorNum = i+1
//           return (
//             <div
//               key={i}
//               className={`border-green-700 ${
//                 floorNum !== noOfFloors ? "w-[100px] border-t-4 pt-2" : "pt-3"
//               }`}
//             >
//               <Button
//                 className={`p-2 text-gray-300  rounded-50 ${
//                   activeFloor === floorNum ? "bg-green-500" : "bg-black"
//                 } `}
//                 onClick={() => handleFloorClick(floorNum)}
//                 title={`${floorNum}`}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default LiftElevator;
