import {useEffect, useRef} from 'react';
import {ArcElement, Chart as ChartJS, Legend, PieController, Tooltip} from 'chart.js';

export default function TasksChart({tasks, completed, pending}) {
    const chartRef = useRef(null);

    useEffect(() => {
        ChartJS.register(PieController, ArcElement, Tooltip, Legend);

        const data = {
            labels: ['pending', 'completed'],
            datasets: [
                {
                    label: 'My Task',
                    data: [pending, completed],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(220, 252, 231)',
                    ],
                    hoverOffset: 3,
                },
            ],
        };

        const config = {
            type: 'pie',
            data: data,
        };

        if (chartRef.current) {
            new ChartJS(chartRef.current, config);
        }
    }, []);

    return (
        <canvas className='' ref={chartRef}></canvas>
    );
}
