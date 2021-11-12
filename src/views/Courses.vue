<template>

 <div class="container courses-container">

  <div class="middle">
      <div class="question">
        <h1>What would you like to learn?</h1>
      </div>
     <div class="program_element">
      <div class="left">
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
        <div class="c item">
          <div class="c_img">
            <img src="../assets/img/c.png" alt="c logo" />
          </div>
          <div class="hr">
            <hr>
          </div>
          <div class="c_text">
            <h3>C</h3>
            <h4>general purpose language</h4>
          </div>
        </div>
        <div class="html item">
          <div class="html_img">
            <img src="../assets/img/html.png" alt="html logo" />
          </div>
          <div class="hr">
            <hr>
          </div>
          <div class="html_text">
            <h3>HTML</h3>
            <h4>A markup language</h4>
          </div>
        </div>
      </div>


      <div class="Right">
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
        <div class="cp item">
          <div class="cp_img">
            <img src="../assets/img/c++.png" alt="c logo" />
          </div>
          <div class="hr">
            <hr>
          </div>
          <div class="cp_text">
            <h3>C++</h3>
            <h4>general purpose language</h4>
          </div>
        </div>
        <div class="css item">
          <div class="css_img">
            <img src="../assets/img/css.png" alt="html logo" />
          </div>
          <div class="hr">
            <hr>
          </div>
          <div class="css_text">
            <h3>CSS</h3>
            <h4>A markup language</h4>
          </div>
        </div>
      </div>
     </div>
    </div>
 </div>

</template>

<script>
export default {

}
</script>

<style>

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
  
  .top_line {
    gap: 30px;
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
    text-align: center;
    height: 100px;
    margin-top: 35px;
  }
  
  .program_element{
      display: flex;
      justify-content: center;
      gap: 100px;
  }

  .js_img, .java_image, .c_img, .html_img {
      width: 100px ;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: left;
      background-color: #F8F8F8;
      border-radius: 20px 0 0 20px;
      padding: 20px;
  }
  .py_img, .dart_image, .cp_img, .css_img 
  {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: left;
    background-color: #F8F8F8;
    border-radius: 20px 0 0 20px;
    padding: 20px;
}
  .js, .java, .c, .html {
    display: flex;
    background-color: white;
    border: solid 1px #C2C1C7;
    border-radius: 10px;
    box-shadow: #C2C1C7 0px 5px 10px;
  }
  .container.courses-container{
      min-height: calc(100vh - 100px);
      margin-top: 100px;
  }
    .py, .dart, .cp, .css {
        display: flex;
        
        border: solid rgb(211, 192, 192) 1px;
        border-radius: 20px;
        width: 400px;
        background-color: white;
        box-shadow: 10px 10px 10px gray;
        
      }
  

  .hr {
    height: 80px;  
    margin: 10px 0;
    color: black;  
    
  }

  .js_text, .java_text, .c_text,.html_text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 20px;
  }
  .py_text, .dart_text, .cp_text,.css_text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
}
  .item
  {
      margin-bottom: 20px;
  }

  .js_img img, .java_image img, .c_img img, .html_img img
  {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .py_img img, .dart_image img, .cp_img img, .css_img img
  {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

</style>