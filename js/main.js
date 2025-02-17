const questions = [
    { question: 'What is the difference between window.onload and $(document).ready() ?', type: 'text' },
    { 
        question: 'Which Bootstrap class centers a column horizontally in a grid row?',
        type: 'radio',
        options: [
            { text: '.text-center', option: 'A' },
            { text: '.mx-auto', option: 'B' },
            { text: '.d-center', option: 'C' },
            { text: '.justify-content-center', option: 'D' },
        ]
    },
    { 
        question: 'Which of the following is true about async and defer?',
        type: 'checkbox',
        options: [
            { text: '<b><i>async</i></b> loads the script asynchronously and executes it immediately', option: 'A' },
            { text: '<b><i>defer</i></b> waits for HTML parsing before executing the script', option: 'B' },
            { text: 'Both always execute in order', option: 'C' },
            { text: '<b><i>async</i></b> ensures script execution after DOM is ready', option: 'D' },
        ]
    }
];

const quizContainer = document.getElementById('quiz');

questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question', 'shadow-sm', 'p-3');
    
    questionDiv.innerHTML = `<h5 class="mb-3">Q${index + 1}: ${q.question}</h5>`;
    
    if (q.type === 'text') {
        questionDiv.innerHTML += `<textarea rows="5" class="form-control mt-2"></textarea>`;
    } else if (q.type === 'radio' || q.type === 'checkbox') {
        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('options', 'mt-2');
        q.options.forEach(option => {
            const label = document.createElement('label');
            label.classList.add('form-check-label');
            label.innerHTML = `<input type="${q.type}" class="form-check-input" name="question_${index}" value="${option.option}"> ${option.option}. ${option.text}`;
            
            const div = document.createElement('div');
            div.classList.add('form-check');
            div.appendChild(label);
            optionsDiv.appendChild(div);
        });
        questionDiv.appendChild(optionsDiv);
    }
    
    quizContainer.appendChild(questionDiv);
});