const navbar = () => {
    let cart = `<div id="nav-cont">
        <a href="index.html">Home</a>
        <a href="quiz.html">Quiz</a>
        <a href="questions.html">Questions</a>
    </div>`


    document.getElementById("nav").innerHTML = cart;
};
navbar();
export { navbar };