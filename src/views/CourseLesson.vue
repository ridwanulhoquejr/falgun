<template>

    <!-- lesson info section -->
    <section id="lesson-info">
        <div class="container">
            <h1>Python</h1>
            <p>
                Phython is an interpreted high-level general-purpose programming language. Its design philosophy
                emphasizes
                code readability with its use of significant indentation. Mainly used to build automate tasks, AI and
                conduct data analysis.
            </p>
            <img src="/img/python-logo.svg" alt="">
        </div>
    </section>

    <!-- lessons details section -->
    <section id="lessons-details">
        <div class="container  lessons-container" >
            <h2>Lessons</h2>

            <div class="lesson sec" id="lesson">
                <a href="#l1">Introduction</a>

                <div class="popup" id="l1">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga consequuntur voluptas, magnam
                        aliquam tenetur aperiam vitae earum, natus at nisi facere? Dolore neque architecto
                        necessitatibus error, adipisci deserunt omnis sequi.</p>
                </div>
            </div>

            <div class="sec">
                <div class="lesson sec2.1">
                    <a href="#l2">Variable & Identifiers</a>

                    <div class="popup" id="l2">
                        <p>Variable & Indentifiers Details</p>
                    </div>
                </div>
                <div class="lesson sec2.2">
                    <a href="#l3">Indentation & Comments</a>

                    <div class="popup" id="l3">
                        <p>Indentation & Comments Details</p>
                    </div>
                </div>
                <div class="lesson sec2.3">
                    <a href="#l4">Data Type</a>

                    <div class="popup" id="l4">
                        <p>Data Type Details</p>
                    </div>
                </div>
            </div>

            <div class="sec">
                <div class="lesson sec3.1">
                    <a href="#l5">Conditions</a>

                    <div class="popup" id="l5">
                        <p>Conditions Details</p>
                    </div>
                </div>
                <div class="lesson sec3.2">
                    <a href="#l6">Loops</a>

                    <div class="popup" id="l6">
                        <p>Loops Details</p>
                    </div>
                </div>
                <div class="lesson sec3.3">
                    <a href="#l7">Arrays</a>

                    <div class="popup" id="l7">
                        <p>Arrays Details</p>
                    </div>
                </div>
            </div>

            <div class="lesson sec">
                <a href="#l8">Dictionary</a>

                <div class="popup" id="l8">
                    <p>Dictionary Details</p>
                </div>
            </div>

        </div>
    </section>
  
</template>

<script>
export default {

}
</script>

<style scopped>

.container.lessons-container{
    flex-direction: column;
}

    /* lesson info section */
#lesson-info{
    background-image: linear-gradient(to right, #2f2c64, #483b9e, #221d6b,#483b9e);
    color: white;
    padding-bottom: 40px;
}

#lesson-info .container img{
    width: 100px;
    position: absolute;
    top: 55px;
    right: 0;
    background-color: yellow;
    border-radius: 50%;
}
#lesson-info h1{
    font-size: 20px;
    margin-bottom: 10px;
}
#lesson-info p{
    font-size: 14px;
    letter-spacing: 1px;
    width: 950px;
}


/* lessons details section */
#lessons-details .container{
    width: 100%;
    max-width: 1080px;
    padding: 20px 0;
    position: relative;
}
#lessons-details a{
    display: block;
    width: 200px;
    color: #221F36;
    background-color: white;
    border: solid 1px #00000029;
    padding: 10px 20px;
    border-radius: 5px;
    transition: ease .2s;
}
#lessons-details .sec{
    margin: 10px 0;
}
/* popup */
#lessons-details .popup{
    display: none;
    width: 700px;
    background-color: #6B61E1;
    color: white;
    padding: 20px;
    border-radius: 7px;
    position: absolute;
    top: 70px;
    left: 250px;
}
#lessons-details #l1:target, #lessons-details #l2:target,
#lessons-details #l3:target,
#lessons-details #l4:target,
#lessons-details #l5:target,
#lessons-details #l6:target,
#lessons-details #l7:target,
#lessons-details #l8:target{
    display: block;
}
#lessons-details a:hover{
    background-color: #6B61E1;
    color: white;
    transform: scale(1.1);
}

</style>