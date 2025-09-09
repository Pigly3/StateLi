//Copyright 2025 Pigly3
let _stateRegister = {}
function useState(value, name, type="html"){
  const getter = () => {
    return _stateRegister[name].value
  }
  const setter = (newValue) => {
    _stateRegister[name].value = newValue
    document.querySelectorAll(`[state="${name}"]`).forEach((element) => {
      if (element.getAttribute("bind")){
        element.setAttribute(element.getAttribute("bind"), newValue)
        return
      }
      if (type == "text"){
        element.textContent = newValue
      } else {
        element.innerHTML = newValue
      }
    })
    _stateRegister[name].callbacks.forEach((callback)=>{
      callback(_stateRegister[name].value)
    })
    return newValue
  }
  _stateRegister[name] = {
    value: value,
    getter: getter,
    setter: setter,
    callbacks: []
  }
  setter(value)
  return [getter, setter]
}
function useCallback(inputName, callback){
  _stateRegister[inputName].callbacks.push(callback)
  callback(_stateRegister[inputName].value)
}