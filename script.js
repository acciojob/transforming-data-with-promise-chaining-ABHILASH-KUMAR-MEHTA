//your JS code here. If required.
document.getElementById('btn').addEventListener('click', () => {
  const inputValue = document.getElementById('ip').value;
  const output = document.getElementById('output');
  
  output.innerText = '';

  const number = parseFloat(inputValue);

  if (isNaN(number)) {
    output.innerText = 'Please enter a valid number';
    return;
  }

  // First Promise - Display initial number after 2s
  new Promise((resolve) => {
    setTimeout(() => {
      output.innerText = `Result: ${number}`;
      resolve(number);
    }, 2000);
  })
  .then((res1) => {
    return new Promise((resolve) => {
      const result = res1 * 2;
      setTimeout(() => {
        output.innerText = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })
  .then((res2) => {
    return new Promise((resolve) => {
      const result = res2 - 3;
      setTimeout(() => {
        output.innerText = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })
  .then((res3) => {
    return new Promise((resolve) => {
      const result = res3 / 2;
      setTimeout(() => {
        output.innerText = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })
  .then((res4) => {
    return new Promise((resolve) => {
      const result = res4 + 10;
      setTimeout(() => {
        output.innerText = `Final Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  });
});
