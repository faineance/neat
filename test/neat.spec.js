import chai from 'chai'
import * as neat from '../lib/neat.js'

chai.expect()
chai.config.showDiff = false;
const expect = chai.expect


describe('Given an instance of my library', () => {


    describe('id', () => {

        it('should return the parameter supplied to it', () => {
            expect(neat.id(0)).to.be.equal(0)
        })
    })
    describe('compose', () => {

        it('should perform right to left function composition', () => {
            let test = neat.compose(Math.sqrt)(Math.pow) 
            expect(test(3,4)).to.be.equal(9) // sqrt(3^4)
        })
    })
    describe('composeMany', () => {

        it('should perform right to left function composition', () => {
            let test = neat.compose(Math.sqrt)(Math.pow) 
            expect(test(3,4)).to.be.equal(9) // sqrt(3^4)
        })
    })


})