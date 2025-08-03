class SpeedClock {

  constructor() {
    this._startTime = NaN;
    this._totalElapsed = 0;
    this._running = false;
    this._speedFactor = 1;
  }

  /**
   * start the stopwatch
   * @returns {SpeedClock} instance
   */
  start(speedFactor) {
    if (this._running) {
      this.stop();
    }
    if (typeof speedFactor !== "undefined") {
      this._speedFactor = speedFactor;  
    }
    this._startTime = performance.now();
    this._running = true;
    return this;
  }

  /**
   * stop the stopwatch
   * @returns instance
   */
  stop() {
    if (this._running && !Number.isNaN(this._startTime)) {
      this._running = false;
      this._totalElapsed += (performance.now() - this._startTime) * this._speedFactor * 1e-3;
    }
    return this;
  }

  /**
   * reset the stopwatch
   * @returns instance
   */
  reset() {
    this._totalElapsed = 0;
    this._startTime = this._running ? performance.now() : NaN;
    return this;
  }

  /**
   * get run status
   * @returns {boolean} true if running
   */
  get running() {
    return this._running;
  }

  /**
   * get elapsed time
   * @returns {number} elapsed time
   */
  get elapsedTime() {
    return this._running
      ? this._totalElapsed + (performance.now() - this._startTime) * this._speedFactor * 1e-3
      : this._totalElapsed;
  }
  
  /**
   * get speed factor
   * @returns {number} speed factor
   */
  get speedFactor() {
    return this._speedFactor;
  }
  
  /**
   * set speed factor
   */
  set speedFactor(value) {
    this.stop().start(value);
  }
}