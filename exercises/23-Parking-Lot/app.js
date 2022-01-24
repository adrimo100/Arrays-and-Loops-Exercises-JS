let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

let getParkingLotState = (parking) =>{

  let output = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  };

  for(let row of parking){

    for(let column of row){

      switch(column){

        case 1:
          output.occupiedSlots++;
          output.totalSlots++;
          break;
        
        case 2:
          output.availableSlots++;
          output.totalSlots++;
          break;
        
        default:
          break;
      }
    }
  }

  return output;
}

console.log(getParkingLotState(parking_state))