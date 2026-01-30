/**
 * Classes — instance methods and static methods.
 */
class Student {
  constructor(first, last, year) {
    this.first = first;
    this.last = last;
    this.year = year;
    this.scores = [];
  }
  addScore(s) { this.scores.push(s); return this.scores.length; }
  averageScore() {
    return this.scores.length ? this.scores.reduce((a, b) => a + b, 0) / this.scores.length : 0;
  }
  fullName() { return `${this.first} ${this.last}`; }
}

class Point {
  constructor(x, y) { this.x = x; this.y = y; }
  static distance(a, b) {
    return Math.hypot(b.x - a.x, b.y - a.y);
  }
}

const s = new Student("Ram", "Baral", 2);
s.addScore(80); s.addScore(90);
console.log(s.fullName(), s.averageScore());
console.log(Point.distance(new Point(0, 0), new Point(3, 4))); // 5
