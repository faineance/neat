
const name = f => f.name

const arity = f => f.length

const curry = (f, ...args) => {
  const _curry = (args) =>
    arity(args) < arity(f) ? (..._args) => _curry([...args, ..._args]) : f(...args)
      
  return _curry(args)
}

const head = a => a[0]

const tail = a=> a.slice(1)

const last = a => a.slice(-1)[0]

const combine = (...xs) => [].concat(...xs)

const union = (...a) => [... new Set([].concat(...a))];

const unique = a => [... new Set(a)]

const sum = a => a.reduce((b, c) => b + c)

const product = a => a.reduce((b, c) => a * c)

const nop = () => {};

const id = o => o;

const compact = a => a.filter(id)

const constant = o => () => o

const not = o => !o

const min = a => Math.min(...a)

const max = a => Math.max(...a)

const or = curry((a, b) => a || b)

const and = curry((a, b) => a && b)  

const compose = f => g => (...xs) => f(g.apply(this, xs))

const pipeline = (...fs) => value => fs.reduce((a, b) => b(a), value)

const composeMany = (...fs) => fs.reduce((f, g) => (...args) => f(g(...args)))

export { name, arity, curry, id, constant, not, or, and, compose, composeMany }
