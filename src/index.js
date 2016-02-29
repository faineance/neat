
const name = (f) => f.name

const arity = (f) => f.length

const curry = (f, ...args) => {
  const _curry = (args) =>
    arity(args) < arity(f) ?
      (..._args) => _curry([...args, ..._args]) :
      f(...args)

  return _curry(args)
}

const id = (o) => o;

const constant = (o) => () => o

const not = (o) => !o

const or = curry((a, b) => a || b)

const and = curry((a, b) => a && b)  

const compose = f => g => (...xs) => f(g.apply(this, xs))

const composeMany = (...fs) => fs.reduce((f, g) => (...args) => f(g(...args)))

export { name, arity, curry, id, constant, not, or, and, compose, composeMany }
