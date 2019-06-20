var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 100;
console.log(innerHeight);
var c = canvas.getContext('2d');

//rectangle text

c.font = 'bold 33pt sans-serif';
c.fillText("GOD IS GOOD", 500, 100, 400);
/*

//line
c.beginPath();
c.moveTo(200, 0);
c.lineTo(200, 1200);
c.lineTo(0, 300);
c.moveTo(0, 300);
c.lineTo(1200, 300);
c.lineWidth = 7;
c.strokeStyle = '#Dad';
c.stroke();

//arg , circle
c.beginPath();
c.arc(100, 100, 40, 0, Math.PI * 2, false);
c.strokStyle = '#Daddad';
c.lineWidth = '3';
c.stroke();

c.beginPath();
c.arc(500, 700, 50, 0, Math.PI * 2, false);
c.strokeStyle = '#aaa';
c.lineWidth = '5';
c.stroke();
*/

function animation() {
    var quantity = document.getElementById('quantity');
    document.getElementById("animate").innerHTML = "show Me again";

    function ring(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;

        this.draw = function () {
            console.log('thank GOD!');
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            c.strokeStyle = '#aaa';
            c.lineWidth = '5';
            c.fillStyle = '#Dad';
            c.stroke();
            c.fill();
        }
        this.update = function () {
            console.log("thank GOD!");
            if (this.x + this.radius > innerWidth ||
                this.x - this.radius < 0) {
                dx = -dx;
            }
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                dy = -dy;
            }
            this.x += dx;
            this.y += dy;
            this.draw();
        }
    }

    var ring_array = [];
    for (var i = 0; i < quantity.value; i++) {
        var radius = 55;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 15;
        var dy = (Math.random() - 0.5) * 15;
        ring_array.push(new ring(x, y, dx, dy, radius));
        console.log(ring_array);
    }

    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        ring.update();
        for (var i = 0; i < ring_array.length; i++) {
            ring_array[i].update();
        }

    }
    var ring = new ring(700, 200, 33, 23, 200);

    animate();
}
