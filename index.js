  let currentChallenge = 0;
        let score = 0;
        let conceptsLearned = 0;
        let selectedOption = null;

        const challenges = [
            {
                character: "🧙‍♂️",
                story: `Welcome, brave coder! You are Alex, a young programmer who has discovered a mysterious digital realm. 
                The realm is in chaos - its systems are failing, and only someone with coding knowledge can restore order.
                
                <br><br>Your journey begins in the Village of Variables, where the townspeople have forgotten how to store information. 
                Your first task is to help the village baker remember how to keep track of his bread count!`,
                
                challenge: {
                    title: "🍞 Challenge: Help the Baker Count Bread",
                    description: `The baker needs to store the number of loaves he has. In programming, we use <strong>variables</strong> to store information. Which line of code correctly creates a variable to store 12 loaves of bread?`,
                    options: [
                        { code: 'print("12 loaves")', correct: false },
                        { code: 'bread_count = 12', correct: true },
                        { code: '12 = bread_count', correct: false },
                        { code: 'bread_count == 12', correct: false }
                    ],
                    correctFeedback: "Excellent! You used the assignment operator (=) to store the value 12 in the variable bread_count. The baker is overjoyed!",
                    incorrectFeedback: "Not quite right. Remember, in programming we use = to assign values to variables. The variable name goes on the left, the value on the right.",
                    concept: "Variables are like labeled boxes that store information. We use = to put values into them."
                }
            },
            {
                character: "🏰",
                story: `Amazing work! The baker can now track his bread. Word of your success spreads quickly through the village.
                
                <br><br>Next, you encounter the Castle of Conditions, where the royal guard needs help making decisions. 
                The drawbridge is stuck, and it should only open when the correct password is entered.`,
                
                challenge: {
                    title: "🏰 Challenge: Guard the Castle",
                    description: `The guard needs to check if the entered password equals "OPEN123". In programming, we use <strong>if statements</strong> to make decisions. Which code correctly checks the password?`,
                    options: [
                        { code: 'if password = "OPEN123":', correct: false },
                        { code: 'if password == "OPEN123":', correct: true },
                        { code: 'if "OPEN123" = password:', correct: false },
                        { code: 'check password == "OPEN123"', correct: false }
                    ],
                    correctFeedback: "Perfect! You used == to compare values. The drawbridge creaks open, and the guard salutes you!",
                    incorrectFeedback: "Close, but not quite! Remember: = assigns values, but == compares values. We need to compare the password.",
                    concept: "Conditional statements (if) let programs make decisions. We use == to check if two values are equal."
                }
            },
            {
                character: "🌊",
                story: `The castle gates swing open, revealing a path to the Looping Lagoon. Here, a friendly dolphin is trapped in a whirlpool!
                
                <br><br>The dolphin explains that to escape, you must help it swim in circles exactly 5 times. 
                This sounds like a job for a loop - a way to repeat actions in programming.`,
                
                challenge: {
                    title: "🐬 Challenge: Save the Dolphin",
                    description: `The dolphin needs to swim in a circle exactly 5 times to break free. Which code uses a <strong>for loop</strong> to repeat the swimming action 5 times?`,
                    options: [
                        { code: 'for i in range(5):\n    swim_in_circle()', correct: true },
                        { code: 'repeat 5 times swim_in_circle()', correct: false },
                        { code: 'swim_in_circle() * 5', correct: false },
                        { code: 'while swim_in_circle() < 5:', correct: false }
                    ],
                    correctFeedback: "Brilliant! The for loop repeats the swimming action exactly 5 times. The dolphin breaks free and does a happy flip!",
                    incorrectFeedback: "Not quite right. For loops use 'for variable in range(number):' to repeat actions a specific number of times.",
                    concept: "Loops let us repeat code multiple times. For loops are perfect when we know exactly how many times to repeat."
                }
            },
            {
                character: "🏔️",
                story: `With the dolphin's grateful blessing, you climb the Mountain of Functions. At the peak, you meet a wise old owl who has lost the ability to perform calculations.
                
                <br><br>"Young coder," the owl hoots, "I once knew how to add numbers together, but I've forgotten! 
                Can you help me create a reusable way to add any two numbers?"`,
                
                challenge: {
                    title: "🦉 Challenge: Teach the Owl",
                    description: `The owl needs a <strong>function</strong> that can add any two numbers together. Functions are reusable pieces of code. Which code correctly creates an addition function?`,
                    options: [
                        { code: 'function add(a, b):\n    return a + b', correct: false },
                        { code: 'def add(a, b):\n    return a + b', correct: true },
                        { code: 'add = a + b', correct: false },
                        { code: 'def add:\n    a + b', correct: false }
                    ],
                    correctFeedback: "Wonderful! You created a function using 'def' that takes two parameters and returns their sum. The owl is wise again!",
                    incorrectFeedback: "Almost there! In Python, we use 'def' to create functions, and 'return' to send back the result.",
                    concept: "Functions are reusable blocks of code. They can take inputs (parameters) and give back outputs (return values)."
                }
            },
            {
                character: "👑",
                story: `Congratulations, brave coder! You have restored order to the digital realm. The owl's wisdom, combined with your coding skills, has awakened the sleeping Digital King.
                
                <br><br>"You have proven yourself a true Code Warrior," the King declares. "You understand variables, conditions, loops, and functions - the four pillars of programming!"
                
                <br><br>The realm is saved, and you have become a legend. But this is just the beginning of your coding journey...`,
                
                challenge: {
                    title: "🎉 Victory! You've Completed Code Quest!",
                    description: `You've learned the fundamental concepts of programming through your epic adventure! Which concept allows us to store and remember information?`,
                    options: [
                        { code: 'Variables - they store information', correct: true },
                        { code: 'Loops - they repeat actions', correct: false },
                        { code: 'Functions - they group code', correct: false },
                        { code: 'Conditions - they make decisions', correct: false }
                    ],
                    correctFeedback: "Perfect! You truly understand the basics of programming. You're ready for even greater coding adventures!",
                    incorrectFeedback: "Think about what we used to help the baker remember his bread count!",
                    concept: "You've mastered the four fundamental programming concepts: Variables, Conditions, Loops, and Functions!"
                }
            }
        ];

        function initializeGame() {
            setupChallenge();
            updateStats();
        }

        function setupChallenge() {
            const challenge = challenges[currentChallenge];
            
            document.querySelector('.character-sprite').textContent = challenge.character;
            document.getElementById('storyText').innerHTML = challenge.story;
            
            document.querySelector('.code-challenge h3').innerHTML = challenge.challenge.title;
            document.querySelector('.code-challenge p').innerHTML = challenge.challenge.description;
            
            const optionsContainer = document.getElementById('codeOptions');
            optionsContainer.innerHTML = '';
            
            challenge.challenge.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'code-option';
                optionElement.textContent = option.code;
                optionElement.dataset.correct = option.correct;
                optionElement.addEventListener('click', () => selectOption(optionElement, option.correct));
                optionsContainer.appendChild(optionElement);
            });
            
            document.getElementById('feedback').style.display = 'none';
            document.getElementById('nextButton').disabled = true;
            selectedOption = null;
            
            updateProgress();
        }

        function selectOption(element, isCorrect) {
            if (selectedOption) return;
            
            selectedOption = element;
            const challenge = challenges[currentChallenge];
            const feedback = document.getElementById('feedback');
            
            document.querySelectorAll('.code-option').forEach(option => {
                option.style.pointerEvents = 'none';
                if (option.dataset.correct === 'true') {
                    option.classList.add('correct');
                } else {
                    option.classList.add('incorrect');
                }
            });
            
            feedback.style.display = 'block';
            
            if (isCorrect) {
                feedback.className = 'feedback correct';
                feedback.innerHTML = challenge.challenge.correctFeedback + 
                    `<div class="concept-learned"><strong>💡 Concept Learned:</strong> ${challenge.challenge.concept}</div>`;
                score += 100;
                conceptsLearned++;
            } else {
                feedback.className = 'feedback incorrect';
                feedback.innerHTML = challenge.challenge.incorrectFeedback + 
                    `<div class="concept-learned"><strong>💡 Remember:</strong> ${challenge.challenge.concept}</div>`;
                score += 25;
            }
            
            document.getElementById('nextButton').disabled = false;
            updateStats();
        }

        function nextChallenge() {
            currentChallenge++;
            
            if (currentChallenge >= challenges.length) {
                showCompletion();
                return;
            }
            
            setupChallenge();
        }

        function showCompletion() {
            document.getElementById('storySection').innerHTML = `
                <div class="character-sprite">🎉</div>
                <div class="story-text">
                    <h2 style="color: #FFD700; text-align: center; margin-bottom: 20px;">🏆 Quest Complete!</h2>
                    <p style="text-align: center; font-size: 1.2em;">
                        Congratulations! You've mastered the fundamentals of programming through your epic adventure!
                        <br><br>
                        <strong>Your Journey:</strong><br>
                        🧙‍♂️ Learned Variables in the Village<br>
                        🏰 Mastered Conditions at the Castle<br>
                        🌊 Conquered Loops at the Lagoon<br>
                        🏔️ Created Functions on the Mountain<br>
                        👑 Became a Code Warrior!
                        <br><br>
                        You're now ready to explore real programming languages and build amazing things!
                    </p>
                </div>
            `;
        }

        function updateStats() {
            document.getElementById('currentLevel').textContent = currentChallenge + 1;
            document.getElementById('score').textContent = score;
            document.getElementById('conceptsLearned').textContent = conceptsLearned;
        }

        function updateProgress() {
            const progress = (currentChallenge / challenges.length) * 100;
            document.getElementById('progressFill').style.width = progress + '%';
        }

        initializeGame();
