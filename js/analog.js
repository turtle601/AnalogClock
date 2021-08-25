const secHand = document.getElementById("secHand");
const minHand = document.getElementById("minHand");
const hourHand = document.getElementById("hourHand");

const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

const makeAngleValue = (angle) => `rotate(${angle}deg)`; 

function clockRun(){
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour = date.getHours();

    const sec_angle_value = makeAngleValue(sec * 6); // 1초에 6도
    const min_angle_value = makeAngleValue(min * 6); // 1분에 6도
    const hour_angle_value = makeAngleValue((hour + min / 60) * 30 ); // 시간 + 분침의 위치에 따라 살짝 이동

    secHand.style.transform = sec_angle_value;
    minHand.style.transform = min_angle_value;
    hourHand.style.transform = hour_angle_value;
}

execute = () => {
    clockRun();
    setInterval(clockRun, 1000);
};

rightClick = () => {
    location.href = "/digital";
}

rightButton.addEventListener("click", rightClick);

execute();
