function helloWorld(){
    return 'Hello world';
}

function greet(){
    const heading = document.querySelector('.greeting');
    heading.innerHTML = helloWorld();
}