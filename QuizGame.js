
const questions = [
    {
        'que': 'Which Of The Following is Markup Language ?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What Year was JavaScript Launched ?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None Of The Above',
        'correct': 'b'
    },
    {
        'que': 'Which planet is known as the Red Planet ?',
        'a': 'Mars',
        'b': 'Venus',
        'c': 'Jupiter',
        'd': 'Earth',
        'correct': 'a'
    },
    {
        'que': 'What is the currency of Japan ?',
        'a': 'Euro',
        'b': 'Yen',
        'c': 'Dollar',
        'd': 'Pound',
        'correct': 'b'
    },
    {
        'que': 'What is the capital of France ?',
        'a': 'Berlin',
        'b': 'Rome',
        'c': 'Paris',
        'd': 'Madrid',
        'correct': 'c'
    },
    {
        'que': 'Which ocean is the largest ?',
        'a': 'Inadian Ocean',
        'b': 'Atlantic Ocean',
        'c': 'Pacific Ocean',
        'd': 'Arctic Ocean',
        'correct': 'c'
    },

    {
        'que': 'Who wrote the play "Hamlet" ?',
        'a': 'William Shakespear',
        'b': 'Charles Dickens ',
        'c': 'J.R.R Tolkien',
        'd': 'Mark Twain',
        'correct': 'a'
    },
    {
        'que': 'What is the largest planet in our solar system ?',
        'a': 'Jupiter',
        'b': 'Earth',
        'c': 'Saturn',
        'd': 'None',
        'correct': 'a'
    },
    {
        'que': 'Who invented the telephone ?',
        'a': 'Thomas Edison',
        'b': 'Alexander Graham Bell',
        'c': 'Nikola Tesla',
        'd': 'Guglielmo Marconi',
        'correct': 'b'
    },

    {
        'que': 'What is the chemical symbol for water ?',
        'a': 'CO₂',
        'b': 'N₂',
        'c': 'O₂',
        'd': 'None',
        'correct': 'd'
    },
    {
        'que': 'What is the highest mountain in the world ?',
        'a': 'Mount Kilimanjaro',
        'b': 'Mount Everest',
        'c': 'Mount McKinley',
        'd': 'Mount Fuji',
        'correct': 'b'
    },
    {
        'que': 'Who was the first woman Prime Minister of India ?',
        'a': 'Dr.Rajendra Prashad',
        'b': 'Indira Gandhi',
        'c': 'C. Rajagopalachari',
        'd': 'None',
        'correct': 'b'
    },

    {
        'que': 'How many states are there in India ?',
        'a': '26',
        'b': '27',
        'c': '29',
        'd': '28',
        'correct': 'd'
    },
    {
        'que': 'What is the minimum age to become the Prime Minister of India ?',
        'a': '25',
        'b': '22',
        'c': '35',
        'd': '30',
        'correct': 'c'
    },
    {
        'que': 'How many members are there in the Rajya Sabha ?',
        'a': '245',
        'b': '200',
        'c': '350',
        'd': '205',
        'correct': 'a'
    },


]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const OptionInputs = document.querySelectorAll('.Options')
const loadQuestion = () => {
    if (index == total) {
        return endQuiz()
    }
     reset()

    const data = questions[index]
    quesBox.innerText = `${index + 1}.${data.que}`;

    OptionInputs[0].nextElementSibling.innerText = data.a;
    OptionInputs[1].nextElementSibling.innerText = data.b;
    OptionInputs[2].nextElementSibling.innerText = data.c;
    OptionInputs[3].nextElementSibling.innerText = data.d;
}

const SubmitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    OptionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;

            }
        }
    )
    return answer;
}
const reset = () => {
    OptionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <h1 style="color:red;font-family:'varela Round',sans-serif;">Game is Over</h1>
    <center><h3>Thank You</h3></center>
    <center><h5> ${right} / ${total} are correct</h5></center>
    `
}
loadQuestion();
