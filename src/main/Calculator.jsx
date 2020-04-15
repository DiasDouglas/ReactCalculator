import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    currentValueIndex: 0
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
        this.additiveInverse = this.additiveInverse.bind(this)
    }

    clearMemory(){
        this.setState({ ...initialState })
    }

    additiveInverse(){
        console.log(this.state)
        const values = [...this.state.values]
        const currentValueIndex = this.state.currentValueIndex

        values[currentValueIndex] *= -1 

        this.setState({ values: values, displayValue: values[currentValueIndex] })
    }

    setOperation(operation){
        if(this.state.currentValueIndex === 0){
            this.setState({operation, currentValueIndex: 1, clearDisplay: true})
        }
        else {
            const equals = operation === '='
            var divisionByZero = false
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            
            switch(currentOperation){
                case '+':
                    values[0] = values[0] + values[1]
                    values[1] = 0
                    break
                case '-':
                    values[0] = values[0] - values[1]
                    values[1] = 0
                    break
                case 'x':
                    values[0] = values[0] * values[1]
                    values[1] = 0
                    break
                case '/':
                    if(values[1] === 0){
                        divisionByZero = true
                    }
                    else {
                        values[0] = values[0] / values[1]
                        values[1] = 0
                    }
                    break
                case '%':
                    values[0] = (values[0] / 100) * values[1]
                    values[1] = 0
                    break
                default:
            }

            if(!divisionByZero){
                this.setState({
                    displayValue: values[0], 
                    operation: equals ? null : operation,
                    currentValueIndex: equals ? 0 : 1,
                    clearDisplay: !equals,
                    values
                })
            }
            else {
                this.setState({...initialState, displayValue: "ERROR"})
            }
        }
    }

    addDigit(n){
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }
        
        const clearDisplay = this.state.displayValue === '0' ||
            this.state.displayValue === "ERROR" || this.state.clearDisplay
        
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay: false})

        if(n !== '.'){
            const i = this.state.currentValueIndex
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory}/>
                <Button label="+/-" click={this.additiveInverse}/>
                <Button label= "%" click={this.setOperation}/>
                <Button label="/" operation click={this.setOperation}/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="x" operation click={this.setOperation} />
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" operation click={this.setOperation}/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" operation click={this.setOperation}/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" operation click={this.setOperation}/>
            </div>
        )
    }
}
