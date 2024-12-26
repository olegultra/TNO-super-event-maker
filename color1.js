const colors = [
            "#591918", "#852121", "#9a3351",
            "#586492", "#31357d", "#1c1b65",
            "#6f6f6f", "#414141", "#181818",
            "#6d2d23", "#33211d", "#30194f"
        ];
        const labels = [
            "коммунизм", "социализм", "прогрессивизм", 
            "либерализм", "либерал-консерватизм", "консерватизм", 
            "патернализм", "деспотизм", "ультранационализм", 
            "фашизм", "национал-социализм", "эзотерический национал-социализм"
        ];
        const initialData = Array(12).fill(0);
        initialData[0] = 100; 
        let chart;

        document.addEventListener("DOMContentLoaded", function () {
            const ctx = document.getElementById('pieChart').getContext('2d');
            chart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        data: initialData,
                        backgroundColor: colors,
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    animation: false
                }
            });

            const inputsContainer = document.getElementById('inputs');
            labels.forEach((label, index) => {
                const inputGroup = document.createElement('div');
                inputGroup.className = 'input-group';
                inputGroup.innerHTML = `
                    <label>${label}: </label>
                    <input type="number" id="input${index}" value="${initialData[index]}" min="0" max="100"> %
                `;
                inputsContainer.appendChild(inputGroup);
            });
        });

        function updateChart() {
            const newData = [];
            labels.forEach((label, index) => {
                const value = document.getElementById(`input${index}`).value;
                newData.push(parseFloat(value));
            });

            const sum = newData.reduce((acc, value) => acc + value, 0);
            if (sum !== 100) {
                alert('ТЫ ДУРА ЧТО ЛИ Я НЕ ПОНИМАЮ ВВОДИ НОРМАЛЬНЫЕ ЗНАЧЕНИЯ');
                return;
            }

            chart.data.datasets[0].data = newData;
            chart.update();
        }
