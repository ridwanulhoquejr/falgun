
<template>
  <!-- dashboard starts from here -->

    <NavBar />
  
    <section id="dashboard">


        <div class="container dashboard-container">
        <profileNav />


          <div class="wrapper">

        <div class="left">
            <!-- main -->
            <div class="box main">
                <div class="top">
                    <div class="col1">
                        <h3>Pyhon</h3>
                        <p>Data Types</p>
                    </div>
                    <img src="../assets/img/python-logo.svg" alt="">
                </div>
                <a href="#" id="button">Continue</a>
            </div>

            <!-- your courses -->
            <div class="box your-courses">
                <h3>Your Courses</h3>
                <div class="course c1">
                    <img src="../assets/img/python-logo.svg" alt="">
                    <div class="container">
                        <div class="top">
                            <h4>Python</h4>
                            <p>15%</p>
                        </div>
                        <div class="progress-container">
                            <div class="progress"></div>
                        </div>
                    </div>
                </div>
                <div class="course c2">
                    <img src="../assets/img/javascript-logo.svg" alt="">
                    <div class="container">
                        <div class="top">
                            <h4>Java</h4>
                            <p>10%</p>
                        </div>
                        <div class="progress-container">
                            <div class="progress"></div>
                        </div>
                    </div>
                </div>
                <div class="course c3">
                    <img src="../assets/img/c++.svg" alt="">
                    <div class="container">
                        <div class="top">
                            <h4>C++</h4>
                            <p>3%</p>
                        </div>
                        <div class="progress-container">
                            <div class="progress"></div>
                        </div>
                    </div>
                </div>
                <a href="#" id="button">Browse Courses</a>
            </div>
        </div>


        <div class="right">
            <!-- user details -->
            <div class="box user-details">
                <img src="../assets/img/user.svg" alt="">
                <h3>{{user.displayName}}</h3>
                <p>{{user.email}}</p>
            </div>

            <!-- graph -->
            <div class="box graph">
                <img src="../assets/img/graph.svg" alt="">
                <div class="details">
                    <div class="c1"></div>
                    <p>C++ - 10%</p>
                </div>
                <div class="details">
                    <div class="c2"></div>
                    <p>Java - 20%</p>
                </div>
                <div class="details">
                    <div class="c3"></div>
                    <p>Python - 70%</p>
                </div>
            </div>
        </div>
              </div>  

        </div>
    </section>
</template>

<script>
import { ref } from '@vue/reactivity'
import profileNav from '../components/profileNav.vue'
import getUser from '../composables/getUser'
import NavBar from '../components/NavBar.vue'



export default {

    components: { profileNav, NavBar },

    setup(){
        const { user } = getUser()

        const inProfile = ref(true)

        console.log(user);


        
    return { user, inProfile }
    }

}
</script>

<style >


    
/* dashboard css */
#dashboard{

    width: 100%;
    color: #221F36;
}
#dashboard h3{
    font-size: 18px;
}
#dashboard h4{
    font-size: 16px;
}
#dashboard p{
    font-size: 14px;
}
.dashboard-container{
    min-height: calc(100vh - 100px);
    margin-top: 100px!important;
    flex-direction: column;

}
.wrapper{
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 50px;
    padding-bottom: 10px;
    
}

.left, .right{

    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: max-content;
    gap: 10px;
    

}
.left .box{
    width: 350px;
    padding: 15px;
}
.right .box{
    width: 200px;
    padding: 20px;
}
.box{
    
    background-color: white;
    border: solid 1px #C2C1C7;
    border-radius: 7px;
    box-shadow: #C2C1C7 0px 5px 10px;
    padding: 10px;
}
#button{
    color: white;
    background-color: #43A8EB;
    display: block;
    text-align: center;
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
    transition: ease .2s;
}
#button:hover{
    background-color: #1884cc;
}

/* main */

.box.main{
    display: flex;
    flex-direction: column;
}
.main .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.main img{
    width: 50px;
}

/* your courses */
.your-courses .course{
    /* width: 100%; */
    background-color: #B4DEF9;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 5px 20px 5px 5px;
    border-radius: 5px;
    margin: 20px 0;
}
.your-courses .course img{
    width: 30px;
}
.your-courses .course .top{
    display: flex;
    justify-content: space-between;
}
.your-courses .course .progress-container{
    width: 100%;
    background-color: white;
    border-radius: 2px;
    margin: 5px 0;
}
.your-courses .course .progress{
    height: 4px;
    border-radius: 2px;
}
.your-courses .c1 .progress{
    width: 15%;
    background-color: #364F6B;
}
.your-courses .c2 .progress{
    width: 10%;
    background-color: #61C9D7;
}
.your-courses .c3 .progress{
    width: 3%;
    background-color: #F0535B;
}

/* user details */
.user-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
.user-details img{
    width: 60px;
}

/* graph */
.graph{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
}
.graph img{
    width: 100px;
    margin: 0 auto;
}
.graph .details{
    display: flex;
    align-items: center;
    gap: 10px;
}
.graph .details div{
    width: 15px;
    height: 15px;
    border-radius: 2px;
}
.graph .details .c1{
    background-color: #F0535B;
}
.graph .details .c2{
    background-color: #61C9D7;
}
.graph .details .c3{
    background-color: #364F6B;
}

</style>