// !!!!! NO CODE ABOVE THIS LINE !!!!!!
class Calculator {
  constructor (container) {
    this.container = container
    document.getElementById(container).innerHTML = this._buildHtml()
  }

  press () {

  }
// ------------------------------------------------------------
// Private Methods
// ------------------------------------------------------------

  _buildHtml () {
    return `<div class="output-row">
      <button class="btn clear" id="clearall">c</button>
      <a class="btn result-box" id="sum"></a>
    </hr>
    </div>
    <div class="inner-btns">
      <button class="btn num">7</button>
      <button class="btn num">8</button>
      <button class="btn num">9</button>
      <button class="btn operator">/</button>
    </br>
      <button class="btn num">4</button>
      <button class="btn num">5</button>
      <button class="btn num">6</button>
      <button class="btn operator">x</button>
    </br>
      <button class="btn num">1</button>
      <button class="btn num">2</button>
      <button class="btn num">3</button>
      <button class="btn operator">-</button>
    </br>
      <button class="btn num">0</button>
      <button class="btn decimal" id="decimal">.</button>
      <button class="btn equals" id="equals">=</button>
      <button class="btn operator">+</button>
    </div>
    </div>`
  }
}
// !!!!! NO CODE BELOW THIS LINE !!!!!!
