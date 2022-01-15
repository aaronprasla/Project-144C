nosex = 0;
nosey = 0;

function preload() {
	clown_nose = loadImage('https://i.postimg.cc/WzXXNf66/R.png');
}

function draw() {
	image(video, 0, 0, 300, 300);
	image(clown_nose, nosex, nosey, 30, 30);
}

function setup() {
	canvas = createCanvas(300, 300);
	canvas.center();

	video = createCapture(VIDEO);
	video.size(300, 300);
	video.hide();

	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}

function take_snapshot() {
	save('ClownNoseFilterImage.png')
}

function modelLoaded() {
	console.log('model loaded');
}

function gotPoses(results) {
	if(results.length > 0){
		console.log(results);
		console.log('x pos = ' + results[0].pose.nose.x);
		console.log('y pos = ' + results[0].pose.nose.y);

		nosex = (results[0].pose.nose.x) - 15;
		nosey = (results[0].pose.nose.y) - 15;
	}
}