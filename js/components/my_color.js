AFRAME.registerComponent('my-color', {
  schema: {
    color: { type: 'string' }
  },

  init: function () {
    // Do something when component first attached.
    this.colorInput = document.getElementById("color");
    this.colorInput.value = this.data.color;
    console.log("color", this.colorInput.value)
    this.el.setAttribute('material', 'color', this.colorInput.value);

    const el = this.el;
    const colorInput = this.colorInput;
    this.colorInput.addEventListener("change", function () {
      el.setAttribute('material', 'color', colorInput.value);
    });
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
});