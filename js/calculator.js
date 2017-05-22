// !!!!! NO CODE ABOVE THIS LINE !!!!!!
let $ = window.jQuery

class Calculator {
  constructor (containerElId) {
    let el = document.getElementById(containerElId)
    if (!el) {
      console.log('Please pass a valid element.')
      return
    }
    this.idEl = containerElId
    this._containerEl = el
    this._containerEl.innerHTML = this._buildHtml()
    // this.containerEl = containerElId
    this._addEvents()
    this.press()
    this.expression = []
    this.number = ''
    this.operator = ''
    this._total = 0
  }
// ------------------------------------------------------------
// Public Methods
// ------------------------------------------------------------

  press (inputNum) {
    // TODO: some validation of inputNum
    // then pass it to your internal function
  }

  pressButton (inputNum) {
    return this.press(inputNum)
  }

  value () {
    return this._calculate()
  }

  lock () {

  }

  unlock () {

  }

  sayHello () {

  }

// ------------------------------------------------------------
// Private Methods
// ------------------------------------------------------------
  _addEvents () {
    let that = this
    $('#' + that.idEl + ' .btn').click(function (evt) {
      let buttonClass = evt.target.className
      let html = evt.target.innerHTML
      that.press(buttonClass, html)
    })
  }

  _calculate () {
    let a = parseFloat(this.expression[0])
    let b = parseFloat(this.expression[2])
    if (this.expression[1] === '+') {
      this._total = a + b
    } else if (this.expression[1] === '-') {
      this._total = a - b
    } else if (this.expression[1] === '/') {
      this._total = a / b
    } else if (this.expression[1] === 'x') {
      this._total = a * b
    }
    return this._total
  }

  _operation (buttonClass, html) {
    let that = this
    let resultBox = $('#' + that.idEl + ' .sum')
    if (buttonClass === 'btn num') {
      that.number += html
      resultBox.html(html)
      that.expression.push(html)
      console.log(that.expression)
    } else if (buttonClass === 'btn operator') {
      that.operator += html
      resultBox.html(that.expression)
      that.expression.push(html)
      console.log(that.expression)
    } else if (buttonClass === 'btn clear') {
      that.expression = []
      resultBox.html('')
    } else if (buttonClass === 'btn equals') {
      that.expression.push(html)
      that._calculate()
      resultBox.html(that._calculate())
      console.log(that.expression)
    }
  }

  _buildHtml () {
    return `<div class="calculator" id="calc">
      <div class="output-row">
        <button class="btn clear" id="clearall">c</button>
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
        <button class="btn decimal" id="decimal">.</button>
        <button class="btn equals" id="equals" data-operator="=">=</button>
        <button class="btn operator" data-operator="+">+</button>
      </div>
      </div>
    </div>`
  }
}
// !!!!! NO CODE BELOW THIS LINE !!!!!!
