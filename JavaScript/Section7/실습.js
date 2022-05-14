const travel = {
    destinations: ["paris", "sydney", "taipei"],
    days: 100,
    mate: undefined,
    isAvailable: true,
};
const list=["hi","hello"];
localStorage.setItem("storage1",JSON.stringify("저장소"));
localStorage.setItem("storage2", JSON.stringify(list));
localStorage.setItem("storage3", JSON.stringify(travel));
const data1=JSON.parse(localStorage.getItem("storage1"));
const data2=JSON.parse(localStorage.getItem("storage2"));
const data3=JSON.parse(localStorage.getItem("storage3"));



// localStorage.setItem("storage1", "저장소");
// localStorage.setItem("storage2", list);
// localStorage.setItem("storage3", travel);
// const data1=localStorage.getItem("storage1");
// const data2=localStorage.getItem("storage2");
// const data3=localStorage.getItem("storage3");

console.log(data1, typeof data1);
console.log(data2, typeof data2);
console.log(data3, typeof data3);

