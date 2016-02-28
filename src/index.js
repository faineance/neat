const id = (o) => o;

const compose = f => g => (...xs) => f(g.apply(this, xs))

const composeMany = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const curry = (fn, ...args) => {
  let _curry = (args) =>
    args.length < fn.length ?
      (..._args) => _curry([...args, ..._args]) :
      fn(...args)

  return _curry(args);
}

export { id, compose, composeMany, curry }
