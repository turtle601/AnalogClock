const digitalClock = document.getElementById("now");
const leftButton = document.getElementById("left");

makeTwoNumber = (time) => {
    time = time < 10 ? "0" + time : time;
    return time;
}

clock = () => {
    const weekList = ["일", "월", "화", "수", "목", "금", "토"];

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const week = date.getDay();
    const day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    second = makeTwoNumber(second);
    minute = makeTwoNumber(minute);
    hour = makeTwoNumber(hour);

    digitalClock.innerText = `${year}년 ${month + 1}월 ${day}일 ${weekList[week]} 요일 ${hour} : ${minute} : ${second}`;

}

leftClick = () => {
    location.href = "/";
}

init = () => {
    clock();
    setInterval(clock,1000); // 1초마다 clock 함수 반복 실행
}

leftButton.addEventListener("click", leftClick);

init();