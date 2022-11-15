const STATE = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};

// check if value is also a promise
function isThenable(val) {
  return val instanceof MyPromise;
}

class MyPromise {
  constructor(callback) {
    this.state = STATE.PENDING;
    this.value = undefined;
    this.handlers = [];
    try {
      callback(this._resolve, this._reject, ms);
    } catch (err) {
      this._reject(err);
    }
  }

  _resolve = (value) => {
    this.updateResult(value, STATE.FULFILLED);
  };

  _reject = (error) => {
    this.updateResult(error, STATE.REJECTED);
  };

  updateResult = (value, state) => {
    // This is to make the processing async
    setTimeout(() => {
      // process the promise if it is still in pending state
      if (this.state !== STATE.PENDING) {
        return;
      }

      // check if value is also a promise
      if (isThenable(value)) {
        return value.then(this._resolve, this._reject);
      }

      this.value = value;
      this.state = state;

      // execute handlers if already attached
      this.executeHandlers();
    }, 0);
  };

  addHandlers = (handlers) => {
    this.handlers.push(handlers);
    this.executeHandlers();
  };

  executeHandlers = () => {
    // Don't execute handlers if promise is not yet fulfilled or rejected
    if (this.state === STATE.PENDING) {
      return null;
    }

    // We have multiple handlers because add them for .finally block too
    this.handlers.forEach((handler) => {
      if (this.state === STATE.FULFILLED) {
        return handler.Success(this.value);
      }
      return handler.Failure(this.value);
    });
    // After processing all handlers, we reset it to empty.
    this.handlers = [];
  };

  then = (onSuccess, onFail) => {
    return new MyPromise((res, rej) => {
      this.addHandlers({
        Success: function (value) {
          // if no onSuccess provided, resolve the value for the next promise chain
          if (!onSuccess) {
            return res(value);
          }
          try {
            return res(onSuccess(value));
          } catch (err) {
            return rej(err);
          }
        },
        Failure: function (value) {
          // if no onFail provided, reject the value for the next promise chain
          if (!onFail) {
            return rej(value);
          }
          try {
            return res(onFail(value));
          } catch (err) {
            return rej(err);
          }
        },
      });
    });
  };

  // Since then method take the second function as onFail, 
  //we can leverage it while implementing catch
  catch = (onFail) => {
    return this.then(null, onFail);
  };
}

//function to generate a random number
function getNumber() {
  return Math.round(Math.random() * 1000);
}

//Promise resolution/rejection time
let ms = 3000;

const promise = new MyPromise((resolve, reject, ms) => {
  let num = getNumber();
  setTimeout(() => {
    //If randomNumber is divisible by 5 it will reject the promise 
    //else it will resolve the promise
    if (num % 5 === 0) {
      reject(num);
    } else {
      resolve(num);
    }
  }, ms);
});

promise
  .then((x) => console.log(`Resolved with value = ${x}`))
  .catch((x) => console.log(`Rejected with value = ${x}`));
