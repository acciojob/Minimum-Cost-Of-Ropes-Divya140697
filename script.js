function calculateMinimumCost(ropes) {
  let totalCost = 0;

  while (ropes.length > 1) {
    ropes.sort((a, b) => a - b);

    const rope1 = ropes.shift();
    const rope2 = ropes.shift();
    const newRope = rope1 + rope2;

    totalCost += newRope;
    ropes.push(newRope);
  }

  return totalCost;
}

function handleSubmit(event) {
  event.preventDefault();

  const input = document.getElementById('inputRopes').value;
  const ropes = input.split(',').map(Number);

  const minimumCost = calculateMinimumCost(ropes);

  const resultElement = document.getElementById('result');
  resultElement.textContent = minimumCost;
}

const form = document.getElementById('ropeForm');
form.addEventListener('submit', handleSubmit);
