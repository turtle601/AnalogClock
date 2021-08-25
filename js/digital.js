const digitalClock = document.getElementById("now");
const leftButton = document.getElementById("left");

clock = () => {
    const weekList = ["일", "월", "화", "수", "목", "금", "토"];

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const week = date.getDay();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    let second = date.getSeconds();

    second = second < 10 ? "0" + second : second;

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