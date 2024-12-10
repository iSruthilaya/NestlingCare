
// Due date calculator

function calculate() {
    const lastPeriodDateInput = document.getElementById("lastPeriodDate").value;
    const cycleLengthInput = document.getElementById("cycleLength").value;
  
    if (!lastPeriodDateInput || !cycleLengthInput) {
        alert("Please fill in all fields.");
        return;
    }
  
     
    if (isNaN(cycleLengthInput) || cycleLengthInput < 20 || cycleLengthInput > 60) {
        alert("Cycle length refers to the total number of days between the start of one menstrual period and the start of the next. Please enter a value between 20 and 60 days.");
        return;
    }
  
    const lastPeriodDate = new Date(lastPeriodDateInput);
    const cycleLength = parseInt(cycleLengthInput);
    const today = new Date();
  
    if (lastPeriodDate > today) {
        alert("Last period date cannot be in the future.");
        return;
    }
  
    const cycleAdjustment = (cycleLength - 28) * 86400000; 
    const adjustedLastPeriodDate = new Date(lastPeriodDate.getTime() + cycleAdjustment);
  
    const dueDate = new Date(adjustedLastPeriodDate.getTime() + 280 * 86400000);
  
    const timeSinceLastPeriod = today.getTime() - adjustedLastPeriodDate.getTime();
    const weeksPregnant = Math.floor(timeSinceLastPeriod / (7 * 86400000));
    const daysPregnant = Math.floor(timeSinceLastPeriod / 86400000) % 7;
  
    const result = `Your due date is <strong>${dueDate.toDateString()}</strong>.<br>
    You are <strong>${weeksPregnant} weeks</strong> and <strong>${daysPregnant} days</strong> pregnant.`;
  
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = result;
    resultElement.style.display = "block";
  }
  
// responsive menu
const menu = document.querySelector('.menu');
        const menuList = document.querySelector('nav ul');
        menu.addEventListener('click', () => {
            menuList.classList.toggle('showmenu');
        });



