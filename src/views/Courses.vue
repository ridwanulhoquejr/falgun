<template>

  <NavBar />

 <div class="container courses-container">

  <div class="middle">
      <div class="question">
        <h2>What would you like to learn?</h2>
      </div>
     <div class="program_element">
        <div class="left">
            <router-link :to="{name: 'CourseLesson'}">

          <div class="js item">
            <div class="js_img">
              <img src="../assets/img/js.png" alt="js logo" />
            </div>
            <div class="hr">
              <hr>
            </div>
            <div class="js_text">
              <h3>Javascript!</h3>
              <h5>It's the most popular language in the world!</h5>
            </div>
          </div>
          </router-link>

          <router-link :to="{name: 'CourseLesson'}"> 
            <div class="java item">
              <div class="java_image">
                <img src="../assets/img/java.png" alt="java Logo" />
              </div>
              <div class="hr">
                <hr>
              </div>
              <div class="java_text">
                <h3>Java!</h3>
                <h5>A high level language</h5>
              </div>
            </div> 
          </router-link>

          <router-link :to="{name: 'CourseLesson'}"> 
            <div class="c item">
              <div class="c_img">
                <img src="../assets/img/c.png" alt="c logo" />
              </div>
              <div class="hr">
                <hr>
              </div>
              <div class="c_text">
                <h3>C</h3>
                <h5>general purpose language</h5>
              </div>
            </div>
          </router-link>

          <router-link :to="{name: 'CourseLesson'}"> 
            <div class="html item">
              <div class="html_img">
                <img src="../assets/img/html.png" alt="html logo" />
              </div>
              <div class="hr">
                <hr>
              </div>
              <div class="html_text">
                <h3>HTML</h3>
                <h5>A markup language</h5>
              </div>
            </div>
          </router-link>
        </div>

        
        <div class="Right">

        <router-link :to="{name: 'CourseLesson'}">
          <div class="py item">
            <div class="py_img">
              <img src="../assets/img/py.png" alt="js logo" />
            </div>
            <div class="hr">
              <hr>
            </div>
            <div class="py_text">
              <h3>Python!</h3>
              <h5>It's the most popular language in the world!</h5>
            </div>
          </div>
         </router-link>

        <router-link :to="{name: 'CourseLesson'}"> 
          <div class="dart item">
            <div class="dart_image">
              <img src="../assets/img/dart.png" alt="java Logo" />
            </div>
            <div class="hr">
              <hr>
            </div>
            <div class="dart_text">
              <h3>Dart!</h3>
              <h5>A high level language</h5>
            </div>
          </div>
        </router-link>

        <router-link :to="{name: 'CourseLesson'}"> 
          <div class="cp item">
            <div class="cp_img">
              <img src="../assets/img/c++.png" alt="c logo" />
            </div>
            <div class="hr">
              <hr>
            </div>
            <div class="cp_text">
              <h3>C++</h3>
              <h5>general purpose language</h5>
            </div>
          </div>
        </router-link>

        <router-link :to="{name: 'CourseLesson'}">
          <div class="css item">
            <div class="css_img">
              <img src="../assets/img/css.png" alt="html logo" />
            </div>
            <div class="hr">
              <hr>
            </div>
            <div class="css_text">
              <h3>CSS</h3>
              <h5>A markup language</h5>
            </div>
          </div>
         </router-link>
      </div>
     </div>
    </div>
 </div>

</template>

<script>
import NavBar from '../components/NavBar.vue'


export default {
  components: {NavBar},

}
</script>

<style >

img {
    width: 100px;
  }
  .top {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  
  .top_line {
    display: flex;
    align-items: center;
  }
  
 
  .S {
    border: solid #d52772e3 1px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d52772e3;
    color: white;
  }
  /* header ends here */


  .middle {
    background-color: #f6f4fc;
    
    
  }
  .question {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0 30px  0;
    font-size: 1.2rem;
    
  }
  
  .program_element{
      display: flex;
      justify-content: center;
      gap: 45px;
      padding-bottom: 30px;
  }

  .program_element .left, .Right{
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
 

  .js_img, .java_image, .c_img, .html_img, .py_img, .dart_image, .cp_img, .css_img  {
      width: 100px ;
      display: flex;
      align-items: center;
      justify-content: left;
      background-color: #F8F8F8;
      border-radius: 10px 0 0 10px;
      padding: 15px;
  }

  
 
  .container.courses-container{
      min-height: calc(100vh - 100px);
      margin-top: 100px;
  }

.py, .dart, .cp, .css, .js, .java, .c, .html{
        display: flex;
        border-radius: 10px;
        height: 85px;
        width: 370px;
        background-color: white;
        border: solid 1px #C2C1C7;
        box-shadow: #C2C1C7 0px 5px 10px;
        
}
  

  .hr {
    height: 80px;  
    margin: 10px 0;
    color: black;  
    
  }

  .js_text, .java_text, .c_text,.html_text, .py_text, .dart_text, .cp_text,.css_text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      padding: 10px;
      font-size: 0.9rem;
  }

  .js_img img, .java_image img, .c_img img, .html_img img, .py_img img, .dart_image img, .cp_img img, .css_img img
  {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  h3, h5{
    color: black;
    padding: 2px;

  }
  
  

 a.router-link-active{
    color: black;
}


</style>