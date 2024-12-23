const snowContainer = document.querySelector('.snow');

// Create snowflakes
function createSnowflakes() {
  for (let i = 0; i < 100; i++) {
    const snowflake = document.createElement('span');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.animationDelay = Math.random() * 5 + 's';
    snowflake.style.width = snowflake.style.height = Math.random() * 8 + 2 + 'px';
    snowContainer.appendChild(snowflake);
  }
}

// Start the animation
createSnowflakes();
