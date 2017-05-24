// !!!!! NO CODE ABOVE THIS LINE !!!!!!
let $ = window.jQuery

class Calculator {
  constructor (containerElId) {
    let el = document.getElementById(containerElId)
    if (!el) {
      console.log('Please pass a valid element.')
      return
    }

    this._idEl = containerElId
    this._containerEl = el
    this._expression = []
    this._number = ''
    this._total = 0
    this._isLocked = false
    this._lastButtonPressedOperator = false

    this._containerEl.innerHTML = this._buildHtml()
    this._addEvents()
  }

// ------------------------------------------------------------
// Public Methods
// ------------------------------------------------------------

  press (button) {
    // do nothing if the calculator is locked
    if (this._isLocked) return

    // make sure button is a string
    button = button + ''

    // only allow single-character buttons
    if (button.length !== 1) return

    if (this._isOperator(button)) {
      this._pressOperator(button)
      // console.log(button)
    } else if (button === 'c') {
      this._pressClear()
    } else if (button === '.') {
      this._pressDecimal(button)
    } else if (button === '=') {
      this._pressEquals(button)
    } else {
      this._updateNum(button)
      this._renderResult(this._number)
    }
  }

  pressButton (inputNum) {
    return this.press(inputNum)
  }

  value () {
    let a = parseFloat(this._expression[0])
    let b = parseFloat(this._expression[2])
    if (this._expression.length <= 2) {
      return null
    }
    if (this._expression[1] === '+') {
      this._total = a + b
    } else if (this._expression[1] === '-') {
      this._total = a - b
    } else if (this._expression[1] === '/') {
      this._total = a / b
    } else if (this._expression[1] === 'x') {
      this._total = a * b
    }
    this._renderResult(this._total)
    return this._total
  }

  lock () {
    this._isLocked = true
    // TODO: update the UI here
  }

  unlock () {
    this._isLocked = false
    // TODO: update the UI here
  }

  sayHello () {
    this._expression = []
    this._number = ''
    this._number = '0.7734'
  }

  toString () {
    if (this._number !== '') {
      this._expression.push(this._number)
    }
    return this._expression.join(' ')
  }

  destroy () {
    this._containerEl.innerHTML = ''
  }

// ------------------------------------------------------------
// Private Methods
// ------------------------------------------------------------
  _addEvents () {
    let that = this
    $(this._idEl).click(function (evt) {
      let inputNum = evt.target.value
      if (inputNum !== undefined) {
        that.press(inputNum)
      }
    })
  }
  _pressClear () {
    this._number = ''
    this._expression = []
    this._renderResult('0')
  }

  _isOperator (input) {
    let opp = ['+', '-', 'x', '/', '=']
    for (let i = 0; i < opp.length; i++) {
      if (input === opp[i]) {
        return true
      }
    }
  }

  _pressOperator (input) {
    this._expression.push(this._number)
    this._expression.push(input)
    this._number = ''
  }

  _renderResult (input) {
    let resultBox = $('#' + this._idEl + ' .sum')
    resultBox.html(input)
  }

  _pressDecimal (input) {
    if (input === '.' && this._number[this._number.length - 1] !== '.') {
      this._updateNum(input)
    }
  }

  _pressEquals (input) {
    if (input === '=') {
      this._expression.push(this._number)
      this._renderResult(this.value())
    }
  }

  _updateNum (input) {
    this._number += input
  }

  // _updateExpression (input) {
  //   let num = parseFloat(this._number)
  //   this._expression.push(num)
  //   this._number = ''
  //   this._expression.push(input)
  //   this._renderResult(input)
  // }

  _buildHtml () {
    return `<div class="calculator" id="calc">
      <div class="output-row">
        <button class="btn clear" id="clearall" data-clearall="c">c</button>
        <div class="btn sum"></div>
      </hr>
      </div>
      <div class="inner-btns">
        <button class="btn num" data-num="7">7</button>
        <button class="btn num" data-num="8">8</button>
        <button class="btn num" data-num="9">9</button>
        <button class="btn operator" data-operator="/">/</button>
      </br>
        <button class="btn num" data-num="4">4</button>
        <button class="btn num" data-num="5">5</button>
        <button class="btn num" data-num="6">6</button>
        <button class="btn operator" data-operator="x">x</button>
      </br>
        <button class="btn num" data-num="1">1</button>
        <button class="btn num" data-num="2">2</button>
        <button class="btn num" data-num="3">3</button>
        <button class="btn operator" data-operator="-">-</button>
      </br>
        <button class="btn num" data-num="0">0</button>
        <button class="btn decimal" id="decimal" data-num=".">.</button>
        <button class="btn equals" id="equals" data-equals="=">=</button>
        <button class="btn operator" data-operator="+">+</button>
      </div>
      </div>
    </div>`
  }
}
// !!!!! NO CODE BELOW THIS LINE !!!!!!
