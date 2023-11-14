//https://teachablemachine.withgoogle.com/models/3SlSP2PiC/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3SlSP2PiC/model.json", modelready)
}
function modelready(){
    classifier.classify(got_results())
}

function got_results(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_numbers_r=Math.floor(Math.random()*255)+1;
        random_numbers_g=Math.floor(Math.random()*255)+1;
        random_numbers_b=Math.floor(Math.random()*255)+1;
        
        document.getElementById("result_label").innerHTML='I hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+randomnumbers_r+", "+randomnumbers_g+", "+randomnumbers_b+")";
        document.getElementById("result_confidence").style.color="rgb("+randomnumbers_r+", "+randomnumbers_g+", "+randomnumbers_b+")";

        gif1=document.getElementById("bark");
        gif2=document.getElementById("meow");
        gif3=document.getElementById("roar");
        gif4=document.getElementById("moo");
      
    }
}