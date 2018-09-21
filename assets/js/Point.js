class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.id = null;
        this.angle = null;
        this.isBorder = false;
        this.nx = 0;
        this.ny = 0;
        this.module = 0;
        this.verified = false;
    }
    setId(id) {
        this.id = id;
    }
    setAngle(angle) {
        this.angle = angle;
    }
    setBorder(bool) {
        this.isBorder = bool;
    }
    setNormalizeX(normalize_x) {
        this.nx = normalize_x;
    }
    setNormalizeY(normalize_y) {
        this.ny = normalize_y;
    }
    setModule(data) {
        this.module = data;
    }
    setVerified(data) {
        this.verified = true;
    }
}