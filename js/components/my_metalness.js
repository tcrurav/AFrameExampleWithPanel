AFRAME.registerComponent('my-metalness', {
  schema: {
    metalness: { type: 'number' }
  },

  init: function () {
    // Do something when component first attached.
    this.metalnessInput = document.getElementById("metalness");
    this.metalnessInput.value = this.data.metalness;
    this.el.setAttribute('material', 'metalness', this.metalnessInput.value);

    const el = this.el;
    const metalnessInput = this.metalnessInput;
    this.metalnessInput.addEventListener("change", function () {
      el.setAttribute('material', 'metalness', metalnessInput.value);
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