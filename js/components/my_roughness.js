AFRAME.registerComponent('my-roughness', {
  schema: {
    roughness: { type: 'number' }
  },

  init: function () {
    // Do something when component first attached.
    this.roughnessInput = document.getElementById("roughness");
    this.roughnessInput.value = this.data.roughness;
    this.el.setAttribute('material', 'roughness', this.roughnessInput.value);

    const el = this.el;
    const roughnessInput = this.roughnessInput;
    this.roughnessInput.addEventListener("change", function () {
      el.setAttribute('material', 'roughness', roughnessInput.value);
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