function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ii70vncVN/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        rgb_r = Math.floor(Math.random()*255) + 1;
        rgb_g = Math.floor(Math.random()*255) + 1;
        rgb_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("type").innerHTML = "I CAN HEAR: " + results[0].label;
        document.getElementById("accuracy").innerHTML = "ACCURACY: " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("type").style.color = "rgb("+rgb_r+","+rgb_g+","+rgb_b+")";
        document.getElementById("accuracy").style.color = "rgb("+rgb_r+","+rgb_g+","+rgb_b+")";

        a1 = document.getElementById("alienClap");
        a2 = document.getElementById("alienSnap");
        a3 = document.getElementById("alienBell");
        a4 = document.getElementById("alienBg");

        if (results[0].label == "Clap") {
            a1.src = 'aliens-01.gif';
            a2.src = 'aliens-02.png';
            a3.src = 'aliens-03.png';
            a4.src = 'aliens-04.png';
        } else if(results[0].label == "Snap"){
            a1.src = 'aliens-01.png';
            a2.src = 'aliens-02.gif';
            a3.src = 'aliens-03.png';
            a4.src = 'aliens-04.png';
        } else if(results[0].label == "Bell"){
            a1.src = 'aliens-01.png';
            a2.src = 'aliens-02.png';
            a3.src = 'aliens-03.gif';
            a4.src = 'aliens-04.png';
        } else{
            a1.src = 'aliens-01.png';
            a2.src = 'aliens-02.png';
            a3.src = 'aliens-03.png';
            a4.src = 'aliens-04.gif';
        }
    }
}
