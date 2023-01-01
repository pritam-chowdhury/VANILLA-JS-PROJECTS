import "./styles.css";
(function () {
  let minutes_box = document.querySelector(".minutes_box");
  let hour_box = document.querySelector(".hour_box");
  let sec_box = document.querySelector(".sec_box");
  let start_btn = document.querySelector(".start_btn");
  let stop_btn = document.querySelector(".stop_btn");
  let reset_btn = document.querySelector(".reset_btn");

  let countDowntimer = null;

  function startInterVal() {
    countDowntimer = setInterval(() => {
      setTimes();
    }, 1000);
  }

  function setTimes() {
    if (sec_box.value > 60) {
      minutes_box.value++;
      sec_box.value = parseInt(sec_box.value) - 59;
    }
    if (minutes_box.value > 60) {
      hour_box.value++;
      minutes_box.value = parseInt(minutes_box.value) - 59;
    }
    if (hour_box.value == 0 && minutes_box.value == 0 && sec_box.value == 0) {
      stopInterval();
      return;
    } else if (sec_box.value != 0) {
      sec_box.value = sec_box.value - 1;
    } else if (minutes_box.value != 0 && sec_box.value == 0) {
      sec_box.value = 59;
      minutes_box.value = minutes_box.value - 1;
    } else if (hour_box.value != 0 && minutes_box.value == 0) {
      minutes_box.value = 59;
      hour_box.value = hour_box.value - 1;
    }
  }

  function stopInterval() {
    clearInterval(countDowntimer);
    stop_btn.style.display = "none";
    start_btn.style.display = "initial";
    hour_box.value = null;
    minutes_box.value = null;
    sec_box.value = null;
  }
  start_btn.addEventListener("click", (e) => {
    stop_btn.style.display = "initial";
    start_btn.style.display = "none";
    startInterVal();
  });
  stop_btn.addEventListener("click", (e) => {
    stopInterval();
  });
})();
