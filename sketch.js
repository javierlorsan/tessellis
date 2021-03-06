class Random {
    constructor(e) {
        this.seed = e
    }
    random_dec() {
        return this.seed ^= this.seed << 13, this.seed ^= this.seed >> 17, this.seed ^= this.seed << 5, (this.seed < 0 ? 1 + ~this.seed : this.seed) % 1e3 / 1e3
    }
    random_num(e, r) {
        return e + (r - e) * this.random_dec()
    }
    random_int(e, r) {
        return Math.floor(this.random_num(e, r + 1))
    }
    random_choice(e) {
        return e[Math.floor(this.random_num(0, .99 * e.length))]
    }
}
let colors1 = ["#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#48cae4", "#90e0ef", "#ade8f4", "#caf0f8", "#D9F1F6"];
let colors2 = ["#03071e", "#370617", "#6a040f", "#9d0208", "#d00000", "#dc2f02", "#e85d04", "#f48c06", "#faa307", "#F5B034"];
let colors3 = ["#ffba08", "#f8f9fa", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#6c757d", "#495057", "#343a40", "#212529"];
let colors4 = ["#001219", "#005f73", "#0a9396", "#94d2bd", "#e9d8a6", "#ee9b00", "#ca6702", "#bb3e03", "#ae2012", "#9b2226"];
let colors5 = ["#582f0e", "#7f4f24", "#936639", "#a68a64", "#b6ad90", "#c2c5aa", "#a4ac86", "#656d4a", "#414833", "#333d29"];
let colors6 = ["#10002b", "#240046", "#3c096c", "#5a189a", "#7b2cbf", "#9d4edd", "#c77dff", "#e0aaff", "#E3B9FB", "#D9C5E5"];
let colors7 = ["#590d22", "#800f2f", "#a4133c", "#c9184a", "#ff4d6d", "#ff758f", "#ff8fa3", "#ffb3c1", "#ffccd5", "#fff0f3"];
let colors8 = ["#ffedd8", "#f3d5b5", "#e7bc91", "#d4a276", "#bc8a5f", "#a47148", "#8b5e34", "#6f4518", "#603808", "#583101"];
let colors9 = ["#007f5f", "#2b9348", "#55a630", "#80b918", "#aacc00", "#bfd200", "#d4d700", "#dddf00", "#eeef20", "#ffff3f"];
let colors10 = ["#e8a598", "#ffb5a7", "#fec5bb", "#fcd5ce", "#fae1dd", "#f8edeb", "#f9e5d8", "#f9dcc4", "#fcd2af", "#fec89a"];
let colors11 = ["#ff0a54", "#ff477e", "#ff5c8a", "#ff7096", "#ff85a1", "#ff99ac", "#fbb1bd", "#f9bec7", "#f7cad0", "#fae0e4"];
let colors12 = ["#ff7b00", "#ff8800", "#ff9500", "#ffa200", "#ffaa00", "#ffb700", "#ffc300", "#ffd000", "#ffdd00", "#ffea00"];
let colors13 = ["#d8f3dc", "#b7e4c7", "#95d5b2", "#74c69d", "#52b788", "#40916c", "#2d6a4f", "#0C6A40", "#5A9077", "#5FD49D"];
let colors14 = ["#ff6d00", "#ff7900", "#ff8500", "#ff9100", "#ff9e00", "#240046", "#3c096c", "#5a189a", "#7b2cbf", "#9d4edd"];
let colors15 = ["#99e2b4", "#88d4ab", "#78c6a3", "#67b99a", "#56ab91", "#469d89", "#358f80", "#248277", "#14746f", "#036666"];
let colors16 = ["#757bc8", "#8187dc", "#8e94f2", "#9fa0ff", "#ada7ff", "#bbadff", "#cbb2fe", "#dab6fc", "#ddbdfc", "#e0c3fc"];
let colors17 = ["#7A5D41", "#C4B4A8", "#59ADCC", "#F9A50B", "#DDE3E1", "#A75506", "#2C5838", "#371A0A", "#739384", "#130C0B"];
let colors18 = ["#105F85", "#2C5838", "#7F7168", "#371A0A", "#F9A50B", "#A75506", "#59ADCC", "#C6A076", "#739384", "#89520E"];
let colors19 = ["#576A7C", "#16141A", "#553920", "#82624C", "#B8B2AE", "#774B24", "#ECEDEA", "#BFC4CC", "#DCD8D1", "#8AAFC7"];
let colors20 = ["#8AAFC7", "#BFC4CC", "#A09083", "#774B24", "#585150", "#D1CAC4", "#DCD8D1", "#82624C", "#D8DBE1", "#8198A5"];
let colors21 = ["#8AAFC7", "#553920", "#A09083", "#585150", "#16141A", "#82624C", "#BFC4CC", "#493D3B", "#576A7C", "#100908"];
let colors22 = ["#AD666A", "#A28471", "#CC8F75", "#4B4F51", "#3F3236", "#48403D", "#CE9292", "#70625D", "#191312", "#A89491"];
let colors23 = ["#2A272C", "#E6C2C0", "#CC8F75", "#E1A69F", "#48403D", "#A28471", "#191312", "#CCC3BD", "#A89491", "#432C24"];
let colors24 = ["#CCC3BD", "#EFE6E2", "#C5B09F", "#3F3236", "#2A272C", "#A89491", "#E1A69F", "#432C24", "#AD666A", "#191312"];
let colors25 = ["#64757E", "#A48151", "#E4EDF2", "#090707", "#968A7D", "#0A1929", "#D2A979", "#1D1A11", "#3E3120", "#000410"];
let colors26 = ["#968A7D", "#1D1A11", "#00132A", "#A48151", "#9DB2BD", "#E4EDF2", "#3E3120", "#CACCCD", "#000410", "#5C5A52"];
let colors27 = ["#A48151", "#103347", "#5C5A52", "#3E3120", "#D2A979", "#968A7D", "#00132A", "#266070", "#090707", "#D79D54"];
let colors28 = ["#DF4E0A", "#B21704", "#EEA010", "#BD610A", "#303B52", "#B23E08", "#5E1F06", "#537C0B", "#A0663E", "#6FAD9E"];
let colors29 = ["#F6BA11", "#E39D4B", "#9F630C", "#B21704", "#6FAD9E", "#F1C55D", "#BD610A", "#303B52", "#C37D0E", "#E5870E"];
let colors30 = ["#EEA010", "#DF4E0A", "#B21704", "#537C0B", "#F4E5C7", "#F1C55D", "#B69145", "#E39D4B", "#EED198", "#6FAD9E"];
let colors31 = ["#10AC4B", "#E2BCB1", "#53A408", "#B2C12B", "#EBDEA3", "#20C282", "#222124", "#C58C2D", "#274FAA", "#0B682D"];
let colors32 = ["#222124", "#E7C02C", "#4F2A9A", "#EBDEA3", "#4C3033", "#B2C12B", "#E2B07F", "#0B682D", "#54A243", "#274FAA"];
let colors33 = ["#A6B996", "#4C3033", "#E7C02C", "#0B682D", "#8562CA", "#97F209", "#F6F4F2", "#8F7791", "#B2C12B", "#EBDEA3"];
let paleta = [colors1, colors2, colors3, colors4, colors5, colors6, colors7, colors8, colors9, colors10, colors11, colors12, colors13, colors14, colors15, colors16, colors17, colors18, colors19, colors20, colors21, colors22, colors23, colors24, colors25, colors26, colors27, colors28, colors29, colors30, colors31, colors32, colors33];
let colores = [["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4"], ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"], ["#FA053F", "#FEB200", "#03FDBC", "#04BEFB", "#06617F"], ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"], ["#C2C8D4", "#2b9348", "#BF6550", "#80b918", "#8C32CA", "#C61D34", "#d4d700", "#580D14", "#eeef20", "#C70A27"], ["#54478c", "#2c699a", "#048ba8", "#0db39e", "#16db93", "#83e377", "#b9e769", "#efea5a", "#f1c453", "#f29e4c"].reverse()];
let lncolors1 = ["#fefae0", "#edf6f9", "#e9f5db"];
let lncolors2 = ["#1b4332", "#003459", "#5e503f"];
let clusters = [];
let hulls = [];
let img;
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;
let sz = Math.min(WIDTH, HEIGHT);
let palette, palette2;
let rndN;
let tokenHash = fxhash;
let seed = Math.abs(hashes[0]);
let hu = 1;
let fpoints = [];
let strmove = true;
let stopmov = true;
let mk;
let rdhow = sz;
let rddir;
let arridx = '';
let margin = 30, u = 20;
let idCount = 0;
let arcs = [];
let cline1;
let cline2;
let bgcolor = '#ffffff', bgstk = '#A2A3A5';
let R = new Random(seed);
let tkid = R.random_int(0, 999);
let tp = 3; //R.random_int(0, 11);
let sb = R.random_int(30, 50);
let strk = R.random_dec();
let _palette, _painting;
let mk2;

if (tkid % 2 == 0) { bgcolor = '#000000'; bgstk = '#ffffff'; }
if (tp == 2 && strk >= 0.5) {bgcolor = '#ffffff'; bgstk = '#A2A3A5';}

function setup() {

    createCanvas(sz, sz);
    img = createGraphics(sz, sz);
    let size = sz;
    rndN = R.random_int(2, 4);
    mk = createGraphics(sz, sz);
    mk2 = createGraphics(sz, sz);
    rddir = R.random_int(0, 2);
    pixelDensity(1);
    centerCanvas();

    mk2.background("#000000");

    let colArr = [];
    for (t = 0; t < 10; t++) {
        colArr.push(R.random_choice(paleta)[R.random_int(0, 9)]);
    }
    palette = colArr;

    cline1 = color(R.random_choice(lncolors1))
    cline2 = color(R.random_choice(lncolors2))

    for (let i = 0; i < width * height * 5 / 100; i = i + 1) {
        fpoints.push({ x: R.random_num(0, width), y: R.random_num(0, height) });
    }

    let points = [];
    for (let i = 0; i < 9000; i++) {
        points.push(createVector(width / 2 + R.random_num(-size / 2, size / 2), height / 2 + R.random_num(-size / 2, size / 2)));
    }

    clusters = divide(points);
    hulls = [convexHull(clusters[0]), convexHull(clusters[1])];
    for (let x = sb / 2; x < width - sb / 2; x += sb) {
        for (let y = sb / 2; y < height - sb / 2; y += sb) {
            createblocks(x, y);
        }
    }
    //initarcos();
    makeTl();
    //if (tp == 2 && strk >= 0.5) {
    //} else { if (R.random_dec() > 0.7) filtro(R.random_int(0, 2)); }
    
    //writeArcs();
    //createlines();
}

function centerCanvas() {
    var e = document.body.style;
    e.display = "flex", e.height = "100vh", e.alignItems = "center", e.justifyContent = "center"
}

function filtro(type) {

    img.push()
    switch (type) {
        case 0:
            img.filter(INVERT);
            break;
        case 1:
            img.filter(DILATE);
            break;
        case 2:
            img.filter(ERODE);
            break;
    }
    img.pop();
}

function initarcos() {

    let divPossibilities = [1];
    while (divPossibilities.length == 1) {
        for (let d of [2, 3, 4, 6]) {
            if (R.random_dec() < 1 / 2) divPossibilities.push(d);
        }
    }

    let y = margin, s = 0;
    while (y < sz - margin) {
        s = R.random_choice(divPossibilities) * u;
        for (let x = margin; x < sz - margin - 0.1; x += s) {
            makeTile(x, y, s);
        }
        y += s;
    }

    for (let x = margin; x < sz - margin - u / 2; x += 2 * u) {
        addArc(x + u, margin, u, PI, PI * 2);
        addArc(x + u, sz - margin, u, 0, PI);
    }
    for (let y = margin; y < sz - margin - u / 2; y += 2 * u) {
        addArc(margin, y + u, u, PI / 2, (3 * PI) / 2);
        addArc(sz - margin, y + u, u, (3 * PI) / 2, (5 * PI) / 2);
    }

}

function makeTl() {

    img.noiseSeed(floor(R.random_num(0, 10e6)));
    const minSize = 29; //R.random_int(1, 5);
    const maxSize = 59; //minSize + 5;
    const noiseScale = 9e-11;
    let n = R.random_int(5, 50);
    const alph = R.random_int(75, 255);
    const rdln1 = R.random_int(0, 10);
    const rdpoly = R.random_int(5, 6);
    const rdlrpal = R.random_int(0, colores.length - 1)
    let rseed = floor(R.random_num(0, 10e6));
    let rdcurv = R.random_int(0, 1);
    let x, y;

    let mR = R.random_int(15, 25)
    let maxR = sz / 2 - sz / mR
    
    if ((tp < 2) && strk > 0.5) img.noStroke();
    let radius = sz * 0.00;
    img.translate(width / 2, height / 2);
    let t = 0;
    let rd1 = random(0, 75);
    let rd2 = random(0, 55);
    //img.rotate(PI / 3);
    for (let i = 0; i < 10000; i++) {
        let size;
        if (i > 6000) {
            size = R.random_num(minSize, maxSize);
            //size = Math.abs(map((i / 6000) ** 0.8, 0, 1, 200, minSize));
        } else {
            size = map((i / 6000) ** 0.8, 0, 1, 200, minSize);
        }

        let d = random(radius / 3, radius / R.random_int(1,8));
        x = rd1 * random(-d, d) / t;
        y = rd2 * random(-d, d) / t;

        /*if (i < 10000) {
            //circulo centrado
            x = R.random_num(sz / 2, maxR);
            y = R.random_num(sz / 2, maxR);
        } else {
            //barra vertical
            x = R.random_num(sz / 2, maxR);
            y = R.random_num(0, sz);
        }

        if (i < 10000) {
            //circulo centrado
            //x = R.random_num(sz / 2, maxR);
            //y = R.random_num(sz / 2, maxR);
        } else {
            //barra horizontal
            x = R.random_num(0, sz);
            y = R.random_num(sz / 2, maxR);
        }*/
       

        img.strokeWeight(size);

       if (floor(x / sz * n ) % 2 == 0) {
            if ((tp < 3) && strk > 0.5) {
                img.fill(lerpColorScheme(curlNoise(x * noiseScale, (y + 0) * noiseScale, 0), colores[rdlrpal], alph));
                if (tp == 2) img.strokeWeight(1);
            } else {
                img.stroke((lerpColorScheme(curlNoise(x * noiseScale, (y + 0) * noiseScale, 0), colores[rdlrpal], alph)));
            }
        } else {
            if ((tp < 3) && strk >= 0.5) {
                img.fill(lerpColorScheme(curlNoise(x * noiseScale, (y + 0) * noiseScale, 0), palette, alph));
            }
            else {
                img.stroke((lerpColorScheme(curlNoise(x * noiseScale, (y + 0) * noiseScale, 0), palette, alph)))
                if (rdln1 == 1 && (tp > 2 && tp != 9 && tp != 10)) img.strokeWeight(1);
            }
        }

        drawimage(x, y, size, rdpoly, rseed, rdcurv);

        t += random(0.1, 0.5);
        if (radius < sz * 1) {
            radius += random(1, 3);
        }
    }

}

function drawimage(x, y, size, rdpoly, rdcshape, rdupdw) {

    switch (tp) {
        case 0:
            img.circle(x, y, size);
            break;
        case 1:
            img.rect(x, y, size, size);
            break;
        case 2:
            poly(x, y, size, rdpoly)
            break;
        case 3:
            customShape(x, y, rdcshape);
            break;
        case 4:
            img.line(x, y, x, y + size);
            break;
        case 5:
            img.line(x, y, x + size, y);
            break;
        case 6:
            img.line(x, y, x + size, y + size);
            break;
        case 7:
            img.line(x, y, x + size, y - size);
            break;
        case 8:
            img.line(x, y, x + size, y + size);
            img.line(x, y, x + size, y - size);
            break;
        case 9:
            img.line(x, y, x - size, y - size);
            img.rect(x, y, size, size);
            break;
        case 10:
            img.line(x, y, x + size, y + size);
            img.circle(x, y, size);
            break;
        case 11:
            img.noFill();
            img.strokeWeight(5)
            if (rdupdw == 0) { img.arc(x, y, size * 2, size, (3 * PI) / 2, 2 * PI); }
            else { img.arc(x, y, size * 2, size, PI / 2, PI); }
            break;
    }

}

function poly(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    img.beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    img.endShape(CLOSE);
}

function customShape(ox, oy, seed) {
    img.beginShape();
    for (let i = 0; i < 15; i++) {
        tStep = lerp(-1, 1, noise(seed, i * 0.1));
        t += tStep;
        let x = cos(t) + ox;
        let y = sin(t) + oy;
        vertex(x, y);
    }
    img.endShape(CLOSE);
}

function draw() {


    background(bgcolor);
    stroke(bgstk);

    for (let fp of fpoints) {
        strokeWeight(1);
        point(fp.x, fp.y);
    }

    let rdhl = 0

    mk.clear();

    for (let th = 0; th < hulls.length; th++) {
        if (hulls[th].length > 2) {
            mk.beginShape();
            for (let p of hulls[th]) {
                if (strmove && !stopmov) {
                    frameRate(60);
                    //if (frameCount % 2 == 0) rdhow = sz - frameCount;
                    //if (p.x > rdhow) {
                        rdhl = getNoiseVal(p.x, p.y, lerp(p.x, p.y, 0.5));
                    //} else {
                    //    rdhl = 0;
                    //}
                    switch (rddir) {
                        case 0:
                            vertex(p.x + rdhl, p.y + rdhl);
                            break;
                        case 1:
                            vertex(p.x, p.y + rdhl);
                            break;
                        case 2:
                            vertex(p.x + rdhl, p.y);
                            break;
                    }
                } else {
                    vertex(p.x, p.y);
                }
            }
            mk.endShape(CLOSE);
            if (th == hu) { hu++; }
        }
    }

    imgClone = img.get();
    imgClone.mask(mk.get());
    image(imgClone, 0, 0);
}

function lerpColorScheme(n, colors, alph) {
    let i = n * (colors.length) % (colors.length);
    let color1 = color(colors[floor(i)]);
    let color2 = color(colors[(floor(i) + 1) % colors.length]);
    color1.setAlpha(alph);
    color2.setAlpha(alph);
    return lerpColor(color1, color2, i % 1);
}

function curlNoise(x, y, z) {
    const eps = 0.0000001;
    let n1, n2, a, b;
    x = x / eps;
    y = y / eps;
    n1 = noise(x, y + eps, z);
    n2 = noise(x, y - eps, z);
    a = (n1 - n2) / (2 * eps);

    n1 = noise(x + eps, y, z);
    n2 = noise(x - eps, y, z);

    b = (n1 - n2) / (2 * eps);

    let angle = createVector(a, -b).heading();
    if (angle < 0) angle += TAU;
    return angle / TAU;

}

function makeTile(x, y, s) {
    let dMin = s == u ? 0 : s == 2 * u ? 1 : s == 3 * u ? 2 : s == 4 * u ? 2 : 3;
    let dMax = s == u ? 1 : s == 2 * u ? 2 : s == 3 * u ? 3 : s == 4 * u ? 4 : 8;
    let d1 = floor(R.random_num(dMin, dMax + 1));
    let d2 = (2 * s) / u - d1 - 1;
    for (let i = 1; i <= d1; i++) {
        addArc(x, y, i * u, 0, PI / 2);
        addArc(x + s, y + s, i * u, PI, (3 * PI) / 2);
    }
    for (let i = 1; i <= d2; i++) {
        addArc(x + s, y, i * u, PI / 2, PI);
        addArc(x, y + s, i * u, (3 * PI) / 2, 2 * PI);
    }
}

function addArc(x, y, d, theta1, theta2) {
    let eps = 1;
    let id = -1;
    let x1 = x + (d / 2) * cos(theta1);
    let y1 = y + (d / 2) * sin(theta1);
    let x2 = x + (d / 2) * cos(theta2);
    let y2 = y + (d / 2) * sin(theta2);
    let matches = [];
    for (let a of arcs) {
        let a_x1 = a.x + (a.d / 2) * cos(a.theta1);
        let a_y1 = a.y + (a.d / 2) * sin(a.theta1);
        let a_x2 = a.x + (a.d / 2) * cos(a.theta2);
        let a_y2 = a.y + (a.d / 2) * sin(a.theta2);
        if (
            (abs(x1 - a_x1) < eps && abs(y1 - a_y1) < eps) ||
            (abs(x1 - a_x2) < eps && abs(y1 - a_y2) < eps) ||
            (abs(x2 - a_x1) < eps && abs(y2 - a_y1) < eps) ||
            (abs(x2 - a_x2) < eps && abs(y2 - a_y2) < eps)
        ) {
            matches.push(a.id);
        }
    }
    if (matches.length > 0) {
        id = matches[0];
        if (matches.length == 2) {
            for (let a of arcs) {
                if (a.id == matches[1]) a.id = matches[0];
            }
        }
    } else {
        id = idCount++;
    }
    arcs.push({
        x: x,
        y: y,
        d: d,
        theta1: theta1,
        theta2: theta2,
        id: id,
    });
}

function writeArcs() {

    img.strokeWeight(10);
    cline1.setAlpha(170);
    cline2.setAlpha(170);
    img.noFill();
    let idCount = new Array(arcs.length).fill(0);
    for (let a of arcs) {
        idCount[a.id]++;
    }

    id = idCount.indexOf(max([...idCount]));

    for (let a of arcs) {
        if (a.id == id) {
            const [r, g, b] = img.get(a.x, a.y);
            if (r <= 155 && b <= 155 && g <= 155) { img.stroke(cline1); } else { img.stroke(cline2); }
            img.arc(a.x, a.y, a.d, a.d, a.theta1, a.theta2);
        }
    }

}

function createlines() {
    img.strokeWeight(15);
    img.stroke("#ffffff");
    img.line(width / 2, 0, width / 2, height);
    img.line(0, height/2, width, height/2);
}



function keyPressed() {
    if (key == ' ') {
        stopmov = true;
    }
    if (key == 'c') {
        stopmov = false;
    }
    if (key == '0') {
        rddir = 0;
    }
    if (key == '1') {
        rddir = 1;
    }
    if (key == '2') {
        rddir = 2;
    }
}

function getNoiseVal(x, y, k) {
    const ns = 0.005;
    const no = frameCount / 100;
    return (noise(x * ns + no, y * ns + no) - 0.5) * k;
}

function mouseReleased() {
    createblocks(mouseX, mouseY);
}

function createblocks(x, y) {
    let p = createVector(x, y);
    let argmin = -1;
    let minDist = width * height;

    for (let i = 0; i < clusters.length; i++) {
        for (let q of clusters[i]) {
            let d = distSquared(p, q);
            if (d < minDist) {
                argmin = i;
                minDist = d;
                continue;
            }
        }
    }

    if (hulls[argmin].length > 5) {
        let clu = clusters.splice(argmin, 1)[0];
        let newClusters = divide(clu);
        clusters = [...clusters, ...newClusters];
        hulls.splice(argmin, 1);
        hulls = [...hulls, convexHull(newClusters[0]), convexHull(newClusters[1])];
    }

    return false;
}

function divide(points) {
    let clusters = [];

    let centroids = [];
    for (let i = 0; i < 2; i++) {
        let c;
        do {
            c = R.random_choice(points);
        } while (centroids.indexOf(c) != -1)
        centroids.push(c);
        clusters.push([]);
    }

    for (let p of points) {
        let argmin = 0;
        let minDist = distSquared(p, centroids[0]);
        for (let i = 1; i < 2; i++) {
            let d = distSquared(p, centroids[i]);
            if (d < minDist) {
                minDist = d;
                argmin = i;
            }
        }
        clusters[argmin].push(p);
    }

    return clusters;
}

function convexHull(points) {
    points.sort((p, q) => p.x - q.x);
    let hull = [];
    let i = 0;
    let endPoint = 0;
    let pointOnHull = points[0];
    do {
        hull.push(pointOnHull);
        endPoint = points[0];
        for (let j = 0; j < points.length; j++) {
            let p = p5.Vector.sub(endPoint, pointOnHull);
            let q = p5.Vector.sub(points[j], pointOnHull);
            if (endPoint.equals(pointOnHull) || (p.cross(q)).z < 0) {
                endPoint = points[j];
            }
        }
        i++;
        pointOnHull = endPoint;
    } while (typeof endPoint !== 'undefined' && !endPoint.equals(points[0]));
    return hull;
}

function distSquared(p, q) {
    return sq(p.x - q.x) + sq(p.y - q.y);
}

let rpal = R.random_int(0, 9);

switch (rpal) {
    case 0:
        _palette = 'Pedrera';
        break;
    case 1:
        _palette = 'Guel';
        break;
    case 2:
        _palette = 'Batllo';
        break;
    case 3:
        _palette = 'Vicens';
        break;
    case 4:
        _palette = 'Cripta';
        break;
    case 5:
        _palette = 'capricho';
        break;
    default:
        _palette = 'random';
        break;
}

switch (tp) {
    case 0:
        _painting = 'Circles';
        break;
    case 1:
        _painting = 'Rects';
        break;
    case 2:
        _painting = 'Polygon';
        break;
    case 3:
        _painting = 'Customshape';
        break;
    case 4:
        _painting = 'lines';
        break;
    case 5:
        _painting = 'lines';
        break;
    case 6:
        _painting = 'lines';
        break;
    case 7:
        _painting = 'lines';
        break;
    case 8:
        _painting = 'lines';
        break;
    case 9:
        _painting = 'lines & rects';
        break;
    case 10:
        _painting = 'lines & circles';
        break;
    case 11:
        _painting = 'Arcs';
        break;
}

function getRar() {

    let rdrar = R.random_dec();
    if (rdrar < 0.5) return "low"
    if (rdrar < 0.9) return "medium"
    else return "high"

}

function getbgcolor() {
    if (bgcolor == '#ffffff') return 'light'
    else return 'dark'
}

window.$fxhashFeatures = {
    "blocks": sb,
    "palette": _palette,
    "painting": _painting,
    "background": getbgcolor(),
    "super": getRar()
}