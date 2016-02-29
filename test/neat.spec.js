import chai from 'chai'
import * as neat from '../lib/neat.js'

chai.expect()
chai.config.showDiff = false;
const expect = chai.expect


describe('Given an instance of my library', () => {
  describe('name', () => {

    it('should return the name of the function given', () => {
      expect(neat.name(Math.pow)).to.be.equal("pow")
    })
  })

  describe('arity', () => {

    it('should return the arity of the function given', () => {
      expect(neat.arity(Math.pow)).to.be.equal(2)
    })
  })

  describe('curry', () => {

    it('should return the curried version of the function given', () => {
      let curried = neat.curry(Math.pow)
      expect(curried(3)(4)).to.be.equal(81)
    })
  })

  describe('id', () => {

    it('should return the param supplied to it', () => {
      expect(neat.id(0)).to.be.equal(0)
    })
  })

  describe('constant', () => {

    it('should return a function taking no params and return the param given', () => {
      expect(neat.constant("Hello World")()).to.be.equal("Hello World")
    })
  })

  describe('not', () => {

    it('should perform the not operation on the given param', () => {
      expect(neat.not(true)).to.be.equal(false)
    })
  })

  describe('or', () => {

    it('should perform the or operation on the given params', () => {
      expect(neat.or(true)(false)).to.be.equal(true)
    })
  })

  describe('and', () => {

    it('should perform the and operation on the given params', () => {
      expect(neat.and(true)(false)).to.be.equal(false)
    })
  })

  describe('compose', () => {

    it('should perform right to left function composition', () => {
      let test = neat.compose(Math.sqrt)(Math.pow)
      expect(test(3, 4)).to.be.equal(9) // sqrt(3^4)
    })
  })
  
  describe('composeMany', () => {

    it('should perform right to left function composition', () => {
      let test = neat.composeMany(Math.sqrt, Math.pow)
      expect(test(3, 4)).to.be.equal(9) // sqrt(3^4)
    })
  })


})