/**
 * Output class wraps the output editor logic
 */

'use strict'

class Output {

  constructor(el) {
    this.outputEditor = CodeMirror.fromTextArea(el, {
      lineNumbers: true,
      smartIndent: true,
      readOnly: true,
      mode: 'application/javascript',
      lint: true
    })
  }

  /**
   * Format and set output
   */

  show(object) {
    let val = ''
    if (object !== '') {
      val = JSON.stringify(object, null, 2)
    }
    this.outputEditor.setValue(val)
  }
}

/**
 * Exports
 */

module.exports = Output
