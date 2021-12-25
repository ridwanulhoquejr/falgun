<template>

  <NavBar :isHome="isHome"/>


    <body class="antialiased text-gray-700 bg-gray-100">
        <div class="flex w-full h-screen justify-center items-center" id="app">
                <div class="w-full max-w-xl " style="margin-top: 80px">
                    <h1 class="font-bold text-3xl text-center text-indigo-700">
                        Python Quiz
                    </h1>
                    <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
                    <div v-if="index < count">
                        <p class="text-xl font-bold">
                            {{ questions[index]['question'] }}
                        </p>
                        <label
                            :for="key"
                            class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-14px"
                            v-for="answer,key in questions[index]['answers']"
                            :class="{'hover:bg-gray-100 cursor-pointer' : selectedAnswer == ''},
                        {'bg-red-200' : selectedAnswer == key},
                        {'bg-green-200' : key == questions[index]['correctAnswer'] && selectedAnswer != ''}"
                        >
                            <input
                                type="radio"
                                :id="key"
                                class="hidden"
                                :value="key"
                                @change="answered($event)"
                                v-model="selectedAnswer"
                                :disabled="selectedAnswer != ''"
                            />
                            {{ answer }}
                        </label>
                        <div class="mt-6 flow-root">
                            <button
                                class="float-right px-5 py-2 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full"
                                v-show="selectedAnswer != '' && index < count-1"
                                @click="nextQuestion"
                            >
                                Next &gt;
                            </button>
                            <button
                                class="float-right px-5 py-2 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full"
                                v-show="selectedAnswer != '' && index == count-1"
                                @click="showResults"
                            >
                                Finish
                            </button>
                        </div>
                    </div>
                    <div v-else>
                        <h2 class="font-bold text-3xl">Results</h2>
                        <div class="flex justify-start space-x-4 mt-6">
                            <p>
                                Correct Answers:
                                <span class="text-2xl text-green-700 font-bold"
                                    >{{ correctAnswer }}</span
                                >
                            </p>
                            <p>
                                Wrong Answers:
                                <span class="text-2xl text-red-700 font-bold"
                                    >{{ wrongAnswer }}</span
                                >
                            </p>
                        </div>
                        <div class="mt-6 flow-root">
                            <button
                                class="float-right px-5 py-2 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full"
                                @click="resetQuiz"
                            >
                                Play again
                            </button>
                        </div>
                    </div>
                </div>                
                </div>
        </div>
    </body>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Vue from 'vue'

export default {
    components: {NavBar},

    data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 15,
            questions: [
                {
                    question: "What is a correct syntax to output 'Hello World' in Python?",
                    answers: {a: "printf('Hello World')", b: "print('Hello World')", c: "printlf('Hello World')", d: "System.out.print('Hello World')"},
                    correctAnswer: 'b'
                },
                {
                    question: "How do you insert COMMENTS in Python code?",
                    answers: {a: '#This is comment', b: '//This is comment', c: '/*This is comment', d: '*/This is comment'},
                    correctAnswer: 'a'
                },
                {
                    question: "How do you create a variable with the numeric value 5?",
                    answers: {a: 'x = 5', b: 'x = int(5)', c: 'Both the answers are correct'},
                    correctAnswer: 'c'
                },
                {
                    question: "What is the correct way to create a function in Python?",
                    answers: {a: 'create myFunction()', b: 'def myFunction()', c: 'myFunction()'},
                    correctAnswer: 'b'
                },
                {
                    question: "In Python, 'Hello', is the same as \"Hello\"?",
                    answers: {a: 'True', b: 'False'},
                    correctAnswer: 'a'
                },
                {
                    question: "Which operator is used to multiply numbers?",
                    answers: {a: '/', b: '*', c: '//', d:'**'},
                    correctAnswer: 'b'
                },
                {
                    question: "What is the correct expression of 'X is not equal to Y'?",
                    answers: {a: 'X == Y', b: 'X = Y', c: 'X != Y', d:'X <> Y'},
                    correctAnswer: 'c'
                },
                {
                    question: "Which operator can be used to compare two values?",
                    answers: {a: '=', b: '>=', c: '==', d: '>'},
                    correctAnswer: 'c'
                },
                {
                    question: "Which of these collections defines a LIST?",
                    answers: {a: "['Fardeen','Injamam','Houmayan','Ridwan']", b: "('Fardeen','Injamam','Houmayan','Ridwan')", c:"{'Fardeen','Injamam','Houmayan','Ridwan'}"},
                    correctAnswer: 'a'
                },
                {
                    question: "Which of these collections defines a Tuple?",
                    answers: {a: "['Fardeen','Injamam','Houmayan','Ridwan']", b: "('Fardeen','Injamam','Houmayan','Ridwan')", c:"{'Fardeen','Injamam','Houmayan','Ridwan'}"},
                    correctAnswer: 'b'
                },
                {
                    question: "Can Set contains duplicate values?",
                    answers: {a: 'No', b: 'Yes'},
                    correctAnswer: 'a'
                },
                {
                    question: "Dictionary is a key-value paired collection?",
                    answers: {a: 'True', b: 'False'},
                    correctAnswer: 'a'
                },
                {
                    question: "Which collection is ordered, changeable, and allows duplicate members??",
                    answers: {a: 'Dictionary', b: 'Set', c: 'Tuple', d: 'List'},
                    correctAnswer: 'd'
                },
                {
                    question: "How do you start writing an if statement in Python?",
                    answers: {a: 'if x>y:', b: 'if x>y then', c: 'if x>y'},
                    correctAnswer: 'a'
                },
                {
                    question: "How do you start writing a for loop in Python?",
                    answers: {a: 'for x>y:', b: 'for i in x:', c: 'for each x in y'},
                    correctAnswer: 'b'
                },
            ]
        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswer++
            else
                this.wrongAnswer++
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },
        showResults() {
            this.index++
            Vue.prototype.$rightAns= this.correctAnswer

        },
        resetQuiz() {
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        }
    }

}
</script>

<style >



</style>