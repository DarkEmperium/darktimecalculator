function doCalc(){
    const time1 = document.getElementById("time1").value;
    const time2 = document.getElementById("time2").value;
    const [hours1, minutes1] = time1.split(":");
    const [hours2, minutes2] = time2.split(":");
    const firstTime = new Date();
    firstTime.setHours(hours1, minutes1, 0, 0);
    const secTime = new Date();
    secTime.setHours(hours2, minutes2, 0, 0);
    const diffInMilliseconds = Math.abs(secTime - firstTime);
    const diffInMinutes = diffInMilliseconds / 60000;
    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;
    let outputString = "";
    if (hours > 0) {
      outputString += `${hours} hour`;
      if (hours > 1) {
        outputString += "s";
      }
    }
    if (minutes > 0) {
      if (hours > 0) {
        outputString += " ";
      }
      outputString += `${minutes} minute`;
      if (minutes > 1) {
        outputString += "s";
      }
    }
    document.getElementById("output").innerHTML = `Total Time Been Taken : ${outputString}`;
  }