        const counter = document.getElementById('counter');
        const incrementBtn = document.getElementById('increment');
        const resetBtn = document.getElementById('reset');
        const message = document.getElementById('message');
        const history = document.getElementById('history');

        let count = 0;
        let historyList = [];

        const updateCounter = () => {
            counter.textContent = count;
            message.textContent = count % 2 === 0 ? 'Even' : 'Odd';

            if (count % 2 === 0) {
                counter.classList.remove('bg-red-500');
                counter.classList.add('bg-green-500');
            } else {
                counter.classList.remove('bg-green-500');
                counter.classList.add('bg-red-500');
            }

            historyList.push(count);
            history.textContent = historyList.join(', ');
        };

        incrementBtn.addEventListener('click', () => {
            count++;
            updateCounter();
        });

        resetBtn.addEventListener('click', () => {
            count = 0;
            updateCounter();
        });

        updateCounter();