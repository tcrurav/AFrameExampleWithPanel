AFRAME.registerComponent('my-opacity', {
  schema: {
    opacity: { type: 'number' }
  },

  init: function () {
    // Do something when component first attached.
    this.opacityInput = document.getElementById("opacity");
    this.opacityInput.value = this.data.opacity;
    this.el.setAttribute('material', 'opacity', this.opacityInput.value);

    const el = this.el;
    const opacityInput = this.opacityInput;
    this.opacityInput.addEventListener("change", function () {
      el.setAttribute('material', 'opacity', opacityInput.value);
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