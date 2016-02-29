
const name = (f) => f.name

const arity = (f) => f.length

const curry = (fn, ...args) => {
  const _curry = (args) =>
    arity(args) < arity(fn) ?
      (..._args) => _curry([...args, ..._args]) :
      fn(...args)

  return _curry(args)
}

const id = (o) => o;

const constant = (o) => () => o

const not = (o) => !o

const or = curry((a, b) => a || b)

const and = curry((a, b) => a && b)  

const compose = f => g => (...xs) => f(g.apply(this, xs))

const composeMany = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

export { name, arity, curry, id, constant, not, or, and, compose, composeMany }
