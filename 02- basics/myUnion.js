var score = 33;
score = 44;
score = "55";
var tesla = { name: 'tesla', id: 444 };
tesla = { username: "ng", id: 334 };
// function getDbId(id: number | string){
//     // making some API calls
//     console.log(`DB id is ${id}`)
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else if (typeof id === "number") {
        id = id + 5;
    }
}
// array 
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true];
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "crew";
