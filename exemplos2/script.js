document.addEventListener('DOMContentLoaded', () => {
    const gameArea = document.querySelector('.game-area');
    const snake = document.getElementById('snake');
    const food = document.getElementById('food');
    const scoreDisplay = document.getElementById('score');

    let snakeX = 150;
    let snakeY = 150;
    let foodX, foodY;
    let dx = 10;
    let dy = 0;
    let score = 0;
    let snakeBody = [[150, 150]];

    function updateSnake() {
        snake.style.left = snakeX + 'px';
        snake.style.top = snakeY + 'px';

        for (let i = 1; i < snakeBody.length; i++) {
            const segment = document.createElement('div');
            segment.className = 'snake-body';
            segment.style.left = snakeBody[i][0] + 'px';
            segment.style.top = snakeBody[i][1] + 'px';
            gameArea.appendChild(segment);
        }
    }

    function randomPosition() {
        foodX = Math.floor(Math.random() * 30) * 10;
        foodY = Math.floor(Math.random() * 30) * 10;
        food.style.left = foodX + 'px';
        food.style.top = foodY + 'px';
    }

    function moveSnake() {
        snakeX += dx;
        snakeY += dy;

        if (snakeX < 0 || snakeX >= 300 || snakeY < 0 || snakeY >= 300 || collision()) {
            gameOver();
            return;
        }

        if (snakeX === foodX && snakeY === foodY) {
            score++;
            scoreDisplay.innerText = score;
            snakeBody.unshift([snakeX, snakeY]); // Adiciona nova parte à frente da cobra
            randomPosition();
        } else {
            snakeBody.pop(); // Remove a última parte da cobra
            snakeBody.unshift([snakeX, snakeY]); // Adiciona nova parte à frente da cobra
        }

        updateSnake();
    }

    function collision() {
        for (let i = 1; i < snakeBody.length; i++) {
            if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) {
                return true;
            }
        }
        return false;
    }

    function gameOver() {
        alert('Game Over! Your score is ' + score);
        snakeX = 150;
        snakeY = 150;
        dx = 10;
        dy = 0;
        snakeBody = [[150, 150]]; // Reinicia o corpo da cobra
        score = 0;
        scoreDisplay.innerText = score;
        updateSnake();
        randomPosition();
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && dx === 0) {
            dx = -10;
            dy = 0;
        } else if (e.key === 'ArrowRight' && dx === 0) {
            dx = 10;
            dy = 0;
        } else if (e.key === 'ArrowUp' && dy === 0) {
            dy = -10;
            dx = 0;
        } else if (e.key === 'ArrowDown' && dy === 0) {
            dy = 10;
            dx = 0;
        }
    });

    randomPosition();
    setInterval(moveSnake, 100);
});