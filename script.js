// Get the goal output element
const goalOutput = document.getElementById('goal-output');
const progressBar = document.getElementById('progress-bar');
const progressPercentage = document.getElementById('progress-percentage');

// Create premade goals using DOM manipulation
const goal1 = document.createElement('li');
const checkbox1 = document.createElement('input');
checkbox1.type = 'checkbox';
const goalText1 = document.createElement('span');
goalText1.innerHTML = '<strong>Goal:</strong> Exercise 30 minutes daily <br> <strong>Deadline:</strong> 2024-12-31';
goal1.appendChild(checkbox1);
goal1.appendChild(goalText1);
goalOutput.appendChild(goal1);

const goal2 = document.createElement('li');
const checkbox2 = document.createElement('input');
checkbox2.type = 'checkbox';
const goalText2 = document.createElement('span');
goalText2.innerHTML = '<strong>Goal:</strong> Read 2 books per month <br> <strong>Deadline:</strong> 2024-11-30';
goal2.appendChild(checkbox2);
goal2.appendChild(goalText2);
goalOutput.appendChild(goal2);

const goal3 = document.createElement('li');
const checkbox3 = document.createElement('input');
checkbox3.type = 'checkbox';
const goalText3 = document.createElement('span');
goalText3.innerHTML = '<strong>Goal:</strong> Learn JavaScript fundamentals <br> <strong>Deadline:</strong> 2024-10-15';
goal3.appendChild(checkbox3);
goal3.appendChild(goalText3);
goalOutput.appendChild(goal3);

const goal4 = document.createElement('li');
const checkbox4 = document.createElement('input');
checkbox4.type = 'checkbox';
const goalText4 = document.createElement('span');
goalText4.innerHTML = '<strong>Goal:</strong> Save $1000 for emergency fund <br> <strong>Deadline:</strong> 2024-12-01';
goal4.appendChild(checkbox4);
goal4.appendChild(goalText4);
goalOutput.appendChild(goal4);

// Add event listeners to checkboxes for progress tracking
checkbox1.addEventListener('change', updateProgress);
checkbox2.addEventListener('change', updateProgress);
checkbox3.addEventListener('change', updateProgress);
checkbox4.addEventListener('change', updateProgress);

// Add event listeners for crossing off completed goals
checkbox1.addEventListener('change', function() {
  if (this.checked) {
    goalText1.classList.add('crossed-off');
  } else {
    goalText1.classList.remove('crossed-off');
  }
});

checkbox2.addEventListener('change', function() {
  if (this.checked) {
    goalText2.classList.add('crossed-off');
  } else {
    goalText2.classList.remove('crossed-off');
  }
});

checkbox3.addEventListener('change', function() {
  if (this.checked) {
    goalText3.classList.add('crossed-off');
  } else {
    goalText3.classList.remove('crossed-off');
  }
});

checkbox4.addEventListener('change', function() {
  if (this.checked) {
    goalText4.classList.add('crossed-off');
  } else {
    goalText4.classList.remove('crossed-off');
  }
});
