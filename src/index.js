
const name = (f) => f.name

const arity = (f) => f.length

const curry = (fn, ...args) => {
  let _curry = (args) =>
    args.length < fn.length ?
      (..._args) => _curry([...args, ..._args]) :
      fn(...args)

  return _curry(args);
}

const id = (o) => o;

const constant = (o) => ( () => o )

const not = (o) => !o

const or = curry((a, b) => a || b)

const and = curry((a, b) => a && b)

const trampoline = (f) => {
    while (f && f instanceof Function) {
        f = f();
    }
    return f;
}


const compose = f => g => (...xs) => f(g.apply(this, xs))

const composeMany = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));


export { id, compose, composeMany, curry }
 