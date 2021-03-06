  var showingSourceCode = false;
  var isInEditMode = true;
  //script responsavel por deixar o iframe editavel.
  function enableEditMode() {
    richTextField.document.designMode = 'On';
  }
    //script responsavel por deixar os "button" ativos
  function execCmd(command) {
    richTextField.document.execCommand(command, false, null);
  }
  //script responsavel por deixar os "select" ativos
  function execCommandWithArg(command, arg) {
    richTextField.document.execCommand(command, false, arg);
  }

  function toggleSource() {
    if (showingSourceCode) {
      richTextField.document.getElementByTagName('body')[0].innerHTML = richTextField.document.getElementByTagName("body")[0].textContent;
      showingSourceCode = false;
    } else {
      richTextField.document.getElementByTagName('body')[0].textContent = richTextField.document.getElementByTagName("body")[0].innerHTML;
      showingSourceCode = true;
    }
  }

  function toggleEdit() {
    if (isInEditMode) {
      richTextField.document.designMode = 'Off';
      isInEditMode = false;
    } else {
      richTextField.document.designMode = 'On';
      isInEditMode = true;
    }
  }
