export default () => {
  const stepper = document.querySelector('.stepper');
  const stepperInput = stepper.querySelector('input');
  const stepperMinusBtn = stepper.querySelector('.stepper__btn--minus');
  const stepperPlusBtn = stepper.querySelector('.stepper__btn--plus');
  const stepperMin = 1;
  const stepperMax = 99999;

  const incrementStepperValue = (stepperValue) => {
    if(stepperValue >= stepperMax) {
      stepperMinusBtn.disabled = false;
      stepperPlusBtn.disabled = true;
    } else {
      stepperPlusBtn.disabled = false;
    }
  };

  stepperInput.addEventListener('keydown', (e) => {
    if(e.currentTarget.value <= stepperMin) {
      stepperMinusBtn.disabled = true;
      stepperPlusBtn.disabled = false;
    } else {
      stepperMinusBtn.disabled = false;
    }

    if(e.currentTarget.value >= stepperMax) {
      stepperMinusBtn.disabled = false;
      stepperPlusBtn.disabled = true;
    } else {
      stepperPlusBtn.disabled = false;
    }
  });

  stepperMinusBtn.addEventListener('click', (e) => {
    let currentValue = parseInt(stepperInput.value);
    currentValue--;
    stepperInput.value = currentValue;
    stepperPlusBtn.disabled = false;

    if(stepperInput.value <= stepperMin) {
      stepperInput.value = stepperMin;
      stepperMinusBtn.disabled = true;
    } else {
      stepperMinusBtn.disabled = false;
    }
  });

  stepperPlusBtn.addEventListener('click', (e) => {
    let currentValue = parseInt(stepperInput.value);
    currentValue++;
    stepperInput.value = currentValue;
    stepperMinusBtn.disabled = false;

    if(stepperInput.value >= stepperMax) {
      stepperInput.value = stepperMax;
      stepperPlusBtn.disabled = true;
    } else {
      stepperPlusBtn.disabled = false;
    }
  });

};
