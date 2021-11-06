AFRAME.registerComponent('my-wireframe', {
  schema: {
    wireframe: { type: 'boolean' }
  },

  init: function () {
    // Do something when component first attached.
    this.wireframeInput = document.getElementById("wireframe");
    this.wireframeInput.checked = this.data.wireframe;
    this.el.setAttribute('material', 'wireframe', this.wireframeInput.checked);

    const el = this.el;
    const wireframeInput = this.wireframeInput;
    this.wireframeInput.addEventListener("change", function () {
      el.setAttribute('material', 'wireframe', wireframeInput.checked);
      console.log("cambió")
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