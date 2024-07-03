export interface ElevatorProps {
  currentFloor: number;
  floors: number[];
  callElevator: (floor: number) => void;
}
export interface ControlPanelProps {
  floors: number[];
  callElevator: (floor: number) => void;
}
export interface FloorProps {
  floorNumber: number;
  callElevator: (floor: number) => void;
  isCurrentFloor: boolean;
}
