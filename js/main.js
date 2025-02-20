const questions = [
  {
    id: 'question-1',
    question:
      "What is the difference between window.onload and $(document).ready() ?",
    type: "text",
  },

  {
    id: 'question-2',
    question:
      "Which Bootstrap class centers a column horizontally in a grid row?",
    type: "radio",
    options: [
      { text: ".text-center", option: "A" },
      { text: ".mx-auto", option: "B" },
      { text: ".d-center", option: "C" },
      { text: ".justify-content-center", option: "D" },
    ],
  },

  {
    id: 'question-3',
    question: "Which of the following is true about async and defer?",
    type: "checkbox",
    options: [
      {
        text: "<b><i>async</i></b> loads the script asynchronously and executes it immediately",
        option: "A",
      },
      {
        text: "<b><i>defer</i></b> waits for HTML parsing before executing the script",
        option: "B",
      },
      { text: "Both always execute in order", option: "C" },
      {
        text: "<b><i>async</i></b> ensures script execution after DOM is ready",
        option: "D",
      },
    ],
  },

  {
    id: 'question-4',
    question: "What will be the output of `console.log(typeof NaN);`?",
    type: "radio",
    options: [
      { text: "NaN", option: "A" },
      { text: "undefined", option: "B" },
      { text: "number", option: "C" },
      { text: "object", option: "D" },
    ],
  },

  {
    id: 'question-5',
    question:
      "How can you select an element by its `data-` attribute using jQuery?",
    type: "radio",
    options: [
      { text: "$('div[data-id=\"123\"]')", option: "A" },
      { text: "$('#div[data-id=123]')", option: "B" },
      { text: "$('.div[data-id=123]')", option: "C" },
      { text: "$(div[data-id=123])", option: "D" },
    ],
  },

  {
    id: 'question-6',
    question:
      "Which jQuery method is used to get the value of a selected &lt;input&gt; field?",
    type: "radio",
    options: [
      { text: ".val()", option: "A" },
      { text: ".text()", option: "B" },
      { text: ".html()", option: "C" },
      { text: ".input()", option: "D" },
    ],
  },

  {
    id: 'question-7',
    question: "What does `position: sticky;` do in Bootstrap?",
    type: "radio",
    options: [
      {
        text: "Keeps the element fixed within its parent when scrolling",
        option: "A",
      },
      { text: "Keeps the element fixed at the top of the page", option: "B" },
      { text: "Moves the element to the bottom", option: "C" },
      { text: "Makes the element float", option: "D" },
    ],
  },

  {
    id: 'question-8',
    question: "What is the purpose of `use strict` in JavaScript?",
    type: "checkbox",
    options: [
      { text: "Prevents the use of undeclared variables", option: "A" },
      { text: "Throws errors for unsafe actions", option: "B" },
      { text: "Allows the use of deprecated syntax", option: "C" },
      { text: "Improves execution speed", option: "D" },
    ],
  },

  {
    id: 'question-9',
    question: "How do you check if an object is empty in JavaScript?",
    type: "radio",
    options: [
      { text: "obj.isEmpty()", option: "A" },
      { text: "Object.keys(obj).length === 0", option: "B" },
      { text: "obj.length === 0", option: "C" },
      { text: "obj == {}", option: "D" },
    ],
  },

  {
    id: 'question-10',
    question: 'What does `.removeClass("my-class")` do in jQuery?',
    type: "radio",
    options: [
      {
        text: 'Removes the "my-class" from the selected elements',
        option: "A",
      },
      { text: "Deletes the element from the DOM", option: "B" },
      { text: "Hides the element", option: "C" },
      { text: "Removes all classes from the element", option: "D" },
    ],
  },

  {
    id: 'question-11',
    question: 'What will this output? `console.log(1 + "2" - "1");`',
    type: "radio",
    options: [
      { text: '"12"', option: "A" },
      { text: "11", option: "B" },
      { text: "2", option: "C" },
      { text: "TypeError", option: "D" },
    ],
  },

  {
    id: 'question-12',
    question:
      "Write a function to reverse a string without using `.reverse()`.",
    type: "text",
  },

  {
    id: 'question-13',
    question:
      "Write a function that returns the first non-repeating character in a string.",
    type: "text",
  },

  {
    id: 'question-14',
    question: "Write a function that sums an array using `.reduce()`.",
    type: "text",
  },
  {
    id: 'question-15',
    question: "What is the difference between `==` and `===` in JavaScript?",
    type: "text",
  },

  {
    id: 'question-16',
    question: "How does JavaScript handle asynchronous operations?",
    type: "checkbox",
    options: [
      { text: "Using Promises", option: "A" },
      { text: "Using Callbacks", option: "B" },
      { text: "Using Async/Await", option: "C" },
      { text: "Using setTimeout()", option: "D" },
    ],
  },

  {
    id: 'question-17',
    question:
      "Which Bootstrap class makes an element hidden on all screen sizes?",
    type: "radio",
    options: [
      { text: ".d-none", option: "A" },
      { text: ".invisible", option: "B" },
      { text: ".hide", option: "C" },
      { text: ".d-hidden", option: "D" },
    ],
  },

  {
    id: 'question-18',
    question:
      "What is the difference between `.map()` and `.forEach()` in JavaScript?",
    type: "text",
  },

  {
    id: 'question-19',
    question: "Which jQuery method can be used to stop an animation?",
    type: "radio",
    options: [
      { text: ".pause()", option: "A" },
      { text: ".stop()", option: "B" },
      { text: ".end()", option: "C" },
      { text: ".finish()", option: "D" },
    ],
  },

  {
    id: 'question-20',
    question: "What is the default position of a Bootstrap modal?",
    type: "radio",
    options: [
      { text: "Fixed at the top", option: "A" },
      { text: "Centered on the screen", option: "B" },
      { text: "Fixed at the bottom", option: "C" },
      { text: "Relative to its parent", option: "D" },
    ],
  },

  {
    id: 'question-21',
    question: "What is the use of `debounce()` function in JavaScript?",
    type: "text",
  },

  {
    id: 'question-22',
    question:
      "Which Bootstrap class is used to create a responsive navigation bar?",
    type: "radio",
    options: [
      { text: ".navbar-expand-lg", option: "A" },
      { text: ".nav-flex", option: "B" },
      { text: ".responsive-navbar", option: "C" },
      { text: ".navbar-toggle", option: "D" },
    ],
  },

  {
    id: 'question-23',
    question:
      "What will be the output of the following code?\n\n```js\nconsole.log(0.1 + 0.2 === 0.3);\n```",
    type: "radio",
    options: [
      { text: "true", option: "A" },
      { text: "false", option: "B" },
      { text: "undefined", option: "C" },
      { text: "TypeError", option: "D" },
    ],
  },

  {
    id: 'question-24',
    question: "Which jQuery method is used to remove an element from the DOM?",
    type: "radio",
    options: [
      { text: ".detach()", option: "A" },
      { text: ".delete()", option: "B" },
      { text: ".remove()", option: "C" },
      { text: ".empty()", option: "D" },
    ],
  },

  {
    id: 'question-25',
    question: "What does `preventDefault()` do in JavaScript?",
    type: "text",
  },

  {
    id: 'question-26',
    question: "How do you check if a variable is an array in JavaScript?",
    type: "radio",
    options: [
      { text: 'typeof var === "array"', option: "A" },
      { text: "Array.isArray(var)", option: "B" },
      { text: "var instanceof Array", option: "C" },
      { text: "Both B and C", option: "D" },
    ],
  },

  {
    id: 'question-27',
    question: "Which Bootstrap class adds a shadow effect to elements?",
    type: "radio",
    options: [
      { text: ".shadow-lg", option: "A" },
      { text: ".box-shadow", option: "B" },
      { text: ".border-shadow", option: "C" },
      { text: ".shadow-effect", option: "D" },
    ],
  },

  {
    id: 'question-28',
    question: "What will this output?\n\n```js\nconsole.log([] + []);\n```",
    type: "radio",
    options: [
      { text: "0", option: "A" },
      { text: '"" (empty string)', option: "B" },
      { text: "undefined", option: "C" },
      { text: "null", option: "D" },
    ],
  },

  {
    id: 'question-29',
    question: "How do you make an API request in JavaScript?",
    type: "checkbox",
    options: [
      { text: "Using XMLHttpRequest", option: "A" },
      { text: "Using fetch()", option: "B" },
      { text: "Using jQuery.ajax()", option: "C" },
      { text: "Using WebSockets", option: "D" },
    ],
  },

  {
    id: 'question-30',
    question:
      "Which jQuery selector selects all &lt;p&gt; elements inside a &lt;div&gt;?",
    type: "radio",
    options: [
      { text: '$("div p")', option: "A" },
      { text: '$("div > p")', option: "B" },
      { text: '$("div, p")', option: "C" },
      { text: '$("div+p")', option: "D" },
    ],
  },
];


$(document).ready(function () {
    const userAnswers = {};
    const quizContainer = $("#quiz");
    const introContainer = $("#intro");
    const submitBtn = $("#submitBtn");
    const timerDisplay = $("#timer");
    const modal = new bootstrap.Modal($("#timeoutModal")[0]);
    let timerInterval;
  
    $("#startBtn").on("click", function () {
        let username = $('#username').val()
        
        if (!username) {
            return alert('Please provide your name before starting your assessment');
        }

        userAnswers['name'] = username
        startTimer(45 * 60, timerDisplay);
        introContainer.addClass("d-none");
        quizContainer.removeClass("d-none");
        $(this).prop("disabled", true);
    });
  
    function startTimer(duration, display) {
      let timer = duration;
      timerInterval = setInterval(() => {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        display.text(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
        
        if (--timer < 0) {
          clearInterval(timerInterval);
          display.text("Time's Up!");
          modal.show();
        }
      }, 1000);
    }
  
    // Create questions dynamically
    questions.forEach((q, index) => {
      const questionDiv = $('<div class="question shadow-sm p-3"></div>');
      questionDiv.append(`<h5 class="mb-3">Q${index + 1}: ${q.question}</h5>`);
  
      if (q.type === "text") {
        const textarea = $('<textarea rows="5" class="form-control mt-2"></textarea>');
        textarea.on("input", function () {
          saveAnswer(q.id, $(this).val());
        });
        questionDiv.append(textarea);
      } else {
        const optionsDiv = $('<div class="options mt-2"></div>');
        q.options.forEach((option) => {
          const label = $('<label class="form-check-label"></label>');
          label.html(
            `<input type="${q.type}" class="form-check-input" name="question_${index}" value="${option.option}"> ${option.option}. ${option.text}`
          );
          label.find("input").on("change", function () {
            saveAnswer(q.id, $(this).val());
          });
          const div = $('<div class="form-check"></div>');
          div.append(label);
          optionsDiv.append(div);
        });
        questionDiv.append(optionsDiv);
      }
  
      quizContainer.append(questionDiv);
    });
  
    function saveAnswer(questionId, value) {
      userAnswers[questionId] = value;
      checkCompletion();
    }
  
    function checkCompletion() {
      if (Object.keys(userAnswers).length === questions.length) {
        submitBtn.removeClass("d-none");
      }
    }
  
    submitBtn.on("click", submitAnswers);
  
    function submitAnswers() {
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxU9ezxWOl8Yj7oKzD8HMHKr9kHH8PCvSjChVJ6BJJHNvq7Ywi0GjZ2---QpYSrIs0/exec",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(userAnswers),
        success: function () {
          alert("Your answers have been submitted!");
        },
        error: function () {
          alert("Error submitting answers.");
        }
      });
    }
  });
  